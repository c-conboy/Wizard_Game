let gameObject = new Object();
gameObject.gameBoardInfo = new Object();
gameObject.uiInfo = new Object();

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

gameObject.gameBoardInfo.selectedAction = new Object(); 
gameObject.gameBoardInfo.selectedAction.Name = "Move";
gameObject.gameBoardInfo.selectedAction.Shape = [[0,1],[0,-1],[-1,0],[1,0]];
gameObject.uiInfo.possibleActions = new Object();
gameObject.uiInfo.possibleActions.Actions = ["Move", "Shoot"];
gameObject.uiInfo.possibleActions.Location = actionButtonStart;
gameObject.uiInfo.possibleActions.Height = actionButtonHeight;
gameObject.uiInfo.possibleActions.Width = actionButtonWidth;

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



