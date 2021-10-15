class Fences {
  constructor() {
    // image de gauche
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;
    }
    img.src= "images/fences.png";
  
    // image de droite
    const img2 = document.createElement('img');
    img2.onload = () => {
      this.img2 = img2;
    }
    img2.src= "images/fences2.png";
  }
    
  draw() {
    // dessine barrière de gauche
    if (this.img) {
      ctx.drawImage(this.img, 185, 729, 65, 150);
      ctx.drawImage(this.img, 195, 579, 55, 150);
      ctx.drawImage(this.img, 205, 429, 45, 150);
      ctx.drawImage(this.img, 215, 279, 35, 150);
    }
  
    // dessine barrière de droite
    if (this.img2) {
      ctx.drawImage(this.img2, 459, 729, 65, 150);
      ctx.drawImage(this.img2, 459, 579, 55, 150);
      ctx.drawImage(this.img2, 459, 429, 45, 150);
      ctx.drawImage(this.img2, 459, 279, 35, 150);
    }
  }
}