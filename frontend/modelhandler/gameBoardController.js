function handleGameBoard(userInput){
    userInput = globalToLocal(viewHeightAdjustment(userInput));
    if(gameObject.gameBoardInfo.selectedAction){
        //gameObject.gameBoardInfo.selectedAction.calculatePossible(gameObject.actorInfo.actors[gameObject.actorInfo.turnIndex].id, 1, gameObject.gameBoardInfo.selectedAction.range);
        //Confirm input is in bounds
        if(userInput[0] >= 0 && userInput[0] <= gameObject.gameBoardInfo.bounds[0] && userInput[1] >= 0 && userInput[1] <= gameObject.gameBoardInfo.bounds[1]){
            if(gameObject.gameBoardInfo.actionMap[userInput[0]][userInput[1]] == 1){
                gameObject.gameBoardInfo.selectedAction.execute(userInput)
                gameObject.gameBoardInfo.selectedAction = null;
                clearActions();
                
                gameObject.gameBoardInfo.turnInfo.actionsTaken += 1;
                if(gameObject.gameBoardInfo.turnInfo.actionsTaken >= 1){
                    endTurn();
                }  
            }
        }
    }
}

function updateActorLocation(actor, destination){
    let actorCoord = getActorCoord(actor.id);
    
    if(actorCoord != null){
        if(actor.height ==  0){
            gameObject.gameBoardInfo.objectsMap[actorCoord[0]][actorCoord[1]] = new ObjectClass(0);
        }else{
            gameObject.gameBoardInfo.objectsMap[actorCoord[0]][actorCoord[1]] = new Wall(actor.height + 2);
        }
    }

    let destinationHeight = gameObject.gameBoardInfo.objectsMap[destination[0]][destination[1]].height;
    gameObject.gameBoardInfo.objectsMap[destination[0]][destination[1]] = actor;
    gameObject.gameBoardInfo.objectsMap[destination[0]][destination[1]].height = destinationHeight;
}

function clearActorLocation(id){
    let actorCoord = getActorCoord(id);
    if(actorCoord != null){
        gameObject.gameBoardInfo.objectsMap[actorCoord[0]][actorCoord[1]].id = new ObjectClass(0);
    }
}

function globalToLocal(clickCoordinates){
    GlobalX = clickCoordinates[0];
    GlobalY = clickCoordinates[1];
    LocalX = Math.floor((GlobalY - startTile[1]) / tileHeight + (GlobalX - startTile[0]) / tileWidth);
    LocalY = Math.floor((GlobalY - startTile[1]) / tileHeight - (GlobalX - startTile[0]) / tileWidth);
    return [LocalX,LocalY];
}


function localToGlobal(localCoordinates) {
    px = startTile[0] + (localCoordinates[0]-localCoordinates[1])*(tileWidth/2);
    py = startTile[1] + (localCoordinates[0]+localCoordinates[1])*(tileHeight/2);
    return [px, py];
}

function getActorCoord(id){
    for(let x = 0; x< gameObject.gameBoardInfo.objectsMap.length; x++){
        for(let y = 0; y < gameObject.gameBoardInfo.objectsMap[x].length; y++){
            if(gameObject.gameBoardInfo.objectsMap[x][y].id == id){
                return [x,y];
            }
        }
    }
    return null
}

function clearActions(){
    for(let x = 0; x< gameObject.gameBoardInfo.actionMap.length; x++){
        for(let y = 0; y < gameObject.gameBoardInfo.actionMap[x].length; y++){
            gameObject.gameBoardInfo.actionMap[x][y] = 0;
        }
    }
}

function updateObjectsMap(targetValue, finalValue, coordinate){
    if(coordinate[0] >= 0 && coordinate[0] <= gameObject.gameBoardInfo.bounds[0] && coordinate[1] >= 0 && coordinate[1] <= gameObject.gameBoardInfo.bounds[1]){
        if(gameObject.gameBoardInfo.objectsMap[coordinate[0]][coordinate[1]].id == targetValue){
            gameObject.gameBoardInfo.objectsMap[coordinate[0]][coordinate[1]].id = ObjectClass(0);
        }
    }
}

function endTurn(){
    clearActions();
    gameObject.actorInfo.turnIndex += 1;
    if(gameObject.actorInfo.turnIndex >= gameObject.actorInfo.actors.length){
        gameObject.actorInfo.turnIndex = 0;
    }
    gameObject.gameBoardInfo.turnInfo.actionsTaken = 0;
    gameObject.gameBoardInfo.turnInfo.newNodesActivated = 0;
    gameObject.gameBoardInfo.turnInfo.nodeLinksCreated = 0;
    gameObject.uiInfo.possibleActions.Actions = gameObject.actorInfo.actors[gameObject.actorInfo.turnIndex].possibleActions.Actions;
}

function viewHeightAdjustment(userInput){
    if(gameObject.gameBoardInfo.autoViewHeight){
        //Make view height equal to the highest tile the mouse could be on
        //check for each possible superimposed tile (+3, +2, +1)
        for(let superImposedOffset = 3; superImposedOffset > 0; superImposedOffset--){
            let adjustedLocalCoordinates = globalToLocal([userInput[0], userInput[1]+superImposedOffset*tileHeight]);
            //Confirm adjusted coordinate is in bounds
            if(adjustedLocalCoordinates[0] >= 0 && adjustedLocalCoordinates[0] <= gameObject.gameBoardInfo.bounds[0] && adjustedLocalCoordinates[1] >= 0 && adjustedLocalCoordinates[1] <= gameObject.gameBoardInfo.bounds[1]){
                if(gameObject.gameBoardInfo.objectsMap[adjustedLocalCoordinates[0]][adjustedLocalCoordinates[1]].height == superImposedOffset){
                    gameObject.gameBoardInfo.viewHeight = gameObject.gameBoardInfo.objectsMap[adjustedLocalCoordinates[0]][adjustedLocalCoordinates[1]].height;
                    return [userInput[0], userInput[1]+superImposedOffset*tileHeight];
                }
            }
        }
        let localCoordinates = globalToLocal([userInput[0], userInput[1]]);
        if(localCoordinates[0] >= 0 && localCoordinates[0] <= gameObject.gameBoardInfo.bounds[0] && localCoordinates[1] >= 0 && localCoordinates[1] <= gameObject.gameBoardInfo.bounds[1]){
            gameObject.gameBoardInfo.viewHeight = gameObject.gameBoardInfo.objectsMap[localCoordinates[0]][localCoordinates[1]].height;
        }
        return [userInput[0], userInput[1]];
    }else{
        //adjust based on view height
        return [userInput[0], userInput[1]+gameObject.gameBoardInfo.viewHeight*tileHeight];
    }
}