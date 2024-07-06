function drawAnimatedObjects(animatedObject){
    if(animatedObject != null){
        if(animatedObject.object == 1){
            var px = animatedObject.location[0];
            var py = animatedObject.location[1];
            ctx.fillStyle = "Red";
            ctx.beginPath();
            ctx.arc(px, py, radius, 0, 2 * Math.PI);
            ctx.fill();
        }
        if(animatedObject.object == 2){
            var px = animatedObject.location[0];
            var py = animatedObject.location[1];
            ctx.fillStyle = "Blue";
            ctx.beginPath();
            ctx.arc(px, py, radius, 0, 2 * Math.PI);
            ctx.fill();
        }
    }
}