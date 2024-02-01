
function drawUI(uiInfo){
    drawPossibleActions(uiInfo.possibleActions, uiInfo.possibleActions.hoveredActionIndex);
    drawMagicBaord(uiInfo.magicBoard, uiInfo.magicBoard.hoveredNodeIndex);
}

function drawPossibleActions(possibleActions, hoveredActionIndex){
    for(x = 0; x<possibleActions.Actions.length; x += 1){
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
    for(x = 0; x<magicBoard.Nodes.length; x += 1){
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
