
function drawUI(uiInfo){
    drawPossibleActions(uiInfo.possibleActions, uiInfo.possibleActions.hoveredActionIndex);
    drawMagicBaord(uiInfo.magicBoard, uiInfo.magicBoard.hoveredNodeIndex);
    drawRotateButtons(uiInfo.rotate)
    drawEndTurn(uiInfo.endTurn);
    drawHexBoard(uiInfo.hexBoard);
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

function drawHexBoard(hexBoard){
    hexBoard.nodes.forEach(drawNode);
}

function drawNode(node){
    px = node.coordinate[0];
    py = node.coordinate[1];
    ctx.beginPath();
    ctx.arc(px, py, node.pointSizeSmall, 0, 2 * Math.PI);
    ctx.fillStyle = "Black";
    ctx.fill();
    ctx.closePath();

    if(node.activated == "true"){
        ctx.beginPath();
        ctx.strokeStyle = "Red";
        ctx.arc(px, py, node.pointSizeLarge, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();
    }

    if(node.status == "selected"){
        ctx.beginPath();
        ctx.strokeStyle = "Green";
        ctx.arc(px, py, node.pointSizeLarge, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();
    }

    if(node.hovered){
        ctx.beginPath();
        ctx.strokeStyle = "Yellow";
        ctx.arc(px, py, node.pointSizeLarge, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();
    }

    for(let index = 0; index < node.neighbours.length; index++){
        if(node.neighbours[index].index > node.index){
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.strokeStyle = "Black";
            ctx.setLineDash([3, 9]);
            ctx.lineTo(node.neighbours[index].coordinate[0], node.neighbours[index].coordinate[1]);
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.closePath();
        }
    }

    for(let index = 0; index < node.links.length; index++){
        if(node.links[index].index > node.index){
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.strokeStyle = "Red";
            ctx.setLineDash([3, 9]);
            ctx.lineTo(node.links[index].coordinate[0], node.links[index].coordinate[1]);
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.closePath();
        }
    }
}