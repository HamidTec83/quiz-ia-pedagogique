const QUIZZES = {
  main: [
    {theme:"Qu'est-ce que l'IA ?",themeCol:"#4F8EF7",q:"YouTube te propose une vidéo sans que tu la cherches. Est-ce de l'IA ?",opts:["Non, c'est un simple algorithme","Oui — elle analyse tes habitudes","Non, des humains font les choix","Oui, mais seulement pour les abonnés"],ans:1,explain:"C'est bien de l'IA ! Un algorithme de recommandation apprend tes goûts sur des millions d'utilisateurs et s'améliore en permanence — sans jamais te demander ton avis."},
    {theme:"Qu'est-ce que l'IA ?",themeCol:"#4F8EF7",q:"Qu'est-ce qu'une 'IA faible' ?",opts:["Une IA qui fait des erreurs","Une IA spécialisée dans une seule tâche","Une IA moins puissante qu'un humain","Une IA qui ne parle pas français"],ans:1,explain:"Une IA 'faible' est excellente dans UN seul domaine. AlphaGo bat tout humain au Go — mais serait incapable de jouer aux dames. Toutes les IA actuelles sont des IA 'faibles'."},
    {theme:"Cerveau vs IA",themeCol:"#1D9E75",q:"Quelle est la consommation électrique du cerveau humain ?",opts:["2 000 watts — comme un four","200 watts — comme un fer à repasser","20 watts — comme une ampoule","2 watts — comme une LED"],ans:2,explain:"Le cerveau consomme environ 20 watts — autant qu'une ampoule ! Un ordinateur qui ferait les mêmes calculs consommerait des milliers de fois plus. Le cerveau est extrêmement efficace."},
    {theme:"Cerveau vs IA",themeCol:"#1D9E75",q:"Quelle capacité reste uniquement humaine face à l'IA actuelle ?",opts:["Jouer aux échecs","Reconnaître des visages","Comprendre les émotions non dites","Traduire du texte"],ans:2,explain:"Comprendre qu'un ami est triste même s'il dit 'ça va', lire le langage corporel, ressentir de l'empathie... L'IA peut simuler ces réponses mais ne les ressent pas vraiment."},
    {theme:"Reconnaissance d'images",themeCol:"#2E6DA4",q:"Comment une IA 'voit'-elle une photo ?",opts:["Comme un humain voit une image","Comme un tableau de chiffres (0 à 255 par pixel)","Elle ne peut pas voir les images","Comme une description textuelle"],ans:1,explain:"Pour une IA, une image n'est qu'une grille de nombres. Chaque pixel vaut entre 0 (noir) et 255 (blanc). Un selfie de 12 mégapixels = 12 millions de chiffres à analyser."},
    {theme:"Reconnaissance d'images",themeCol:"#2E6DA4",q:"Combien de points infrarouges Apple Face ID projette-t-il sur ton visage ?",opts:["100 points","1 000 points","30 000 points","1 million de points"],ans:2,explain:"30 000 points infrarouges invisibles en une fraction de seconde ! C'est pour ça qu'une simple photo ne peut pas tromper Face ID — il reconstruit ton visage en 3D."},
    {theme:"Tokens — monnaie de l'IA",themeCol:"#EF9F27",q:"Un token, c'est quoi ?",opts:["Un mot complet","Une lettre","Un morceau de mot","Une phrase courte"],ans:2,explain:"Un token est l'unité de base que l'IA utilise pour lire et écrire. 'Bonjour' = 1 token. 'Extraordinaire' = 3 tokens. Les mots courants = 1 token, les mots longs = plusieurs."},
    {theme:"Tokens — monnaie de l'IA",themeCol:"#EF9F27",q:"Une phrase en français coûte combien de tokens de plus qu'en anglais ?",opts:["La même chose — les langues sont égales","Environ 20% de plus","2 fois plus","Moins — le français est plus logique"],ans:1,explain:"Le français est moins bien 'compressé' par les algorithmes. Parler français à une IA coûte ~20% de tokens de plus — une vraie inégalité linguistique dans l'économie de l'IA !"},
    {theme:"Deepfakes & Protection",themeCol:"#E24B4A",q:"Pour détecter un deepfake, quel indice est le plus fiable ?",opts:["La personne ne cligne pas des yeux","Les mains avec un mauvais nombre de doigts","La voix est robotique","Le fond est flou"],ans:1,explain:"Les mains restent le point faible des IA : trop de doigts, mauvaises proportions, doigts qui fusionnent. C'est le premier endroit à regarder face à une image suspecte !"},
    {theme:"Deepfakes & Protection",themeCol:"#E24B4A",q:"Combien de secondes d'audio suffisent pour cloner une voix avec une IA ?",opts:["10 secondes","60 secondes","30 secondes","3 secondes"],ans:3,explain:"3 secondes seulement ! Un vocal TikTok ou Instagram est largement suffisant. La voix clonée peut ensuite dire n'importe quoi de façon très convaincante."},
    {theme:"Deepfakes & Protection",themeCol:"#E24B4A",q:"Quel numéro appeler en France en cas de cyberharcèlement ?",opts:["3114","17","3018","119"],ans:2,explain:"Le 3018 est le numéro national contre le cyberharcèlement : gratuit, confidentiel, disponible 7j/7 de 9h à 23h. Pour les victimes ET leurs proches."},
    {theme:"Deepfakes & Protection",themeCol:"#E24B4A",q:"Créer un deepfake d'un(e) camarade sans son accord, c'est :",opts:["Légal si c'est pour rire","Légal si on ne le diffuse pas","Illégal — délit pénal (loi SREN 2023)","Illégal seulement pour les adultes"],ans:2,explain:"La loi SREN 2023 punit la création ET la diffusion de deepfakes non consentis. Délit pénal applicable aux mineurs. Les parents peuvent être civilement responsables."}
  ],

  deepfake: [
  {
    theme:"Deepfake visuel",
    themeCol:"#E24B4A",
    q:"Quels sont les indices visuels d’un face swap ?",
    opts:[
      "Incohérences d’éclairage entre le visage et la scène",
      "Image nette sans bruit",
      "Artefacts ou flou autour des contours du visage",
      "Couleurs vives",
      "Clignement des yeux irrégulier",
      "Résolution élevée de l’image",
      "Présence d’un arrière-plan détaillé"
    ],
    ans:[0,2,4],
    explain:"Les swaps laissent souvent des traces sur les contours, la lumière et les yeux."
  },

  {
    theme:"Deepfake visuel",
    themeCol:"#E24B4A",
    q:"Quels défauts apparaissent lors des mouvements ?",
    opts:[
      "Fluidité parfaite des mouvements",
      "Désynchronisation labiale",
      "Stabilisation vidéo efficace",
      "Déformation du visage lors de mouvements rapides",
      "Haute fréquence d’image (60 fps)",
      "Tracking instable, visage qui glisse",
      "Caméra fixe",
      "Micro-saccades anormales"
    ],
    ans:[1,3,5,7],
    explain:"Quand le visage bouge, les modèles ont souvent du mal à garder une cohérence parfaite."
  },

  {
    theme:"Audit audio",
    themeCol:"#EF9F27",
    q:"Quels éléments audio peuvent révéler un deepfake ?",
    opts:[
      "Voix claire et compréhensible",
      "Voix trop propre ou artificielle",
      "Absence de bruit ambiant",
      "Intonation incohérente",
      "Volume sonore stable",
      "Décalage audio/vidéo",
      "Bonne articulation",
      "Artefacts numériques"
    ],
    ans:[1,3,5,7],
    explain:"L’audio artificiel peut être trop lisse, mal synchronisé ou montrer des artefacts numériques."
  },

  {
    theme:"Causes",
    themeCol:"#4F8EF7",
    q:"Pourquoi un deepfake présente-t-il des imperfections ?",
    opts:[
      "Caméra de mauvaise qualité",
      "Données d’entraînement insuffisantes",
      "Mauvaise connexion internet",
      "Mauvaise gestion des angles / éclairages",
      "Compression vidéo standard",
      "Limites du modèle IA",
      "Faible luminosité ambiante",
      "Difficulté à reproduire les micro-expressions"
    ],
    ans:[1,3,5,7],
    explain:"Le modèle doit gérer beaucoup de variations réelles, et c’est là qu’apparaissent souvent des défauts."
  },

  {
    theme:"Détection",
    themeCol:"#1D9E75",
    q:"Quels outils permettent de détecter un deepfake ?",
    opts:[
      "Analyse forensique d’image",
      "Lecture rapide de la vidéo",
      "Détecteurs IA spécialisés",
      "Augmentation du volume audio",
      "Analyse des métadonnées",
      "Capture d’écran simple",
      "Vérification des sources",
      "Redimensionnement de l’image"
    ],
    ans:[0,2,4,6],
    explain:"On combine des outils techniques et la vérification des sources pour gagner en fiabilité."
  },

  {
    theme:"Limites",
    themeCol:"#2E6DA4",
    q:"Quelles sont les limites de la détection ?",
    opts:[
      "Tous les deepfakes sont faciles à détecter",
      "Les modèles progressent rapidement",
      "Les outils IA sont toujours fiables à 100 %",
      "Risque de faux positifs",
      "Une seule méthode suffit",
      "Détection difficile sur contenu haute qualité",
      "Les deepfakes disparaissent avec le temps",
      "Nécessité d’analyse combinée"
    ],
    ans:[1,3,5,7],
    explain:"La détection n’est jamais parfaite : les contenus évoluent, donc il faut croiser plusieurs signaux."
  },

  {
    theme:"Humain vs IA",
    themeCol:"#EF9F27",
    q:"Peut-on se fier uniquement à l’œil humain ?",
    opts:[
      "Oui, avec de l’expérience",
      "Non, surtout pour les contenus réalistes",
      "Oui, si la vidéo est en haute définition",
      "L’humain détecte surtout les cas grossiers",
      "Oui, avec un bon écran",
      "Nécessité d’outils complémentaires",
      "Oui, en regardant plusieurs fois"
    ],
    ans:[1,3,5],
    explain:"L’œil humain repère surtout les cas évidents ; les cas réalistes exigent des outils et de la méthode."
  },

  {
    theme:"Risque",
    themeCol:"#E24B4A",
    q:"Quels contextes augmentent le risque de deepfake ?",
    opts:[
      "Vidéos personnelles stockées hors ligne",
      "Réseaux sociaux",
      "Archives papier",
      "Contenus viraux non vérifiés",
      "Réunions en présentiel",
      "Appels vocaux inconnus",
      "Documents administratifs imprimés",
      "Contenus politiques ou sensibles"
    ],
    ans:[1,3,5,7],
    explain:"Le risque augmente quand l’information circule vite, sans vérification, et qu’il y a un enjeu fort."
  },

  {
    theme:"Visio",
    themeCol:"#E24B4A",
    q:"Quels indices visuels peuvent révéler un face swap en visio ?",
    opts:[
      "Image en HD",
      "Décalage entre mouvements tête/visage et fond",
      "Bonne netteté globale",
      "Artefacts autour des cheveux, oreilles, lunettes",
      "Caméra grand angle",
      "Expressions qui lag légèrement lors des mouvements rapides",
      "Arrière-plan flou",
      "Incohérences d’éclairage sur le visage vs pièce"
    ],
    ans:[1,3,5,7],
    explain:"En visio, les contours et le timing des mouvements sont souvent les premiers indices."
  },

  {
    theme:"Comportement",
    themeCol:"#1D9E75",
    q:"Quels comportements pendant l’appel doivent alerter ?",
    opts:[
      "Refus d’allumer/maintenir la caméra stable longtemps",
      "Parle calmement",
      "Évite les mouvements de tête brusques",
      "Utilise un casque audio",
      "Éclairage volontairement faible ou changeant",
      "Se trouve en télétravail",
      "Demande urgente inhabituelle",
      "Utilise un fond virtuel standard"
    ],
    ans:[0,2,4,6],
    explain:"Un scénario très pressé ou instable doit faire monter la vigilance."
  },

  {
    theme:"Tests en direct",
    themeCol:"#2E6DA4",
    q:"Quels tests simples peuvent être demandés en direct ?",
    opts:[
      "Demander de parler plus fort",
      "Tourner la tête rapidement gauche/droite",
      "Demander de répéter une phrase",
      "Approcher/éloigner le visage de la caméra",
      "Couper puis remettre le micro",
      "Mettre la main devant le visage puis l’enlever",
      "Partager l’écran",
      "Changer brusquement l’éclairage"
    ],
    ans:[1,3,5,7],
    explain:"Les tests dynamiques sont utiles parce qu’ils mettent en difficulté les systèmes en temps réel."
  },

  {
    theme:"Audio live",
    themeCol:"#EF9F27",
    q:"Quels éléments audio peuvent être suspects en live ?",
    opts:[
      "Volume constant",
      "Latence inhabituelle entre parole et mouvement des lèvres",
      "Bonne articulation",
      "Voix trop stable malgré un réseau instable",
      "Absence de bruit ambiant",
      "Micro-coupures ou artefacts numériques",
      "Micro de bonne qualité",
      "Intonation peu cohérente avec le contexte"
    ],
    ans:[1,3,5,7],
    explain:"En live, l’audio et la vidéo doivent rester cohérents : c’est là que les écarts deviennent visibles."
  },

  {
    theme:"Prévention",
    themeCol:"#4F8EF7",
    q:"Quelles bonnes pratiques réduisent le risque ?",
    opts:[
      "Double vérification via un autre canal",
      "Faire confiance à la qualité vidéo",
      "Questions contextuelles internes",
      "Se baser uniquement sur la voix",
      "Procédure de validation pour demandes sensibles",
      "Accélérer la décision pour gagner du temps",
      "Refus des actions urgentes sans vérification",
      "Partager des codes immédiatement"
    ],
    ans:[0,2,4,6],
    explain:"La bonne pratique, c’est de ralentir et de vérifier par un autre canal."
  },

  {
    theme:"Sensibilité",
    themeCol:"#E24B4A",
    q:"Dans quels contextes le risque est-il plus élevé ?",
    opts:[
      "Réunion planifiée avec agenda",
      "Demande financière urgente",
      "Appel interne connu et récurrent",
      "Support IT demandant identifiants/codes",
      "Discussion informelle sans enjeu",
      "Contact inhabituel se présentant comme hiérarchie",
      "Présentation publique enregistrée",
      "Appel hors horaires habituels"
    ],
    ans:[1,3,5,7],
    explain:"Les urgences et les demandes sensibles sont des signaux d’alerte importants."
  },

  {
    theme:"Réflexes",
    themeCol:"#1D9E75",
    q:"Quel est le réflexe prioritaire en cas de doute ?",
    opts:[
      "Continuer pour ne pas bloquer",
      "Stopper l’action sensible",
      "Faire confiance à la vidéo",
      "Vérifier via un canal indépendant connu",
      "Envoyer les informations demandées",
      "Alerter un responsable / sécurité",
      "Ignorer le doute",
      "Demander une preuve dynamique"
    ],
    ans:[1,3,5,7],
    explain:"Le meilleur réflexe est d’arrêter l’action sensible et de vérifier avec un canal indépendant."
  },

  {
    theme:"Protection",
    themeCol:"#2E6DA4",
    q:"Quels éléments techniques peuvent aider côté utilisateur ?",
    opts:[
      "Changer de fond d’écran",
      "Activer l’authentification forte",
      "Augmenter la luminosité",
      "Journaliser les demandes sensibles",
      "Mettre la caméra en 4K",
      "Utiliser des canaux officiels connus",
      "Utiliser un casque neuf",
      "Sensibilisation régulière des équipes"
    ],
    ans:[1,3,5,7],
    explain:"Les protections techniques et organisationnelles sont complémentaires."
  }
]
};

