function drawAnimatedObjects(animatedObject){
    if(animatedObject != null){
        if(animatedObject.object == "player"){
            var px = animatedObject.location[0];
            var py = animatedObject.location[1];
            ctx.fillStyle = "Red";
            ctx.beginPath();
            ctx.arc(px, py, radius, 0, 2 * Math.PI);
            ctx.fill();
        }
    }
}