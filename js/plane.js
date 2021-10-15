class Plane {
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;
      const imgRatio = img.naturalWidth/img.naturalHeight;
      this.w = 400;
      this.h = 400/imgRatio;
      this.x = 450;
      this.y = 50;
    }
    img.src= "images/plane.png";
  }

  draw() {
    if(!this.img) return;
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
}   