const LETTERS = ['A','B','C','D','E','F','G','H'];
let currentQuiz = 'main';
let questions = QUIZZES.main;
let cur = 0;
let score = 0;
let userAnswers = [];
let answered = false;
let selectedMulti = [];

function $(id){
  return document.getElementById(id);
}

function showScreen(id){
  document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
  $(id).classList.add('active');
}

function startQuiz(key='main'){
  currentQuiz = key;
  questions = QUIZZES[key];
  cur = 0;
  score = 0;
  userAnswers = [];
  answered = false;
  selectedMulti = [];
  showScreen('screen-quiz');
  renderQ();
}

function goHome(){
  cur = 0;
  score = 0;
  userAnswers = [];
  answered = false;
  selectedMulti = [];
  showScreen('screen-home');
}

function renderQ(){
  answered = false;
  selectedMulti = [];

  const q = questions[cur];
  const total = questions.length;
  const pct = Math.round((cur / total) * 100);
  const isMulti = Array.isArray(q.ans);

  $('q-num').textContent = cur + 1;
  $('q-total').textContent = total;
  $('progress').style.width = pct + '%';
  $('score-live').textContent = score + ' pts';

  const zone = $('q-zone');
  zone.innerHTML = `
    <span class="theme-badge" style="background:${q.themeCol}22;color:${q.themeCol};border:1px solid ${q.themeCol}44">${q.theme}</span>
    ${isMulti ? '<div class="multi-note">Plusieurs réponses possibles</div>' : ''}
    <div class="q-card">
      <div class="q-text">${q.q}</div>
      <div class="options" id="opts">
        ${q.opts.map((o, i) => `
          <button class="opt-btn" data-letter="${LETTERS[i]}" data-idx="${i}" onclick="${isMulti ? `toggleMulti(${i})` : `answer(${i})`}">
            <span class="opt-letter">${LETTERS[i]}</span>
            <span class="opt-label">${o}</span>
          </button>
        `).join('')}
      </div>
    </div>
    <div class="feedback" id="feedback"></div>
    ${isMulti ? `
      <button class="btn-next show" id="btn-check" onclick="validateMulti()">
        Valider mes réponses
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <path d="M20 6 9 17l-5-5"/>
        </svg>
      </button>
    ` : `
      <button class="btn-next" id="btn-next" onclick="nextQ()">
        ${cur < total - 1 ? 'Question suivante' : 'Voir mes résultats'}
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>
    `}
  `;
}

