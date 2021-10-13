class Fences {
    constructor() {
      // left image
      const img = document.createElement('img');
        img.onload = () => {
          this.img = img;
          this.w = this.w;
          this.h = this.h;
          this.x = this.x;
          this.y = this.y;
        }
        img.src= "images/fences.png";
  
      // right image
      const img2 = document.createElement('img');
        img2.onload = () => {
          this.img2 = img2;
          this.w = this.w;
          this.h = this.h;
          this.x = this.x;
          this.y = this.y;
        }
        img2.src= "images/fences2.png";
      }
    
    draw() {
      if (!this.img) return; 
      // left fence
      ctx.drawImage(this.img, 185, 729, 65, 150);
      ctx.drawImage(this.img, 195, 579, 55, 150);
      ctx.drawImage(this.img, 205, 429, 45, 150);
      ctx.drawImage(this.img, 215, 279, 35, 150);
  
      // right fence
      ctx.drawImage(this.img2, 459, 729, 65, 150);
      ctx.drawImage(this.img2, 459, 579, 55, 150);
      ctx.drawImage(this.img2, 459, 429, 45, 150);
      ctx.drawImage(this.img2, 459, 279, 35, 150);
    }
  }