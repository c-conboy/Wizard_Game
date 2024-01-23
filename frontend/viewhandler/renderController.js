function draw(gameObject){
    ctx.clear();
    drawMap(gameObject.gameBoardInfo.backGroundMap);
    drawActions(gameObject.gameBoardInfo.actionMap);
    drawActors(gameObject.gameBoardInfo.actorsMap);
    drawUI(gameObject.uiInfo)
}

CanvasRenderingContext2D.prototype.clear = 
  CanvasRenderingContext2D.prototype.clear || function (preserveTransform) {
    if (preserveTransform) {
      this.save();
      this.setTransform(1, 0, 0, 1, 0, 0);
    }

    this.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (preserveTransform) {
      this.restore();
    }           
};

