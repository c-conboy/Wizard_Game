function drawAnimatedObjects(animatedObject){
    if(animatedObject != null){
        if(animatedObject.object == 1){
            var px = animatedObject.location[0];
            var py = animatedObject.location[1];
            ctx.fillStyle = "#ffffff";
            ctx.beginPath();
            ctx.arc(px, py, radius, 0, 2 * Math.PI);
            ctx.fill();
        }
        if(animatedObject.object == 2){
            var px = animatedObject.location[0];
            var py = animatedObject.location[1];
            ctx.fillStyle = "#ffffff";
            ctx.beginPath();
            ctx.arc(px, py, radius, 0, 2 * Math.PI);
            ctx.fill();
        }
    }
}

function renderAnimation(gameObject){
    const start = gameObject.animationInfo.origin;
    const finish = gameObject.animationInfo.target;
    const frameCount = gameObject.animationInfo.frameCount;
    const totalFrames = gameObject.animationInfo.totalFrames;
    const increment1 = totalFrames/3;
    const increment2 = increment1*2;
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#ffffff';

    if(frameCount < increment1){
        let progress = (frameCount)/increment1;
        if(progress<1){
            ctx.beginPath();
            ctx.arc(start[0], start[1], 1.5*radius*(1-progress), 0, 2 * Math.PI);
            ctx.stroke();
        }
    }

    if(frameCount > increment1 && frameCount < increment2){
        let progress = (frameCount-increment1)/increment1;

        const currentPoint = {
            x: start[0] + (finish[0] - start[0]) * progress,
            y: start[1] + (finish[1] - start[1]) * progress,
        };

        ctx.beginPath(); // Start a new path
        ctx.moveTo(start[0], start[1]); // Move the pen to start location
        ctx.lineTo(currentPoint.x, currentPoint.y); // Draw first line
        ctx.stroke(); // Render the path
        ctx.closePath();
    }

    if(frameCount>increment2){
        let progress = (frameCount-increment2)/increment1;
        if(progress>0){
            ctx.beginPath();
            ctx.arc(finish[0], finish[1], 1.5*radius*(progress), 0, 2 * Math.PI);
            ctx.stroke();
        }
    }
}
