class Action {
    constructor(name, shape, execute) {
        this.name = name;
        this.shape = shape;
        this.execute = execute;
    }
}

moveAction = new Action("Move", [[0,1],[0,-1],[-1,0],[1,0]], move);
shootAction = new Action("Shoot", [[1,1],[-1,-1],[-1,1],[1,-1],[2,2],[-2,-2],[-2,2],[2,-2]], shoot);
jumpAction = new Action("Jump", [[0,2],[0,-2],[-2,0],[2,0]], move);

function move(destination){
    updateActorLocation(destination)
}

function shoot(destination){
    gameObject.gameBoardInfo.actorsMap[destination[0]][destination[1]] = 2;
}