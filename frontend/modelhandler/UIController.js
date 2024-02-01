function handleUI(userInput){
    handleMagicBoard(userInput);
    handlePossibleActions(userInput);
}

function handlePossibleActions(userInput){
    //for each button
    for(x=0; x<gameObject.uiInfo.possibleActions.Actions.length; x += 1){
        //check if clickedOn
        if(checkInRect(userInput[0], userInput[1], [gameObject.uiInfo.possibleActions.Location[0], gameObject.uiInfo.possibleActions.Location[1] + (gameObject.uiInfo.possibleActions.Height * x)], gameObject.uiInfo.possibleActions.Width, gameObject.uiInfo.possibleActions.Height)){
            gameObject.gameBoardInfo.selectedAction = gameObject.uiInfo.possibleActions.Actions[x];
            clearActions();
            updateActions(getActorCoord(1), gameObject.gameBoardInfo.selectedAction.shape, 1);
        }
    }
}

function handleMagicBoard(userInput){
    for(x=0; x<gameObject.uiInfo.magicBoard.Nodes.length; x += 1){
        if(checkInRect(userInput[0], userInput[1], [gameObject.uiInfo.magicBoard.Location[0] + (gameObject.uiInfo.magicBoard.Offset * x), gameObject.uiInfo.magicBoard.Location[1]], gameObject.uiInfo.magicBoard.Width, gameObject.uiInfo.magicBoard.Height)){
            if(gameObject.uiInfo.magicBoard.Nodes[x] == 1){
                gameObject.uiInfo.magicBoard.Nodes[x] = 0;
            }else{
                gameObject.uiInfo.magicBoard.Nodes[x] = 1;
            }
        }
    }

    //Gonna need to build out some sort of algorithm here
    if(gameObject.uiInfo.magicBoard.Nodes[0] == 0 && gameObject.uiInfo.magicBoard.Nodes[1] == 0){
        gameObject.uiInfo.possibleActions.Actions = [moveAction];
    }

    if(gameObject.uiInfo.magicBoard.Nodes[0] == 1 && gameObject.uiInfo.magicBoard.Nodes[1] == 0){
        gameObject.uiInfo.possibleActions.Actions = [jumpAction];
    }

    if(gameObject.uiInfo.magicBoard.Nodes[0] == 0 && gameObject.uiInfo.magicBoard.Nodes[1] == 1){
        gameObject.uiInfo.possibleActions.Actions = [shootAction];
    }

    if(gameObject.uiInfo.magicBoard.Nodes[0] == 1 && gameObject.uiInfo.magicBoard.Nodes[1] == 1){
        gameObject.uiInfo.possibleActions.Actions = [moveAction, jumpAction, shootAction];
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

function updateHoveredObjects(userInput){
    //Check Actions
    gameObject.uiInfo.possibleActions.hoveredActionIndex = 10000;
    for(x=0; x<gameObject.uiInfo.possibleActions.Actions.length; x += 1){
        if(checkInRect(userInput[0], userInput[1], [gameObject.uiInfo.possibleActions.Location[0], gameObject.uiInfo.possibleActions.Location[1] + (gameObject.uiInfo.possibleActions.Height * x)], gameObject.uiInfo.possibleActions.Width, gameObject.uiInfo.possibleActions.Height)){
            gameObject.uiInfo.possibleActions.hoveredActionIndex = x;
        }
    }

    //Check Nodes
    gameObject.uiInfo.magicBoard.hoveredNodeIndex = 10000;
    for(x=0; x<gameObject.uiInfo.magicBoard.Nodes.length; x += 1){
        if(checkInRect(userInput[0], userInput[1], [gameObject.uiInfo.magicBoard.Location[0] + (gameObject.uiInfo.magicBoard.Offset * x), gameObject.uiInfo.magicBoard.Location[1]], gameObject.uiInfo.magicBoard.Width, gameObject.uiInfo.magicBoard.Height)){
            gameObject.uiInfo.magicBoard.hoveredNodeIndex = x;
        }
    }

    //Check Tiles
    gameObject.gameBoardInfo.hoveredTileIndex = [10000,10000];
    localMouseCoords = globalToLocal(userInput); 
  
    if(localMouseCoords[0] >= 0 && localMouseCoords[0] <= 4 && localMouseCoords[1] >= 0 && localMouseCoords[1] <= 4){
        gameObject.gameBoardInfo.hoveredTileIndex = localMouseCoords;
    }
}

