const QUESTIONS = [
  {theme:"Qu'est-ce que l'IA ?",themeCol:"#4F8EF7",q:"YouTube te propose une vidéo sans que tu la cherches. Est-ce de l'IA ?",opts:["Non, c'est un simple algorithme","Oui — elle analyse tes habitudes","Non, des humains font les choix","Oui, mais seulement pour les abonnés"],ans:1,explain:"C'est bien de l'IA ! Un algorithme de recommandation apprend tes goûts sur des millions d'utilisateurs et s'améliore en permanence — sans jamais te demander ton avis."},
  {theme:"Qu'est-ce que l'IA ?",themeCol:"#4F8EF7",q:"Qu'est-ce qu'une 'IA faible' ?",opts:["Une IA qui fait des erreurs","Une IA spécialisée dans une seule tâche","Une IA moins puissante qu'un humain","Une IA qui ne parle pas français"],ans:1,explain:"Une IA 'faible' est excellente dans UN seul domaine. AlphaGo bat tout humain au Go — mais serait incapable de jouer aux dames. Toutes les IA actuelles sont des IA 'faibles'."},
  {theme:"Cerveau vs IA",themeCol:"#1D9E75",q:"Quelle est la consommation électrique du cerveau humain ?",opts:["2 000 watts — comme un four","200 watts — comme un fer à repasser","20 watts — comme une ampoule","2 watts — comme une LED"],ans:2,explain:"Le cerveau consomme environ 20 watts — autant qu'une ampoule ! Un ordinateur qui ferait les mêmes calculs consommerait des milliers de fois plus. Le cerveau est extrêmement efficace."},
  {theme:"Cerveau vs IA",themeCol:"#1D9E75",q:"Quelle capacité reste uniquement humaine face à l'IA actuelle ?",opts:["Jouer aux échecs","Reconnaître des visages","Comprendre les émotions non dites","Traduire du texte"],ans:2,explain:"Comprendre qu'un ami est triste même s'il dit 'ça va', lire le langage corporel, ressentir de l'empathie... L'IA peut simuler ces réponses mais ne les ressent pas vraiment."},
  {theme:"Reconnaissance d'images",themeCol:"#2E6DA4",q:"Comment une IA 'voit'-elle une photo ?",opts:["Comme un humain voit une image","Comme un tableau de chiffres (0 à 255 par pixel)","Elle ne peut pas voir les images","Comme une description textuelle"],ans:1,explain:"Pour une IA, une image n'est qu'une grille de nombres. Chaque pixel vaut entre 0 (noir) et 255 (blanc). Un selfie de 12 mégapixels = 12 millions de chiffres à analyser."},
  {theme:"Reconnaissance d'images",themeCol:"#2E6DA4",q:"Combien de points infrarouges Apple Face ID projette-t-il sur ton visage ?",opts:["100 points","1 000 points","30 000 points","1 million de points"],ans:2,explain:"30 000 points infrarouges invisibles en une fraction de seconde ! C'est pour ça qu'une simple photo ne peut pas tromper Face ID — il reconstruit ton visage en 3D."},
  {theme:"Tokens — monnaie de l'IA",themeCol:"#EF9F27",q:"Un token, c'est quoi ?",opts:["Un mot complet","Une lettre","Un morceau de mot","Une phrase courte"],ans:2,explain:"Un token est l'unité de base que l'IA utilise pour lire et écrire. 'Bonjour' = 1 token. 'Extraordinaire' = 3 tokens. Les mots courants = 1 token, les mots longs = plusieurs."},
  {theme:"Tokens — monnaie de l'IA",themeCol:"#EF9F27",q:"Une phrase en français coûte combien de tokens de plus qu'en anglais ?",opts:["La même chose — les langues sont égales","Environ 20% de plus","2 fois plus","Moins — le français est plus logique"],ans:1,explain:"Le français est moins bien 'compressé' par les algorithmes. Parler français à une IA coûte ~20% de tokens de plus — une vraie inégalité linguistique dans l'économie de l'IA !"},
  {theme:"Deepfakes & Protection",themeCol:"#E24B4A",q:"Pour détecter un deepfake, quel indice est le plus fiable ?",opts:["La personne ne cligne pas des yeux","Les mains avec un mauvais nombre de doigts","La voix est robotique","Le fond est flou"],ans:1,explain:"Les mains restent le point faible des IA : trop de doigts, mauvaises proportions, doigts qui fusionnent. C'est le premier endroit à regarder face à une image suspecte !"},
  {theme:"Deepfakes & Protection",themeCol:"#E24B4A",q:"Combien de secondes d'audio suffisent pour cloner une voix avec une IA ?",opts:["10 minutes","1 minute","30 secondes","3 secondes"],ans:3,explain:"3 secondes seulement ! Un vocal TikTok ou Instagram est largement suffisant. La voix clonée peut ensuite dire n'importe quoi de façon très convaincante."},
  {theme:"Deepfakes & Protection",themeCol:"#E24B4A",q:"Quel numéro appeler en France en cas de cyberharcèlement ?",opts:["3114","17","3018","119"],ans:2,explain:"Le 3018 est le numéro national contre le cyberharcèlement : gratuit, confidentiel, disponible 7j/7 de 9h à 23h. Pour les victimes ET leurs proches."},
  {theme:"Deepfakes & Protection",themeCol:"#E24B4A",q:"Créer un deepfake d'un(e) camarade sans son accord, c'est :",opts:["Légal si c'est pour rire","Légal si on ne le diffuse pas","Illégal — délit pénal (loi SREN 2023)","Illégal seulement pour les adultes"],ans:2,explain:"La loi SREN 2023 punit la création ET la diffusion de deepfakes non consentis. Délit pénal applicable aux mineurs. Les parents peuvent être civilement responsables."},
];

