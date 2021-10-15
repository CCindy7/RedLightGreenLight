function random(from, to) {
  return Math.floor(Math.random() * (to-from) + from);
}

class Crabs {
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;
      const imgRatio = img.naturalWidth/img.naturalHeight;
      this.w = 50;
      this.h = 50/imgRatio;
      this.x = random(250, 380);
      this.y = 280;
    }
    img.src= "images/crab.png";
  }

  draw() {
    if (!this.img) return; 
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
  
  // collision crabe-tortue
  hits(turtle) {
    var turtleLeft = turtle.x;
    var turtleRight = turtle.x + turtle.w;
    var turtleBottom = turtle.y + turtle.h;
    var turtleTop = turtle.y;
      
    var crabsLeft = this.x;
    var crabsRight = this.x + this.w;
    var crabsBottom = this.y + this.h;
    var crabsTop = this.y;
    
    return((turtleLeft < crabsRight) && (turtleRight > crabsLeft) && (turtleBottom > crabsTop) && (turtleTop < crabsBottom));
  }
}