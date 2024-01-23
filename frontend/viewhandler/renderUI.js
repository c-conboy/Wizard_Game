
function drawUI(uiInfo){
    for(x = 0; x<uiInfo.possibleActions.Actions.length; x += 1){
        ctx.beginPath();
        ctx.rect(uiInfo.possibleActions.Location[0], uiInfo.possibleActions.Location[1] + (uiInfo.possibleActions.Height * x), uiInfo.possibleActions.Width, uiInfo.possibleActions.Height);
        ctx.stroke();
        ctx.font = "30px Arial";
        ctx.fillText(uiInfo.possibleActions.Actions[x], uiInfo.possibleActions.Location[0] + uiInfo.possibleActions.Width/8, uiInfo.possibleActions.Location[1] + (uiInfo.possibleActions.Height * x)+uiInfo.possibleActions.Height/1.5);
    }
}