const LETTERS = ['A','B','C','D'];
let cur = 0;
let score = 0;
let userAnswers = [];
let answered = false;

function $(id){
  return document.getElementById(id);
}

function showScreen(id){
  document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
  $(id).classList.add('active');
}

function startQuiz(){
  cur = 0;
  score = 0;
  userAnswers = [];
  showScreen('screen-quiz');
  renderQ();
}

function goHome(){
  cur = 0;
  score = 0;
  userAnswers = [];
  answered = false;
  showScreen('screen-home');
}

function renderQ(){
  answered = false;
  const q = QUESTIONS[cur];
  const pct = Math.round((cur / 12) * 100);

  $('q-num').textContent = cur + 1;
  $('progress').style.width = pct + '%';
  $('score-live').textContent = score + ' pts';

  const zone = $('q-zone');
  zone.innerHTML = `
    <span class="theme-badge" style="background:${q.themeCol}22;color:${q.themeCol};border:1px solid ${q.themeCol}44">${q.theme}</span>
    <div class="q-card">
      <div class="q-text">${q.q}</div>
      <div class="options" id="opts">
        ${q.opts.map((o, i) => `
          <button class="opt-btn" data-letter="${LETTERS[i]}" data-idx="${i}" onclick="answer(${i})">
            <span class="opt-letter">${LETTERS[i]}</span>
            <span>${o}</span>
          </button>
        `).join('')}
      </div>
    </div>
    <div class="feedback" id="feedback"></div>
    <button class="btn-next" id="btn-next" onclick="nextQ()">
      ${cur < 11 ? 'Question suivante' : 'Voir mes résultats'}
      <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    </button>
  `;
}

function answer(idx){
  if(answered) return;

  answered = true;
  const q = QUESTIONS[cur];
  const correct = idx === q.ans;

  if(correct) score += 10;

  userAnswers.push({
    q: q.q,
    userAns: idx,
    correct,
    correctAns: q.ans,
    opts: q.opts,
    theme: q.theme
  });

  document.querySelectorAll('.opt-btn').forEach((btn, i) => {
    btn.classList.add('disabled');
    if(i === q.ans) btn.classList.add('correct');
    else if(i === idx && !correct) btn.classList.add('wrong');
  });

  const fb = $('feedback');
  fb.className = 'feedback show ' + (correct ? 'fb-correct' : 'fb-wrong');
  fb.innerHTML = `<strong>${correct ? 'Bonne réponse !' : 'Pas tout à fait...'}</strong> ${q.explain}`;

  $('btn-next').classList.add('show');

  if(correct){
    const btn2 = document.querySelector(`.opt-btn[data-idx="${idx}"]`);
    createParticles(btn2);
  }
}

function nextQ(){
  cur++;
  if(cur >= 12) showResult();
  else renderQ();
}