function answer(idx){
  if(answered) return;

  answered = true;
  const q = questions[cur];
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
  $('score-live').textContent = score + ' pts';

  if(correct){
    const btn2 = document.querySelector(`.opt-btn[data-idx="${idx}"]`);
    createParticles(btn2);
  }
}

function toggleMulti(idx){
  if(answered) return;

  const pos = selectedMulti.indexOf(idx);

  if(pos === -1) selectedMulti.push(idx);
  else selectedMulti.splice(pos, 1);

  document.querySelectorAll('.opt-btn').forEach((btn, i) => {
    btn.classList.toggle('selected', selectedMulti.includes(i));
  });
}

function validateMulti(){
  if(answered) return;

  const q = questions[cur];
  if(!Array.isArray(q.ans)) return;

  if(selectedMulti.length === 0){
    const fb = $('feedback');
    fb.className = 'feedback show fb-wrong';
    fb.innerHTML = `<strong>Sélectionne au moins une réponse.</strong>`;
    return;
  }

  answered = true;

  const good = [...q.ans].sort((a,b) => a-b);
  const picked = [...selectedMulti].sort((a,b) => a-b);
  const correct = good.length === picked.length && good.every((v, i) => v === picked[i]);

  if(correct) score += 10;

  userAnswers.push({
    q: q.q,
    userAns: [...selectedMulti],
    correct,
    correctAns: q.ans,
    opts: q.opts,
    theme: q.theme
  });

  document.querySelectorAll('.opt-btn').forEach((btn, i) => {
    btn.classList.add('disabled');
    if(q.ans.includes(i)) btn.classList.add('correct');
    else if(selectedMulti.includes(i)) btn.classList.add('wrong');
  });

  const fb = $('feedback');
  fb.className = 'feedback show ' + (correct ? 'fb-correct' : 'fb-wrong');
  fb.innerHTML = `<strong>${correct ? 'Bonne réponse !' : 'Pas tout à fait...'}</strong> ${q.explain}`;

  const checkBtn = $('btn-check');
  checkBtn.innerHTML = `${cur < questions.length - 1 ? 'Question suivante' : 'Voir mes résultats'}
    <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>`;
  checkBtn.setAttribute('onclick', 'nextQ()');

  $('score-live').textContent = score + ' pts';

  if(correct && selectedMulti.length){
    const btn2 = document.querySelector(`.opt-btn[data-idx="${selectedMulti[0]}"]`);
    createParticles(btn2);
  }
}

