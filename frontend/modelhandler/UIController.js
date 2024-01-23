function handleUI(userInput){
    //for each button
    for(x=0; x<gameObject.uiInfo.possibleActions.Actions.length; x += 1){
        //check if clickedOn
        if(checkInRect(userInput[0], userInput[1], [gameObject.uiInfo.possibleActions.Location[0], gameObject.uiInfo.possibleActions.Location[1] + (gameObject.uiInfo.possibleActions.Height * x)], gameObject.uiInfo.possibleActions.Width, gameObject.uiInfo.possibleActions.Height)){
            switch(gameObject.uiInfo.possibleActions.Actions[x]){
                case "Move":
                    console.log("Move")
                    gameObject.gameBoardInfo.selectedAction.Name = "Move";
                    gameObject.gameBoardInfo.selectedAction.Shape = [[0,1],[0,-1],[-1,0],[1,0]];
                    break;
                case "Shoot":
                    console.log("Shoot")
                    gameObject.gameBoardInfo.selectedAction.Name = "Shoot";
                    gameObject.gameBoardInfo.selectedAction.Shape = [[1,1],[-1,-1],[-1,1],[1,-1],[2,2],[-2,-2],[-2,2],[2,-2]];
                    break;
            }
        }
    }
}

function checkInRect(clickX, clickY, rectStart, rectW, rectH){
    if(
        clickX > rectStart[0] &&
        clickX < rectStart[0] + rectW &&
        clickY > rectStart[1]  &&
        clickY < rectStart[1] + rectH
    ){
        return true;
    }
}