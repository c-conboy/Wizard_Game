function handleUI(userInput){
    handleHexBoard(userInput);
    handlePossibleActions(userInput);
    handleRotate(userInput);
    handleEndTurn(userInput);
}

function handlePossibleActions(userInput){
    turnIndex = gameObject.actorInfo.turnIndex;
    //for each button
    for(let x=0; x<gameObject.actorInfo.actors[gameObject.actorInfo.turnIndex].possibleActions.Actions.length; x += 1){
        //check if clickedOn
        if(checkInRect(userInput[0], userInput[1], [gameObject.uiInfo.possibleActions[turnIndex].Location[0], gameObject.uiInfo.possibleActions[turnIndex].Location[1] + (gameObject.uiInfo.possibleActions[turnIndex].Height * x)], gameObject.uiInfo.possibleActions[turnIndex].Width, gameObject.uiInfo.possibleActions[turnIndex].Height)){
            gameObject.gameBoardInfo.selectedAction = gameObject.actorInfo.actors[gameObject.actorInfo.turnIndex].possibleActions.Actions[x];
            clearActions();
            gameObject.gameBoardInfo.selectedAction.calculatePossible(getActorCoord(gameObject.actorInfo.actors[gameObject.actorInfo.turnIndex].id), 1, gameObject.gameBoardInfo.selectedAction.range);
        }
    }
}