function nextQ(){
  cur++;
  if(cur >= questions.length) showResult();
  else renderQ();
}

function showResult(){
  showScreen('screen-result');

  const total = questions.length;
  const pct = Math.round((score / (total * 10)) * 100);
  const correct = userAnswers.filter(a => a.correct).length;
  const wrong = total - correct;

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
    msg = 'Tu maîtrises très bien le sujet.';
  }else if(pct >= 75){
    title = 'Très bien !';
    msg = 'Tu as de solides connaissances. Encore quelques détails à revoir.';
  }else if(pct >= 50){
    title = 'Pas mal !';
    msg = 'Tu as de bonnes bases, avec encore quelques points à revoir.';
  }else{
    title = 'Continue à apprendre !';
    msg = 'Relis les explications et réessaie ensuite.';
  }

  $('result-title').textContent = title;
  $('result-msg').textContent = msg;

  const rl = $('review-list');
  rl.innerHTML = '<div style="font-family:\'Syne\',sans-serif;font-size:14px;font-weight:700;color:#8A95A8;letter-spacing:.06em;text-transform:uppercase;margin-bottom:14px">Récapitulatif</div>';

  userAnswers.forEach((a, i) => {
    const goodText = Array.isArray(a.correctAns)
      ? a.correctAns.map(x => a.opts[x]).join(', ')
      : a.opts[a.correctAns];

    const userText = Array.isArray(a.userAns)
      ? a.userAns.map(x => a.opts[x]).join(', ')
      : a.opts[a.userAns];

    rl.innerHTML += `
      <div class="review-item">
        <div class="review-icon ${a.correct ? 'ok' : 'ko'}">${a.correct ? '✓' : '✗'}</div>
        <div>
          <div class="review-q">Q${i + 1}. ${a.q}</div>
          <div class="review-a">
            ${a.correct ? 'Bonne réponse : ' + goodText : 'Ta réponse : ' + userText + ' — Bonne réponse : ' + goodText}
          </div>
        </div>
      </div>
    `;
  });

  if(pct >= 80) launchConfetti();
}

function restartQuiz(){
  startQuiz(currentQuiz);
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