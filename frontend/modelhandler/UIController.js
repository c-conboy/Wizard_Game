function handleUI(userInput){
    handleMagicBoard(userInput);
    handlePossibleActions(userInput);
    handleRotate(userInput);
    handleEndTurn(userInput);
}

function handlePossibleActions(userInput){
    //for each button
    for(let x=0; x<gameObject.actorInfo.actors[gameObject.actorInfo.turnIndex].possibleActions.Actions.length; x += 1){
        //check if clickedOn
        if(checkInRect(userInput[0], userInput[1], [gameObject.uiInfo.possibleActions.Location[0], gameObject.uiInfo.possibleActions.Location[1] + (gameObject.uiInfo.possibleActions.Height * x)], gameObject.uiInfo.possibleActions.Width, gameObject.uiInfo.possibleActions.Height)){
            gameObject.gameBoardInfo.selectedAction = gameObject.actorInfo.actors[gameObject.actorInfo.turnIndex].possibleActions.Actions[x];
            clearActions();
            gameObject.gameBoardInfo.selectedAction.calculatePossible(getActorCoord(gameObject.actorInfo.actors[gameObject.actorInfo.turnIndex].id), 1, gameObject.gameBoardInfo.selectedAction.range);
        }
    }
}

function handleMagicBoard(userInput){
    var nodes = gameObject.actorInfo.actors[gameObject.actorInfo.turnIndex].magicBoard.Nodes;
    var actions = gameObject.actorInfo.actors[gameObject.actorInfo.turnIndex].possibleActions.Actions;
    for(let x=0; x<nodes.length; x += 1){
        if(checkInRect(userInput[0], userInput[1], [gameObject.uiInfo.magicBoard.Location[0] + (gameObject.uiInfo.magicBoard.Offset * x), gameObject.uiInfo.magicBoard.Location[1]], gameObject.uiInfo.magicBoard.Width, gameObject.uiInfo.magicBoard.Height)){
            if(nodes[x] == 1){
                gameObject.actorInfo.actors[gameObject.actorInfo.turnIndex].magicBoard.Nodes[x] = 0;
            }else{
                nodes[x] = 1;
            }
        }
    }

    //Gonna need to build out some sort of algorithm here
    if(nodes[0] == 0 && nodes[1] == 0){
        gameObject.actorInfo.actors[gameObject.actorInfo.turnIndex].possibleActions.Actions = [moveAction];
    }

    if(nodes[0] == 1 && nodes[1] == 0){
        gameObject.actorInfo.actors[gameObject.actorInfo.turnIndex].possibleActions.Actions = [jumpAction, moveAction];
    }

    if(nodes[0] == 0 && nodes[1] == 1){
        gameObject.actorInfo.actors[gameObject.actorInfo.turnIndex].possibleActions.Actions = [shootAction, moveAction];
    }

    if(nodes[0] == 1 && nodes[1] == 1){
        gameObject.actorInfo.actors[gameObject.actorInfo.turnIndex].possibleActions.Actions = [moveAction, jumpAction, shootAction, shakeAction];
    }
    gameObject.uiInfo.possibleActions.Actions = gameObject.actorInfo.actors[gameObject.actorInfo.turnIndex].possibleActions.Actions;
    gameObject.uiInfo.magicBoard.Nodes = nodes;
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
    for(let x=0; x<gameObject.uiInfo.possibleActions.Actions.length; x += 1){
        if(checkInRect(userInput[0], userInput[1], [gameObject.uiInfo.possibleActions.Location[0], gameObject.uiInfo.possibleActions.Location[1] + (gameObject.uiInfo.possibleActions.Height * x)], gameObject.uiInfo.possibleActions.Width, gameObject.uiInfo.possibleActions.Height)){
            gameObject.uiInfo.possibleActions.hoveredActionIndex = x;
        }
    }

    //Check Nodes
    gameObject.uiInfo.magicBoard.hoveredNodeIndex = 10000;
    for(let x=0; x<gameObject.uiInfo.magicBoard.Nodes.length; x += 1){
        if(checkInRect(userInput[0], userInput[1], [gameObject.uiInfo.magicBoard.Location[0] + (gameObject.uiInfo.magicBoard.Offset * x), gameObject.uiInfo.magicBoard.Location[1]], gameObject.uiInfo.magicBoard.Width, gameObject.uiInfo.magicBoard.Height)){
            gameObject.uiInfo.magicBoard.hoveredNodeIndex = x;
        }
    }

    //Check Tiles
    gameObject.gameBoardInfo.hoveredTileIndex = [10000,10000];
    localMouseCoords = globalToLocal(userInput); 
  
    if(localMouseCoords[0] >= 0 && localMouseCoords[0] <= gameObject.gameBoardInfo.bounds[0] && localMouseCoords[1] >= 0 && localMouseCoords[1] <= gameObject.gameBoardInfo.bounds[1]){
        gameObject.gameBoardInfo.hoveredTileIndex = localMouseCoords;
    }

    //Check Rotate Triangles
    gameObject.uiInfo.rotate.hoveredTriangleIndex = 10000;
    if(checkInRect(userInput[0], userInput[1], [gameObject.uiInfo.rotate.Location[0] - gameObject.uiInfo.rotate.Width - gameObject.uiInfo.rotate.Offset/2, gameObject.uiInfo.rotate.Location[1] - gameObject.uiInfo.rotate.Height/2], gameObject.uiInfo.rotate.Width, gameObject.uiInfo.rotate.Height)){
        gameObject.uiInfo.rotate.hoveredTriangleIndex = 0;
    }
    if(checkInRect(userInput[0], userInput[1], [gameObject.uiInfo.rotate.Location[0] + gameObject.uiInfo.rotate.Offset/2, gameObject.uiInfo.rotate.Location[1] - gameObject.uiInfo.rotate.Height/2], gameObject.uiInfo.rotate.Width, gameObject.uiInfo.rotate.Height)){
        gameObject.uiInfo.rotate.hoveredTriangleIndex = 1;
    }

    //Check End Turn Button
    if(checkInRect(userInput[0], userInput[1], gameObject.uiInfo.endTurn.Location, gameObject.uiInfo.endTurn.Width, gameObject.uiInfo.endTurn.Height)){
        gameObject.uiInfo.endTurn.Hovered = true;
    }else{
        gameObject.uiInfo.endTurn.Hovered = false;
    }
}

