let gameObject = new Object();
gameObject.gameBoardInfo = new Object();

gameObject.gameBoardInfo.backGroundMap = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

gameObject.gameBoardInfo.actionMap = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

gameObject.gameBoardInfo.actorsMap = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0],
    [1, 0, 0, 3, 0, 0, 0, 0, 0, 0, 2, 0],
    [0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

gameObject.actorInfo = new Object ();
gameObject.actorInfo.turnIndex = 0;  
gameObject.actorInfo.actors = [player1, player2];                                   

gameObject.gameBoardInfo.selectedAction = moveAction  
gameObject.gameBoardInfo.hoveredTileIndex = [null,null];
gameObject.gameBoardInfo.bounds = [gameObject.gameBoardInfo.actionMap.length - 1, gameObject.gameBoardInfo.actionMap[0].length - 1];
gameObject.gameBoardInfo.animatedObjects = null;

gameObject.uiInfo = new Object();
gameObject.uiInfo.possibleActions = new Array();
gameObject.uiInfo.possibleActions = [gameObject.actorInfo.actors[0].possibleActions, gameObject.actorInfo.actors[1].possibleActions];

gameObject.uiInfo.possibleActions[0].Location = actionButtonStart;
gameObject.uiInfo.possibleActions[0].Height = actionButtonHeight;
gameObject.uiInfo.possibleActions[0].Width = actionButtonWidth;

gameObject.uiInfo.possibleActions[1].Location = actionButtonStart2;
gameObject.uiInfo.possibleActions[1].Height = actionButtonHeight;
gameObject.uiInfo.possibleActions[1].Width = actionButtonWidth;

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

gameObject.uiInfo.hexBoards = new Array();
gameObject.uiInfo.hexBoards = [gameObject.actorInfo.actors[0].hexBoard, gameObject.actorInfo.actors[1].hexBoard];

gameObject.uiInfo.spellList = new Object();
gameObject.uiInfo.spellList.spells = [moveAction, shootAction, jumpAction, shakeAction];
gameObject.uiInfo.spellList.pageNumber = 0;
gameObject.uiInfo.spellList.Location = spellListCoordinates;
gameObject.uiInfo.spellList.Height = spellListHeight;
gameObject.uiInfo.spellList.Width = spellListWidth;
gameObject.uiInfo.spellList.spellListEntryHeight = spellListEntryHeight;
gameObject.uiInfo.spellList.entriesPerPage = Math.min(Math.ceil(spellListHeight/spellListEntryHeight), gameObject.uiInfo.spellList.spells.length);

gameObject.animationInfo = new Object();
gameObject.animationInfo.totalFrames = 45;
gameObject.animationInfo.frameCount = 0;
gameObject.animationInfo.inAnimation = false;
gameObject.animationInfo.origin = null;
gameObject.animationInfo.target = null;
gameObject.animationInfo.onCompleteMethod = null;
gameObject.animationInfo.onCompleteArguments = null;

function calculate(userInput){
    if(gameObject.animationInfo.inAnimation){
        if(gameObject.animationInfo.frameCount > gameObject.animationInfo.totalFrames){
            gameObject.animationInfo.frameCount = 0;
            gameObject.animationInfo.inAnimation = false;
            if(gameObject.animationInfo.onCompleteArguments != null){
                gameObject.animationInfo.onCompleteMethod(...(gameObject.animationInfo.onCompleteArguments));
            }else{
                gameObject.animationInfo.onCompleteMethod();
            }
        }else{
            gameObject.animationInfo.frameCount = gameObject.animationInfo.frameCount + 1;
            return gameObject;
        }
    }
    if(!userInput.mouseInformation.click){
        updateHoveredObjects(userInput.mouseInformation.coordinates);
        return gameObject;
    }
    handleUI(userInput.mouseInformation.clickCoordinates);
    handleGameBoard(userInput.mouseInformation.clickCoordinates);
    return gameObject;
}



