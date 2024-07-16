function draw(gameObject){
    ctx.clear();
    drawGameBoard(gameObject.gameBoardInfo, gameObject.actorInfo);
    drawUI(gameObject.uiInfo)
    if(gameObject.animation == true){
      renderAnimation(gameObject);
    }
}

CanvasRenderingContext2D.prototype.clear = 
  CanvasRenderingContext2D.prototype.clear || function (preserveTransform) {
    if (preserveTransform) {
      this.save();
      this.setTransform(1, 0, 0, 1, 0, 0);
    }

    this.clearRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.fillStyle = 'Black';
    ctx.fillRect(0,0,canvas.width, canvas.height);

    if (preserveTransform) {
      this.restore();
    }       
};


