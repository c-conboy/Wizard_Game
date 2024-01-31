class Action {
    constructor(name, shape) {
        this.name = name;
        this.shape = shape;
    }
}

moveAction = new Action("Move", [[0,1],[0,-1],[-1,0],[1,0]]);
shootAction = new Action("Shoot", [[1,1],[-1,-1],[-1,1],[1,-1],[2,2],[-2,-2],[-2,2],[2,-2]]);
jumpAction = new Action("Jump", [[0,2],[0,-2],[-2,0],[2,0]]);