let gameObject = new Object();
gameObject.gameBoardInfo = new Object();

gameObject.gameBoardInfo.backGroundMap =    [[0,0,0,0,0,0,0],
                                            [0,0,0,0,0,0,0],
                                            [0,0,0,0,0,0,0],
                                            [0,0,0,0,0,0,0],
                                            [0,0,0,0,0,0,0],
                                            [0,0,0,0,0,0,0],
                                            [0,0,0,0,0,0,0]]

gameObject.gameBoardInfo.actionMap =    [[0,0,0,0,0,0,0],
                                        [0,0,0,0,0,0,0],
                                        [0,0,0,0,0,0,0],
                                        [0,0,0,0,0,0,0],
                                        [0,0,0,0,0,0,0],
                                        [0,0,0,0,0,0,0],
                                        [0,0,0,0,0,0,0]]

gameObject.gameBoardInfo.actorsMap = 
                                        [[0,0,0,3,0,0,0],
                                        [0,0,0,3,0,0,0],
                                        [0,0,3,3,3,0,0],
                                        [0,0,0,1,0,0,0],
                                        [0,0,3,3,3,0,0],
                                        [0,0,0,3,0,0,0],
                                        [0,0,0,3,0,0,0]]

gameObject.gameBoardInfo.selectedAction = moveAction  
gameObject.gameBoardInfo.hoveredTileIndex = [null,null];
gameObject.gameBoardInfo.bounds = [gameObject.gameBoardInfo.actionMap.length - 1, gameObject.gameBoardInfo.actionMap[0].length - 1];

gameObject.uiInfo = new Object();
gameObject.uiInfo.possibleActions = new Object();
gameObject.uiInfo.possibleActions.Actions = [moveAction];
gameObject.uiInfo.possibleActions.Location = actionButtonStart;
gameObject.uiInfo.possibleActions.Height = actionButtonHeight;
gameObject.uiInfo.possibleActions.Width = actionButtonWidth;
gameObject.uiInfo.possibleActions.hoveredActionIndex = null;

gameObject.uiInfo.magicBoard = new Object();
gameObject.uiInfo.magicBoard.Nodes = [0, 0];
gameObject.uiInfo.magicBoard.Location = magicButtonStart;
gameObject.uiInfo.magicBoard.Height = magicButtonHeight;
gameObject.uiInfo.magicBoard.Width = magicButtonWidth;
gameObject.uiInfo.magicBoard.Offset = magicButtonOffset;
gameObject.uiInfo.magicBoard.hoveredNodeIndex = null;


function calculate(userInput){
    if(!userInput.mouseInformation.click){
        updateHoveredObjects(userInput.mouseInformation.coordinates);
        return gameObject;
    }

    handleUI(userInput.mouseInformation.clickCoordinates);
    handleGameBoard(userInput.mouseInformation.clickCoordinates);
    return gameObject;
}



