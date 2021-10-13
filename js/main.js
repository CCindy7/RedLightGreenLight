let fences;
let turtle;
let crabs;
let gameover;
let win;
let plane;
let currentMusic;


const ctx = document.querySelector('#board').getContext('2d');

function draw() {
  //delete
    ctx.clearRect(0,0, 700, 800);

  // sea
    ctx.fillStyle ='#AFF9E7';
    ctx.fillRect(0,0,700, 800);

  //sky
    ctx.shadowBlur = 40;
    ctx.shadowColor = '#07D7D7';
    var grd = ctx.createLinearGradient(0, 0, 0, 200);
    grd.addColorStop(0, '#C5F9FD');
    grd.addColorStop(1, 'white');
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 700, 150);

  //pier
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

  //planks
    for (let y=800; y>300; y-=40){
      ctx.fillRect(250, y, 210, 1)
      ctx.fillStyle = '#AFF9E7';
    }

  //cloud n°1 
    ctx.shadowBlur = 10;
    ctx.shadowColor = '#BBE6E3';
    ctx.shadowOffsetX= 30;
    ctx.beginPath();
    ctx.fillStyle='white';
    ctx.arc(0, 80, 20, 0, Math.PI, true);
    ctx.arc(70, 80, 60, 0, Math.PI, true );
    ctx.arc(150, 80, 40, 0, Math.PI, true );
    ctx.arc(200, 80, 20, 0, Math.PI, true );
    ctx.arc(220, 80, 10, 0, Math.PI, true );
    ctx.fill();

  //cloud n°2
    ctx.beginPath();
    ctx.fillStyle='white';
    ctx.shadowOffsetX= 30;
    ctx.arc(530, 100, 15, 0, Math.PI, true);
    ctx.arc(570, 100, 30, 0, Math.PI, true );
    ctx.arc(640, 100, 50, 0, Math.PI, true );
    ctx.arc(700, 100, 20, 0, Math.PI, true );
    ctx.fill();

  //turtle
    ctx.shadowColor='transparent';
    turtle.draw();

  // fences
    fences.draw();

  //crabs
  if (frames % 400 === 0) {
    var crab = new Crabs();
    crabs.push(crab);
  }
  
  crabs.forEach(function(crab){
    if(!currentMusic.ended){
    crab.y += 1;
    crab.draw();
    } else {
    crab.y = crab.y;
    crab.draw();
    }
  });

  for (crab of crabs) {
    if(crab.hits(turtle)) {
        console.log('pinched - gameover');
        currentMusic.pause();
        document.getElementById('ouch').play();
        currentMusic.currentTime = 0;
        gameover = true;
        setTimeout(refresh,3000);
        function refresh() {
        document.location.reload();
      }
    }
  }

  //plane
  if (gameover){
    plane.draw();
    ctx.fontStyle = "white";
    ctx.font = "15px Arial";
    ctx.fillText("Gameover,", 350, 80);
    ctx.fillText("try again !", 350, 100);
  } else if (win){
    plane.draw();
    ctx.fontStyle = "white";
    ctx.font = "15px Arial";
    ctx.fillText("Tortillon is", 350, 70);
    ctx.fillText("safe,", 350, 90);
    ctx.fillText("good job !", 350, 110);
  }
}
 
//turtle directions
document.onkeydown = function (e) {
  if (!turtle) return;

  switch (e.key) {
    case 'ArrowUp': 
      turtle.moveForward();
        if(currentMusic.ended){
          turtle.x = 335;
          turtle.y = 740;
          alert('Oups Tortillon can\'t move when music is not playing !');
      }
      break;
    case 'ArrowLeft':
      turtle.moveLeft();
      if (currentMusic.ended){
         turtle.x = 335;
         turtle.y = 740;
         alert('Oups Tortillon can\'t move when music is not playing !');
      };
      break;
    case 'ArrowRight':
      turtle.moveRight();
      if (currentMusic.ended){
         turtle.x = 335;
         turtle.y = 740;
         alert('Oups Tortillon can\'t move when music is not playing !');
      }
      break;
    }
}

// random music
function randomMusic() {
  let $normal = document.getElementById('normal');
  let $fast = document.getElementById('fast');
  let $faster = document.getElementById('faster');
  
  const musics = [$normal, $fast, $faster];
  
  var random= musics[Math.floor(Math.random() * 3)];
  currentMusic = random;
  
  return currentMusic;
}


// quand musique aléatoire se termine, une nouvelle joue à un moment aléatoire compris entre 2 et 4s . Si gameover, la musique s'arrête.
let int;
function playMusic(from = 2000, to = 4000) {
  if (gameover || win){
    clearTimeout(int);
  }
  let randomAudio =  randomMusic();
  randomAudio.onended = function () {
   console.log('stop playing')
   int = setTimeout(playMusic, Math.floor(Math.random() * (to-from) + from))
 }

console.log('start playing')
randomAudio.play();
}

// draw animation
let raf;
let frames = 0;
function animLoop() {
  frames ++;
  draw();

  if (!gameover) {
    raf = requestAnimationFrame(animLoop);
  }
}

 // start the game
function startGame() {
  if (raf) {
    cancelAnimationFrame(raf);
  }

  playMusic();
  turtle = new Turtle();
  fences = new Fences();
  plane = new Plane();
  crabs = [];
  
  animLoop();
  
}

document.querySelector('button').onclick = function(){
  gameover = false;
  startGame();
};

