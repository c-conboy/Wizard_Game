function handleGameBoard(userInput){
    userInput = globalToLocal(userInput)
    if(gameObject.gameBoardInfo.selectedAction){
        gameObject.gameBoardInfo.selectedAction.calculatePossible(getActorCoord(1), 1, gameObject.gameBoardInfo.selectedAction.range);
        //Confirm input is in bounds
        if(userInput[0] >= 0 && userInput[0] <= gameObject.gameBoardInfo.bounds[0] && userInput[1] >= 0 && userInput[1] <= gameObject.gameBoardInfo.bounds[1]){
            if(gameObject.gameBoardInfo.actionMap[userInput[0]][userInput[1]] == 1){
                gameObject.gameBoardInfo.selectedAction.execute(userInput)
                gameObject.gameBoardInfo.selectedAction = null;
                clearActions();
            }
        }
    }
}

function updateActorLocation(destination){
    gameObject.gameBoardInfo.actorsMap[getActorCoord(1)[0]][getActorCoord(1)[1]] = 0;
    gameObject.gameBoardInfo.actorsMap[destination[0]][destination[1]] = 1;
}

function globalToLocal(clickCoordinates){
    GlobalX = clickCoordinates[0]
    GlobalY = clickCoordinates[1]
    LocalX = ((GlobalY - startTile[1]) / tileHeight + (GlobalX - startTile[0]) / tileWidth);
    LocalY = ((GlobalY - startTile[1]) / tileHeight - (GlobalX - startTile[0]) / tileWidth);
    return [Math.floor(LocalX),Math.floor(LocalY)]
}

function localToGlobal(localCoordinates) {
    px = startTile[0] + (localCoordinates[0]-localCoordinates[1])*(tileWidth/2);
    py = startTile[1] + (localCoordinates[0]+localCoordinates[1])*(tileHeight/2);
    return [px, py];
}

function getActorCoord(id){
    for(let x = 0; x< gameObject.gameBoardInfo.actorsMap.length; x++){
        for(let y = 0; y < gameObject.gameBoardInfo.actorsMap[x].length; y++){
            if(gameObject.gameBoardInfo.actorsMap[x][y] == id){
                return [x,y]
            }
        }
    }
}

function clearActions(){
    for(let x = 0; x< gameObject.gameBoardInfo.actionMap.length; x++){
        for(let y = 0; y < gameObject.gameBoardInfo.actionMap[x].length; y++){
            gameObject.gameBoardInfo.actionMap[x][y] = 0;
        }
    }
}
