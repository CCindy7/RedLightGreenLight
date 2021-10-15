class Turtle {
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;
      const imgRatio = img.naturalWidth/img.naturalHeight;
      this.w = 40;
      this.h = 40/imgRatio;
      this.x = 335;
      this.y = 740;
    }
    img.src= "images/turtle.png";
  }
    
  draw() {
  if (!this.img) return; 
  ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
    
  // tortue avance
  moveForward() {
    this.y += -2;
    // tortue dépasse la jetée = win => musique actuelle s'arrête, son 'plouf', retour à l'image du début au bout de 7s 
    if(this.y < 225) {
      console.log('win');
      currentMusic.pause();
      document.getElementById('plouf').play();
      currentMusic.curentTime= 0;
      win = true;
      setTimeout(refresh,7000);
      function refresh() {
        document.location.reload();
      }
    }
  }
      
    // tortue va à gauche
  moveLeft() {
    this.x += -2;
    // collision tortue-barrière de gauche = gameover => musique actuelle s'arrête, son 'ouch', retour à l'image du début au bout de 2s  
    if (this.x < 250) {
      console.log('hits fences - gameover');
      currentMusic.pause();
      document.getElementById('ouch').play();
      currentMusic.currentTime= 0;
      gameover = true;
      setTimeout(refresh,2000);
      function refresh() {
        document.location.reload();
      }
    } 
  }
    
    // tortue va à droite
  moveRight() {
    this.x += 2;
    //  collision tortue-barrière de droite = gameover => musique actuelle s'arrête, son 'ouch', retour à l'image du début au bout de 2s 
    if (this.x > 420){
      console.log('hits fences - gameover');
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
}