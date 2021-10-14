class Message {
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;
      const imgRatio = img.naturalWidth/img.naturalHeight;
    
      this.w = 500;
      this.h = 500/imgRatio;
      this.x = 120;
      this.y = 80;
    }
    img.src= "images/message.png";
  
  }
  
  draw() {
    if (!this.img) return; 
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
}