
function drawUI(uiInfo){
    drawPossibleActions(uiInfo.possibleActions);
    drawMagicBaord(uiInfo.magicBoard);
}

function drawPossibleActions(possibleActions){
    for(x = 0; x<possibleActions.Actions.length; x += 1){
        ctx.beginPath();
        ctx.strokeStyle = '#e5e31a';
        ctx.rect(possibleActions.Location[0], possibleActions.Location[1] + (possibleActions.Height * x), possibleActions.Width, possibleActions.Height);
        ctx.stroke();
        ctx.fillStyle = "red";
        ctx.font = "30px Arial";
        ctx.fillText(possibleActions.Actions[x].name, possibleActions.Location[0] + possibleActions.Width/8, possibleActions.Location[1] + (possibleActions.Height * x)+possibleActions.Height/1.5);
    }
}


function drawMagicBaord(magicBoard){
    for(x = 0; x<magicBoard.Nodes.length; x += 1){
        ctx.beginPath();
        if(magicBoard.Nodes[x] == 1){
            ctx.fillStyle = "red";
            ctx.fillRect(magicBoard.Location[0] + (magicBoard.Offset * x), magicBoard.Location[1], magicBoard.Width, magicBoard.Height);
        }
        ctx.strokeStyle = '#e5e31a';
        ctx.rect(magicBoard.Location[0] + (magicBoard.Offset * x), magicBoard.Location[1], magicBoard.Width, magicBoard.Height);
        ctx.stroke();
    }
}
