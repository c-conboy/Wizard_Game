class Actor extends ObjectClass{
    constructor(id, hexBoard) {
        super(id);
        this.type = "Player";
        this.possibleActions = new Object();
        this.possibleActions.Actions = new Array(moveAction);
        this.possibleActions.hoveredActionIndex = null;
        this.hexBoard = hexBoard;
        this.id = id;
        this.selectedAction = moveAction
        this.height = 0;
        this.maxNewNodes = 1;
        this.maxNewLinks = 1;
    }
    takeDamage(amount, type){
        if(amount > 2){
            if(this.height > 0){
                this.height--;
            }
        }
    }
}

player1 = new Actor(1,new HexBoard(pointCoordinates, pointSizeSmall, pointSizeLarge));
player2 = new Actor(2,new HexBoard(pointCoordinates2, pointSizeSmall, pointSizeLarge));