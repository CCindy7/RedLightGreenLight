let fences;
let turtle;
let crabs;
let gameover;
let message;
let win;
let plane;
let currentMusic;

const ctx = document.querySelector('#board').getContext('2d');

function draw() {
  // efface
    ctx.clearRect(0,0, 700, 800);

  // mer
    ctx.fillStyle ='#AFF9E7';
    ctx.fillRect(0,0,700, 800);

  // ciel
    ctx.shadowBlur = 40;
    ctx.shadowColor = '#07D7D7';
    var grd = ctx.createLinearGradient(0, 0, 0, 200);
    grd.addColorStop(0, '#C5F9FD');
    grd.addColorStop(1, 'white');
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 700, 150);

  // jetée
    ctx.shadowColor='#6B9592';
    ctx.shadowOffsetX= 30;
    ctx.beginPath();
    ctx.moveTo(250, 800);
    ctx.lineTo(250,280);
    ctx.lineTo(460,280);
    ctx.lineTo(460,800);
    ctx.stroke();
    ctx.fillStyle= '#EC7A37';
    ctx.fill();

  // planches
    for (let y=800; y>300; y-=40){
      ctx.fillRect(250, y, 210, 1)
      ctx.fillStyle = '#AFF9E7';
    }

  // nuage n°1 
    ctx.shadowBlur = 10;
    ctx.shadowColor = '#BBE6E3';
    ctx.shadowOffsetX= 30;
    ctx.beginPath();
    ctx.fillStyle='white';
    ctx.arc(0, 75, 20, 0, Math.PI, true);
    ctx.arc(70, 75, 60, 0, Math.PI, true );
    ctx.arc(150, 75, 40, 0, Math.PI, true );
    ctx.arc(200, 75, 20, 0, Math.PI, true );
    ctx.arc(220, 75, 10, 0, Math.PI, true );
    ctx.fill();

  // nuage n°2
    ctx.beginPath();
    ctx.fillStyle='white';
    ctx.shadowOffsetX= 30;
    ctx.arc(530, 60, 15, 0, Math.PI, true);
    ctx.arc(570, 60, 30, 0, Math.PI, true );
    ctx.arc(640, 60, 50, 0, Math.PI, true );
    ctx.arc(700, 60, 20, 0, Math.PI, true );
    ctx.fill();

  // tortue
    ctx.shadowColor='transparent';
    turtle.draw();

  // barrières
    fences.draw();

  // crabes
  if (frames % 400 === 0) {
    var crab = new Crabs();
    crabs.push(crab);
  }
  // avancent ou s'arrêtent en fonction de la musique
  crabs.forEach(function(crab){
    if(!currentMusic.ended){
    crab.y += 1;
    }
    crab.draw();
  });
  // détection de la collision crabe/tortue + son = gameover => retour à l'image de fond après 2s
  for(crab of crabs) {
    if(crab.hits(turtle)) {
      console.log('pinched - gameover');
      currentMusic.pause();
      document.getElementById('ouch').play();
      currentMusic.currentTime = 0;
      gameover = true;
      setTimeout(refresh,2000);
      function refresh() {
        document.location.reload();
      }
    }
  }

  // alerte en cas de réussite ou de gameover
  if (win){
    plane.draw();
    plane.x += -2;
  } else if (gameover) {
    message.draw();
  }
}

// déplacements de la tortue
document.onkeydown = function (e) {
  if (!turtle) return;

  switch (e.key) {
    case 'ArrowUp': 
    turtle.moveForward();
    // retourne à la position initiale si elle avance quand la musique est arrêtée + message sonore
    if(currentMusic.ended){
      turtle.x = 335;
      turtle.y = 740;
      document.getElementById('malus').play();
    } 
    break;
    case 'ArrowLeft':
    turtle.moveLeft();
    // retourne à la position initiale si elle va à gauche quand la musique est arrêtée + message sonore
    if (currentMusic.ended){
      turtle.x = 335;
      turtle.y = 740;
      document.getElementById('malus').play();
    } 
    break;
    case 'ArrowRight':
    turtle.moveRight();
    // retourne à la position initiale si elle va à droite quand la musique est arrêtée + message sonore
    if (currentMusic.ended){
      turtle.x = 335;
      turtle.y = 740;
      document.getElementById('malus').play();   
    } 
    break;
  }
}

// musique aléatoire
function randomMusic() {
  let $normal = document.getElementById('normal');
  let $fast = document.getElementById('fast');
  let $faster = document.getElementById('faster');
  
  const musics = [$normal, $fast, $faster];
  
  var random= musics[Math.floor(Math.random() * 3)];
  currentMusic = random;
  
  return currentMusic;
}

// quand musique aléatoire se termine, une nouvelle est jouée à un moment aléatoire compris entre 2 et 4s . Si gameover ou win, la musique s'arrête.
let int;
function playMusic(from = 2000, to = 4000) {
  if (gameover || win) {
    clearTimeout(int);
  }
  let randomAudio =  randomMusic();
  randomAudio.onended = function () {
   console.log('stop playing')
   int = setTimeout(playMusic, Math.floor(Math.random() * (to-from) + from))
  }
  console.log('start playing');
  randomAudio.play();
}

// animation dessine en continue
let raf;
let frames = 0;
function animLoop() {
  frames ++;
  draw();

  if (!gameover) {
    raf = requestAnimationFrame(animLoop);
  }
}

// débute le jeu
function startGame() {
  if (raf) {
    cancelAnimationFrame(raf);
  }

  playMusic();
  turtle = new Turtle();
  fences = new Fences();
  plane = new Plane();
  message = new Message();
  crabs = [];
  animLoop(); 
}

// clic sur le boutton play = début du jeu
document.getElementById('button').onclick = function(){
  gameover = false;
  startGame();
}