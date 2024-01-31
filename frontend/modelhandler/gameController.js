let gameObject = new Object();
gameObject.gameBoardInfo = new Object();

gameObject.gameBoardInfo.backGroundMap = [[0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0]]

gameObject.gameBoardInfo.actionMap = [[0,0,0,0,0],
            [0,1,0,0,0],
            [1,0,1,0,0],
            [0,1,0,0,0],
            [0,0,0,0,0]]

gameObject.gameBoardInfo.actorsMap = 
            [[0,0,0,0,0],
             [0,0,0,0,0],
             [0,1,0,0,0],
             [0,0,0,0,0],
             [0,0,0,0,0]]

gameObject.gameBoardInfo.selectedAction = moveAction  

gameObject.uiInfo = new Object();
gameObject.uiInfo.possibleActions = new Object();
gameObject.uiInfo.possibleActions.Actions = [moveAction];
gameObject.uiInfo.possibleActions.Location = actionButtonStart;
gameObject.uiInfo.possibleActions.Height = actionButtonHeight;
gameObject.uiInfo.possibleActions.Width = actionButtonWidth;
gameObject.uiInfo.magicBoard = new Object();
gameObject.uiInfo.magicBoard.Nodes = [0, 0];
gameObject.uiInfo.magicBoard.Location = magicButtonStart;
gameObject.uiInfo.magicBoard.Height = magicButtonHeight;
gameObject.uiInfo.magicBoard.Width = magicButtonWidth;
gameObject.uiInfo.magicBoard.Offset = magicButtonOffset;

let prev = [11111111,1111111111]

function calculate(userInput){
    if((userInput[0] == prev[0]) && (userInput[1] == prev[1])){
        return gameObject
    }else{
        prev[0] = userInput[0]
        prev[1] = userInput[1]
    }
    
    handleUI(userInput);
    handleGameBoard(userInput);

    return gameObject
}