function updateHoveredObjects(userInput){
    //Check Actions
    gameObject.uiInfo.possibleActions[gameObject.actorInfo.turnIndex].hoveredActionIndex = 10000;
    for(let x=0; x<gameObject.uiInfo.possibleActions[gameObject.actorInfo.turnIndex].Actions.length; x += 1){
        if(checkInRect(userInput[0], userInput[1], [gameObject.uiInfo.possibleActions[gameObject.actorInfo.turnIndex].Location[0], gameObject.uiInfo.possibleActions[gameObject.actorInfo.turnIndex].Location[1] + (gameObject.uiInfo.possibleActions[gameObject.actorInfo.turnIndex].Height * x)], gameObject.uiInfo.possibleActions[gameObject.actorInfo.turnIndex].Width, gameObject.uiInfo.possibleActions[gameObject.actorInfo.turnIndex].Height)){
            gameObject.uiInfo.possibleActions[gameObject.actorInfo.turnIndex].hoveredActionIndex = x;
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

    //Check the HexBoard
    for(let nodeIndex = 0; nodeIndex < gameObject.uiInfo.hexBoards[gameObject.actorInfo.turnIndex].nodes.length; nodeIndex++){
        if(checkInCircle(userInput[0], userInput[1], gameObject.uiInfo.hexBoards[gameObject.actorInfo.turnIndex].nodes[nodeIndex].coordinate, gameObject.uiInfo.hexBoards[gameObject.actorInfo.turnIndex].pointSizeLarge + 5)){
            gameObject.uiInfo.hexBoards[gameObject.actorInfo.turnIndex].nodes[nodeIndex].hovered = true;
        }else{
            gameObject.uiInfo.hexBoards[gameObject.actorInfo.turnIndex].nodes[nodeIndex].hovered = false;
        }
    }
}

function handleRotate(userInput){
    if(checkInRect(userInput[0], userInput[1], [gameObject.uiInfo.rotate.Location[0] - gameObject.uiInfo.rotate.Width - gameObject.uiInfo.rotate.Offset/2, gameObject.uiInfo.rotate.Location[1] - gameObject.uiInfo.rotate.Height/2], gameObject.uiInfo.rotate.Width, gameObject.uiInfo.rotate.Height)){
        gameObject.gameBoardInfo.backGroundMap = gameObject.gameBoardInfo.backGroundMap[0].map((val, index) => gameObject.gameBoardInfo.backGroundMap.map(row => row[row.length-1-index]));
        gameObject.gameBoardInfo.actionMap = gameObject.gameBoardInfo.actionMap[0].map((val, index) => gameObject.gameBoardInfo.actionMap.map(row => row[row.length-1-index]));
        gameObject.gameBoardInfo.actorsMap = gameObject.gameBoardInfo.actorsMap[0].map((val, index) => gameObject.gameBoardInfo.actorsMap.map(row => row[row.length-1-index]));
    }
    if(checkInRect(userInput[0], userInput[1], [gameObject.uiInfo.rotate.Location[0] + gameObject.uiInfo.rotate.Offset/2, gameObject.uiInfo.rotate.Location[1] - gameObject.uiInfo.rotate.Height/2], gameObject.uiInfo.rotate.Width, gameObject.uiInfo.rotate.Height)){
        gameObject.gameBoardInfo.backGroundMap = gameObject.gameBoardInfo.backGroundMap[0].map((val, index) => gameObject.gameBoardInfo.backGroundMap.map(row => row[index]).reverse());
        gameObject.gameBoardInfo.actionMap = gameObject.gameBoardInfo.actionMap[0].map((val, index) => gameObject.gameBoardInfo.actionMap.map(row => row[index]).reverse());
        gameObject.gameBoardInfo.actorsMap = gameObject.gameBoardInfo.actorsMap[0].map((val, index) => gameObject.gameBoardInfo.actorsMap.map(row => row[index]).reverse());
    }
}

function handleEndTurn(userInput){
    if(checkInRect(userInput[0], userInput[1], gameObject.uiInfo.endTurn.Location, gameObject.uiInfo.endTurn.Width, gameObject.uiInfo.endTurn.Height)){
        endTurn();
    }
}

function handleHexBoard(userInput){
    let turnIndex = gameObject.actorInfo.turnIndex;
    for(let nodeIndex = 0; nodeIndex < gameObject.uiInfo.hexBoards[turnIndex].nodes.length; nodeIndex++){
        if(checkInCircle(userInput[0], userInput[1], gameObject.uiInfo.hexBoards[turnIndex].nodes[nodeIndex].coordinate, gameObject.uiInfo.hexBoards[turnIndex].pointSizeLarge + 5)){
            if(gameObject.uiInfo.hexBoards[turnIndex].selectedNode == null){
                if(gameObject.uiInfo.hexBoards[turnIndex].nodes[nodeIndex].status == "unselected" && gameObject.uiInfo.hexBoards[turnIndex].nodes[nodeIndex].activated == "false"){
                    gameObject.uiInfo.hexBoards[turnIndex].nodes[nodeIndex].activated = "true";
                    continue;
                }
                if(gameObject.uiInfo.hexBoards[turnIndex].nodes[nodeIndex].status == "unselected" && gameObject.uiInfo.hexBoards[turnIndex].nodes[nodeIndex].activated == "true"){
                    gameObject.uiInfo.hexBoards[turnIndex].nodes[nodeIndex].status = "selected";
                    gameObject.uiInfo.hexBoards[turnIndex].selectedNode = gameObject.uiInfo.hexBoards[turnIndex].nodes[nodeIndex];
                    continue;
                }
            }else{
                if(gameObject.uiInfo.hexBoards[turnIndex].selectedNode.neighbours.includes(nodeIndex)){
                    if(gameObject.uiInfo.hexBoards[turnIndex].nodes[nodeIndex].activated == "false"){
                        if(checkLinkSize(gameObject.uiInfo.hexBoards[turnIndex].selectedNode.index)){
                            gameObject.uiInfo.hexBoards[turnIndex].nodes[nodeIndex].activated = "true";
                            gameObject.uiInfo.hexBoards[turnIndex].nodes[nodeIndex].links.push(gameObject.uiInfo.hexBoards[turnIndex].selectedNode.index);
                            gameObject.uiInfo.hexBoards[turnIndex].selectedNode.links.push(gameObject.uiInfo.hexBoards[turnIndex].nodes[nodeIndex].index);
                            gameObject.uiInfo.hexBoards[turnIndex].selectedNode.status = "unselected";
                            gameObject.uiInfo.hexBoards[turnIndex].selectedNode = null;
                            continue;
                        }
                    }
                }
                if(nodeIndex == gameObject.uiInfo.hexBoards[turnIndex].selectedNode.index){
                    gameObject.uiInfo.hexBoards[turnIndex].selectedNode.status = "unselected";
                    gameObject.uiInfo.hexBoards[turnIndex].selectedNode = null;
                }
            }
        }
    }
    updatePossibleAction();
    gameObject.uiInfo.hexBoards[turnIndex].formTriangles();
}

function checkLinkSize(nodeIndex){
    let turnIndex = gameObject.actorInfo.turnIndex;
    //Check if I have any links
    if(gameObject.uiInfo.hexBoards[turnIndex].nodes[nodeIndex].links.length == 0){
        return true;
    }
    //Check my own link length
    if(gameObject.uiInfo.hexBoards[turnIndex].nodes[nodeIndex].links.length >= 2){
        return false;
    }
    //go through middles linnk  node and check link length
    if(gameObject.uiInfo.hexBoards[turnIndex].nodes[gameObject.uiInfo.hexBoards[turnIndex].nodes[nodeIndex].links[0]].links.length >= 2){
        return false;
    }
    return true;
}

function checkInCircle(xIn, yIn, pointCoordinates, radius){
    dx = pointCoordinates[0] - xIn;
    dy = pointCoordinates[1] - yIn;
    dxy = Math.sqrt((dx*dx) + (dy*dy))
    if(dxy < radius){
        return true;
    }else{
        return false;
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

function updatePossibleAction(){
    let spellList = gameObject.uiInfo.spellList;
    gameObject.actorInfo.actors[gameObject.actorInfo.turnIndex].possibleActions.Actions = [];
    //Go through each spell in the spell list
    for(spellIndex = 0; spellIndex<spellList.spells.length; spellIndex++){
        //go through each cost in each spell
        let costMet = true;
        for(costIndex = 0; costIndex<spellList.spells[spellIndex].cost.length; costIndex++){
            let nodeIndex = 0;
            switch(spellList.spells[spellIndex].cost[costIndex]){
                case "Endurance":
                    nodeIndex  = 0;
                    break;
                case "Spirit":
                    nodeIndex = 1;
                    break;
                case "Air":
                    nodeIndex = 2;
                    break;
                case "Earth":
                    nodeIndex = 3;
                    break;
                case "Unity":
                    nodeIndex = 4;
                    break;
                case "Sun":
                    nodeIndex = 5;
                    break;
                case "Wildcard":
                    nodeIndex = 6;
                    break;
                case "Moon":
                    nodeIndex = 7;
                    break;
                case "Singularity":
                    nodeIndex = 8;
                    break;
                case "Fire":
                    nodeIndex = 9;
                    break;
                case "Water":
                    nodeIndex = 10;
                    break;
                case "Blood":
                    nodeIndex = 11;
                    break;
                case "Change":
                    nodeIndex = 12;
                    break;
                default:
                    continue;
            }

            if(gameObject.uiInfo.hexBoards[gameObject.actorInfo.turnIndex].nodes[nodeIndex].activated != "true"){
                costMet = false;
            }
        }
        if(costMet){
            //gameObject.actorInfo.actors[gameObject.actorInfo.turnIndex].possibleActions.Actions.push(spellList.spells[spellIndex]);
            gameObject.actorInfo.actors[gameObject.actorInfo.turnIndex].possibleActions.Actions.push(spellList.spells[spellIndex]);
        }
    }
    gameObject.uiInfo.possibleActions.Actions = gameObject.actorInfo.actors[gameObject.actorInfo.turnIndex].possibleActions.Actions;
}