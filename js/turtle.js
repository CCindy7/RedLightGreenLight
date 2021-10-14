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
      
    if(this.y < 225){
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
  moveLeft(){
    this.x += -2;
      
    if (this.x < 250){
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
  moveRight(){
    this.x += 2;
      
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