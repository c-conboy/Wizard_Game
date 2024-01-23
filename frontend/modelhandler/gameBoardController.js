function handleGameBoard(userInput){
    userInput = globalToLocal(userInput)

    //Make sure possible actions are right
    clearActions();
    updateActions(getActorCoord(1), gameObject.gameBoardInfo.selectedAction.Shape, 1);

    //Conduct Actions
    switch(gameObject.gameBoardInfo.selectedAction.Name){
        case "Move":
            if(gameObject.gameBoardInfo.actionMap[userInput[0]][userInput[1]] == 1){
                move(userInput)
            }
        break;
        case "Shoot": 
            if(gameObject.gameBoardInfo.actionMap[userInput[0]][userInput[1]] == 1){
                move(userInput)
            }    
        break;        
    }

    clearActions();
    updateActions(getActorCoord(1), gameObject.gameBoardInfo.selectedAction.Shape, 1);
}

function move(destination){
    updateActorLocation(destination)
}

function updateActorLocation(destination){
    gameObject.gameBoardInfo.actorsMap[getActorCoord(1)[0]][getActorCoord(1)[1]] = 0;
    gameObject.gameBoardInfo.actorsMap[destination[0]][destination[1]] = 1;
}

function updateActions(actorLocation, shape, value){
    for (let tile of shape){
        let actionLocation = [actorLocation[0] + tile[0], actorLocation[1] + tile[1]];
        if(actionLocation[0] <= 4 && actionLocation[1] <= 4 && actionLocation[0] >= 0 && actionLocation[1] >= 0 ){
            gameObject.gameBoardInfo.actionMap[actionLocation[0]][actionLocation[1]] = value; 
        }
    }
}

function globalToLocal(clickCoordinates){
    GlobalX = clickCoordinates[0]
    GlobalY = clickCoordinates[1]
    LocalX = ((GlobalY - startTile[1]) / tileHeight + (GlobalX - startTile[0]) / tileWidth);
    LocalY = ((GlobalY - startTile[1]) / tileHeight - (GlobalX - startTile[0]) / tileWidth);
    return [Math.floor(LocalX),Math.floor(LocalY)]
}

function getActorCoord(id){
    for(x = 0; x< gameObject.gameBoardInfo.actorsMap.length; x++){
        for(y = 0; y < gameObject.gameBoardInfo.actorsMap[x].length; y++){
            if(gameObject.gameBoardInfo.actorsMap[x][y] == id){
                return [x,y]
            }
        }
    }
}

function clearActions(){
    for(x = 0; x< gameObject.gameBoardInfo.actionMap.length; x++){
        for(y = 0; y < gameObject.gameBoardInfo.actionMap[x].length; y++){
            gameObject.gameBoardInfo.actionMap[x][y] = 0;
        }
    }
}