function handleRotate(userInput){
    if(checkInRect(userInput[0], userInput[1], [gameObject.uiInfo.rotate.Location[0] - gameObject.uiInfo.rotate.Width - gameObject.uiInfo.rotate.Offset/2, gameObject.uiInfo.rotate.Location[1] - gameObject.uiInfo.rotate.Height/2], gameObject.uiInfo.rotate.Width, gameObject.uiInfo.rotate.Height)){
        gameObject.gameBoardInfo.backGroundMap = gameObject.gameBoardInfo.backGroundMap[0].map((val, index) => gameObject.gameBoardInfo.backGroundMap.map(row => row[index]).reverse());
        gameObject.gameBoardInfo.actionMap = gameObject.gameBoardInfo.actionMap[0].map((val, index) => gameObject.gameBoardInfo.actionMap.map(row => row[index]).reverse());
        gameObject.gameBoardInfo.actorsMap = gameObject.gameBoardInfo.actorsMap[0].map((val, index) => gameObject.gameBoardInfo.actorsMap.map(row => row[index]).reverse());
    }
    if(checkInRect(userInput[0], userInput[1], [gameObject.uiInfo.rotate.Location[0] + gameObject.uiInfo.rotate.Offset/2, gameObject.uiInfo.rotate.Location[1] - gameObject.uiInfo.rotate.Height/2], gameObject.uiInfo.rotate.Width, gameObject.uiInfo.rotate.Height)){
        gameObject.gameBoardInfo.backGroundMap = gameObject.gameBoardInfo.backGroundMap[0].map((val, index) => gameObject.gameBoardInfo.backGroundMap.map(row => row[row.length-1-index]));
        gameObject.gameBoardInfo.actionMap = gameObject.gameBoardInfo.actionMap[0].map((val, index) => gameObject.gameBoardInfo.actionMap.map(row => row[row.length-1-index]));
        gameObject.gameBoardInfo.actorsMap = gameObject.gameBoardInfo.actorsMap[0].map((val, index) => gameObject.gameBoardInfo.actorsMap.map(row => row[row.length-1-index]));
    }
}

function handleEndTurn(userInput){
    if(checkInRect(userInput[0], userInput[1], gameObject.uiInfo.endTurn.Location, gameObject.uiInfo.endTurn.Width, gameObject.uiInfo.endTurn.Height)){
        endTurn();
    }
}