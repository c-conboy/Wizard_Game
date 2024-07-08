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
                                        [1,0,0,0,0,0,2],
                                        [0,0,3,3,3,0,0],
                                        [0,0,0,3,0,0,0],
                                        [0,0,0,3,0,0,0]]

gameObject.actorInfo = new Object ();
gameObject.actorInfo.turnIndex = 0;  
gameObject.actorInfo.actors = [player1, player2];                                   

gameObject.gameBoardInfo.tempActorsMap = null;
gameObject.gameBoardInfo.selectedAction = moveAction  
gameObject.gameBoardInfo.hoveredTileIndex = [null,null];
gameObject.gameBoardInfo.bounds = [gameObject.gameBoardInfo.actionMap.length - 1, gameObject.gameBoardInfo.actionMap[0].length - 1];
gameObject.gameBoardInfo.animatedObjects = null;

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

gameObject.uiInfo.rotate = new Object();
gameObject.uiInfo.rotate.hoveredTriangleIndex = null;
gameObject.uiInfo.rotate.Location = rotateStart;
gameObject.uiInfo.rotate.Height = rotateHeight;
gameObject.uiInfo.rotate.Width = rotateWidth;
gameObject.uiInfo.rotate.Offset = rotateOffset;

gameObject.uiInfo.endTurn = new Object();
gameObject.uiInfo.endTurn.Hovered = false;
gameObject.uiInfo.endTurn.Location = endTurnStart;
gameObject.uiInfo.endTurn.Height = endTurnHeight;
gameObject.uiInfo.endTurn.Width = endTurnWidth;

let animationInfo = new Object();
animationInfo.currentAnimation = null;
animationInfo.frameCounter = 0;
animationInfo.inAnimation = false;

function calculate(userInput){
    if(animationInfo.inAnimation){
        gameObject.gameBoardInfo.animatedObjects = animationInfo.currentAnimation.nextFrame();
        animationInfo.frameCounter = animationInfo.frameCounter - 1;
        if(animationInfo.frameCounter < 0){
            //animationInfo.currentAnimation.onComplete;
            gameObject.gameBoardInfo.actorsMap = gameObject.gameBoardInfo.tempActorsMap;
            animationInfo.currentAnimation = null;
            animationInfo.inAnimation = false;
            animationInfo.frameCounter = null; 
            gameObject.gameBoardInfo.animatedObjects = null
        }
        return gameObject;
    }
    if(!userInput.mouseInformation.click){
        updateHoveredObjects(userInput.mouseInformation.coordinates);
        return gameObject;
    }
    handleUI(userInput.mouseInformation.clickCoordinates);
    handleGameBoard(userInput.mouseInformation.clickCoordinates);
    return gameObject;
}



