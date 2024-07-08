
function drawUI(uiInfo){
    drawPossibleActions(uiInfo.possibleActions, uiInfo.possibleActions.hoveredActionIndex);
    drawMagicBaord(uiInfo.magicBoard, uiInfo.magicBoard.hoveredNodeIndex);
    drawRotateButtons(uiInfo.rotate)
    drawEndTurn(uiInfo.endTurn);
    generateCoordinates();
}

function drawPossibleActions(possibleActions, hoveredActionIndex){
    for(let x = 0; x<possibleActions.Actions.length; x += 1){
        ctx.beginPath();
        if(hoveredActionIndex == x){
            ctx.lineWidth = 4;
            ctx.strokeStyle = '#e5e91f';
        }else{
            ctx.lineWidth = 2;
            ctx.strokeStyle = '#e5e31a';
        }
        ctx.rect(possibleActions.Location[0], possibleActions.Location[1] + (possibleActions.Height * x), possibleActions.Width, possibleActions.Height);
        ctx.stroke();
        ctx.fillStyle = "red";
        ctx.font = "30px Arial";
        ctx.fillText(possibleActions.Actions[x].name, possibleActions.Location[0] + possibleActions.Width/8, possibleActions.Location[1] + (possibleActions.Height * x)+possibleActions.Height/1.5);
    }
}

function drawMagicBaord(magicBoard, hoveredNodeIndex){
    for(let x = 0; x<magicBoard.Nodes.length; x += 1){
        ctx.beginPath();
        if(hoveredNodeIndex == x){
            ctx.lineWidth = 4;
            ctx.strokeStyle = '#e5e91f';
        }else{
            ctx.lineWidth = 2;
            ctx.strokeStyle = '#e5e31a';
        }
        if(magicBoard.Nodes[x] == 1){
            ctx.fillStyle = "red";
            ctx.fillRect(magicBoard.Location[0] + (magicBoard.Offset * x), magicBoard.Location[1], magicBoard.Width, magicBoard.Height);
        }
        ctx.rect(magicBoard.Location[0] + (magicBoard.Offset * x), magicBoard.Location[1], magicBoard.Width, magicBoard.Height);
        ctx.stroke();
    }
}

function drawRotateButtons(rotate){
    //Draw Left pointing triangle
    ctx.beginPath();
    if(rotate.hoveredTriangleIndex == 0){
        ctx.fillStyle = "Yellow";
    }else{
        ctx.fillStyle = "red";
    }
    ctx.moveTo(rotate.Location[0] - rotate.Width - rotate.Offset/2, rotate.Location[1]);
    ctx.lineTo(rotate.Location[0] - rotate.Offset/2, rotate.Location[1] + rotate.Height/2);
    ctx.lineTo(rotate.Location[0] - rotate.Offset/2, rotate.Location[1] - rotate.Height/2);
    ctx.fill();
    ctx.closePath();

    //Draw Right pointing triangle
    ctx.beginPath();
    if(rotate.hoveredTriangleIndex == 1){
        ctx.fillStyle = "Yellow";
    }else{
        ctx.fillStyle = "red";
    }
    ctx.moveTo(rotate.Location[0] + rotate.Width + rotate.Offset/2, rotate.Location[1]);
    ctx.lineTo(rotate.Location[0] + rotate.Offset/2, rotate.Location[1] + rotate.Height/2);
    ctx.lineTo(rotate.Location[0] + rotate.Offset/2, rotate.Location[1] - rotate.Height/2);
    ctx.fill();
    ctx.closePath();
}

function drawEndTurn(endTurn){
    ctx.beginPath();
    if(endTurn.Hovered == true){
        ctx.lineWidth = 4;
        ctx.strokeStyle = '#e5e91f';
    }else{
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#e5e31a';
    }
    ctx.rect(endTurn.Location[0], endTurn.Location[1], endTurn.Width, endTurn.Height);
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.font = "30px Arial";
    ctx.fillText("End Turn", endTurn.Location[0] + endTurn.Width/10, endTurn.Location[1] + endTurn.Height/1.5);
}

function generateCoordinates(){
    let triangleWidth = 60;
    let triangleHeight = triangleWidth*Math.sqrt(3)/2;
    let startingLocation = [magicButtonStart[0]+magicButtonWidth, magicButtonStart[1]+60];

    let points = new Array();;

    //Top Point
    points.push(startingLocation);

    //Top Row
    for(let x = 0; x < 4; x++){
        points.push([startingLocation[0] - triangleWidth*1.5 + x*triangleWidth, startingLocation[1]+triangleHeight]);
    }

    //Middle Row
    for(let x = 0; x < 3; x++){
        points.push([startingLocation[0] - triangleWidth*1 + x*triangleWidth, startingLocation[1]+triangleHeight*2]);
    }

    //Bottom Row
    for(let x = 0; x < 4; x++){
        points.push([startingLocation[0] - triangleWidth*1.5 + x*triangleWidth, startingLocation[1]+triangleHeight*3]);
    }

    //Bottom Point
    points.push([startingLocation[0], startingLocation[1]+triangleHeight*4]);

    points.forEach(drawNode);
}

function drawNode(point){
    px = point[0];
    py = point[1];

    ctx.beginPath();
    ctx.arc(px, py, 6, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
}