function showResult(){
  showScreen('screen-result');

  const pct = Math.round((score / 120) * 100);
  const correct = userAnswers.filter(a => a.correct).length;
  const wrong = 12 - correct;

  $('ring-score').textContent = correct;
  $('r-correct').textContent = correct;
  $('r-wrong').textContent = wrong;
  $('r-pct').textContent = pct + '%';

  const ring = $('ring-fill');
  const circumference = 439.8;
  const color = pct >= 80 ? '#1D9E75' : pct >= 50 ? '#EF9F27' : '#E24B4A';

  ring.style.stroke = color;
  ring.style.strokeDashoffset = circumference;

  setTimeout(() => {
    ring.style.strokeDashoffset = circumference - (circumference * pct / 100);
  }, 100);

  let title, msg;

  if(pct >= 92){
    title = 'Excellent !';
    msg = 'Tu maîtrises parfaitement le sujet. Tu pourrais presque animer la séance toi-même !';
  }else if(pct >= 75){
    title = 'Très bien !';
    msg = 'Tu as de solides connaissances sur l\'IA. Quelques notions à revoir mais c\'est vraiment bien.';
  }else if(pct >= 50){
    title = 'Pas mal !';
    msg = 'Tu connais les bases. Quelques révisions sur les thèmes ratés et tu seras au top.';
  }else{
    title = 'Continue à apprendre !';
    msg = 'L\'IA est un sujet vaste — cette session va t\'aider à progresser. Relis tes fiches et réessaie !';
  }

  $('result-title').textContent = title;
  $('result-msg').textContent = msg;

  const rl = $('review-list');
  rl.innerHTML = '<div style="font-family:\'Syne\',sans-serif;font-size:14px;font-weight:700;color:#8A95A8;letter-spacing:.06em;text-transform:uppercase;margin-bottom:14px">Récapitulatif</div>';

  userAnswers.forEach((a, i) => {
    rl.innerHTML += `
      <div class="review-item">
        <div class="review-icon ${a.correct ? 'ok' : 'ko'}">${a.correct ? '✓' : '✗'}</div>
        <div>
          <div class="review-q">Q${i + 1}. ${a.q}</div>
          <div class="review-a">
            ${a.correct ? 'Bonne réponse : ' + a.opts[a.correctAns] : 'Ta réponse : ' + a.opts[a.userAns] + ' — Bonne réponse : ' + a.opts[a.correctAns]}
          </div>
        </div>
      </div>
    `;
  });

  if(pct >= 80) launchConfetti();
}

function restartQuiz(){
  startQuiz();
}

function createParticles(el){
  if(!el) return;

  const rect = el.getBoundingClientRect();

  for(let i = 0; i < 8; i++){
    const p = document.createElement('div');
    p.style.cssText = `
      position:fixed;
      width:6px;
      height:6px;
      border-radius:50%;
      background:#1D9E75;
      pointer-events:none;
      z-index:9999;
      left:${rect.left + rect.width / 2}px;
      top:${rect.top + rect.height / 2}px;
      transition:all .6s ease;
      opacity:1
    `;

    document.body.appendChild(p);

    const angle = (i / 8) * Math.PI * 2;
    const dist = 60 + Math.random() * 40;

    setTimeout(() => {
      p.style.left = (rect.left + rect.width / 2 + Math.cos(angle) * dist) + 'px';
      p.style.top = (rect.top + rect.height / 2 + Math.sin(angle) * dist) + 'px';
      p.style.opacity = '0';
      p.style.transform = 'scale(0)';
    }, 10);

    setTimeout(() => p.remove(), 700);
  }
}

function launchConfetti(){
  const canvas = $('confetti');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = Array.from({length:120}, () => ({
    x: Math.random() * canvas.width,
    y: -10,
    vx: (Math.random() - 0.5) * 4,
    vy: Math.random() * 4 + 2,
    color: ['#4F8EF7','#7B61FF','#F5C842','#1D9E75','#E24B4A'][Math.floor(Math.random() * 5)],
    size: Math.random() * 8 + 4,
    angle: Math.random() * 360,
    spin: (Math.random() - .5) * 6
  }));

  let frame = 0;

  const anim = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += .08;
      p.angle += p.spin;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle * Math.PI / 180);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.max(0, 1 - frame / 200);
      ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      ctx.restore();
    });

    frame++;

    if(frame < 200) requestAnimationFrame(anim);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  requestAnimationFrame(anim);
}