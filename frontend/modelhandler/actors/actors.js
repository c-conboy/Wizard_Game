class Actor {
    constructor(id) {
        this.possibleActions = new Object();
        this.possibleActions.Actions = [moveAction]
        this.magicBoard = new Object();
        this.magicBoard.Nodes = [0,0];
        this.id = id;
        this.selectedAction = moveAction
    }
}

player1 = new Actor(1);
player2 = new Actor(2);