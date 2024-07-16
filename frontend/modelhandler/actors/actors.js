class Actor {
    constructor(id, hexBoard) {
        this.possibleActions = new Object();
        this.possibleActions.Actions = new Array(moveAction);
        this.possibleActions.hoveredActionIndex = null;
        this.hexBoard = hexBoard;
        this.id = id;
        this.selectedAction = moveAction
    }
}

player1 = new Actor(1,new HexBoard(pointCoordinates, pointSizeSmall, pointSizeLarge));
player2 = new Actor(2,new HexBoard(pointCoordinates2, pointSizeSmall, pointSizeLarge));