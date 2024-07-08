class Action {
    constructor(name, calculatePossible, execute, range) {
        this.name = name;
        this.range = range; 
        this.calculatePossible = calculatePossible;
        this.execute = execute;
    }
}

moveAction = new Action("Move", actionWithinRange, move, 1);
shootAction = new Action("Shoot", actionWithinRange, shoot, 2);
jumpAction = new Action("Jump", actionWithinRangeLOS, move, 2.5);
shakeAction = new Action("Shake", actionWithinRange, shake, 0);

function move(destination){
    moveAnimation.initialize(getActorCoord(gameObject.actorInfo.actors[gameObject.actorInfo.turnIndex].id), destination);
    clearActorLocation(gameObject.actorInfo.actors[gameObject.actorInfo.turnIndex].id)
    //Store pre animation actors map
    gameObject.gameBoardInfo.tempActorsMap = JSON.parse(JSON.stringify(gameObject.gameBoardInfo.actorsMap));
    //Update original actors map with results of action
    updateActorLocation(gameObject.actorInfo.actors[gameObject.actorInfo.turnIndex].id, destination);
    //Store the post animation actors map
    let postAnimationActorsMap = JSON.parse(JSON.stringify(gameObject.gameBoardInfo.actorsMap));
    //Set the actors map to pre animation actors map
    gameObject.gameBoardInfo.actorsMap = JSON.parse(JSON.stringify(gameObject.gameBoardInfo.tempActorsMap));
    //Set the temporary actors map to the post animation actors map
    gameObject.gameBoardInfo.tempActorsMap = postAnimationActorsMap;
}

function shoot(destination){
    gameObject.gameBoardInfo.actorsMap[destination[0]][destination[1]] = 4;
}

function shake(){
    let initialActorLocation = getActorCoord(gameObject.actorInfo.actors[gameObject.actorInfo.turnIndex].id);
    shakeAnimation.initialize(initialActorLocation);
    clearActorLocation(gameObject.actorInfo.actors[gameObject.actorInfo.turnIndex].id);
    //Store pre animation actors map
    gameObject.gameBoardInfo.tempActorsMap = JSON.parse(JSON.stringify(gameObject.gameBoardInfo.actorsMap));
    //Update original actors map with results of action
    updateActorLocation(gameObject.actorInfo.actors[gameObject.actorInfo.turnIndex].id, initialActorLocation);
    updateActorsMap(3,0,[initialActorLocation[0]+1, initialActorLocation[1]]);
    updateActorsMap(3,0,[initialActorLocation[0]-1, initialActorLocation[1]]);
    updateActorsMap(3,0,[initialActorLocation[0], initialActorLocation[1]+1]);
    updateActorsMap(3,0,[initialActorLocation[0], initialActorLocation[1]-1]);
    //Store the post animation actors map
    let postAnimationActorsMap = JSON.parse(JSON.stringify(gameObject.gameBoardInfo.actorsMap));
    //Set the actors map to pre animation actors map
    gameObject.gameBoardInfo.actorsMap = JSON.parse(JSON.stringify(gameObject.gameBoardInfo.tempActorsMap));
    //Set the temporary actors map to the post animation actors map
    gameObject.gameBoardInfo.tempActorsMap = postAnimationActorsMap;
}

function actionWithinRange(actorLocation, value, range){
    let top  =  Math.max(0, Math.ceil(actorLocation[1] - range));
    let bottom = Math.min(gameObject.gameBoardInfo.bounds[1], Math.floor(actorLocation[1] + range));
    let left   =  Math.max(0, Math.ceil(actorLocation[0]- range));
    let right  = Math.min(gameObject.gameBoardInfo.bounds[0], Math.floor(actorLocation[0] + range));

    for (let y = top; y <= bottom; y++) {
        for (let x = left; x <= right; x++) {
            if (insideCircle(actorLocation, [x,y], range)) {
                if(gameObject.gameBoardInfo.actorsMap[x][y] == 0 || gameObject.gameBoardInfo.actorsMap[x][y] == 3){
                    gameObject.gameBoardInfo.actionMap[x][y] = value; 
                }
            }
        }
    }
}

function actionWithinRangeLOS(actorLocation, value, range){
    let top  =  Math.max(0, Math.ceil(actorLocation[1] - range));
    let bottom = Math.min(gameObject.gameBoardInfo.bounds[1], Math.floor(actorLocation[1] + range));
    let left   =  Math.max(0, Math.ceil(actorLocation[0]- range));
    let right  = Math.min(gameObject.gameBoardInfo.bounds[0], Math.floor(actorLocation[0] + range));

    for (let y = top; y <= bottom; y++) {
        for (let x = left; x <= right; x++) {
            if (!insideCircle(actorLocation, [x,y], range)) {
                continue;
            }
            if(!inLOS(actorLocation, [x,y], range)){
                continue;
            }
            if(gameObject.gameBoardInfo.actorsMap[x][y] != 0){
                continue;
            }
            gameObject.gameBoardInfo.actionMap[x][y] = value; 
        }
    }
}

function inLOS(center, tile, radius) {

    let inLOS = true;

    let dx = Math.abs(tile[0] - center[0]);
    let dy = Math.abs(tile[1] - center[1]);
    let x = center[0];
    let y = center[1];
    let n = dx + dy + 1;

    let x_inc = 0;
    if(tile[0] > center[0]){
        x_inc = 1;
    }else{
        x_inc = -1;
    }

    let y_inc = 0;
    if(tile[1] > center[1]){
        y_inc = 1;
    }else{
        y_inc = -1;
    }

    let error = dx - dy;


    inLOS = eLineAlgo(n, x, y, x_inc, y_inc, error, dx, dy);

    return inLOS;
}


function eLineAlgo(n, x, y, x_inc, y_inc, error, dx, dy){
    n--;
    if(n <=0){
        return true;
    }

    if(gameObject.gameBoardInfo.actorsMap[x][y] == 3){
        return false;
    }

    if(error > 0){
        x+=x_inc;
        error-=dy;
        return eLineAlgo(n, x, y, x_inc, y_inc, error, dx, dy);
    }else if (error < 0){
        y+=y_inc;
        error += dx;
        return eLineAlgo(n, x, y, x_inc, y_inc, error, dx, dy);
    }else if (error == 0){
        let x1 = x + x_inc;
        let y1 = y + y_inc;
        let  error1 = error - dy;
        let error2 = error + dx;
        return eLineAlgo(n, x1, y, x_inc, y_inc, error1, dx, dy) || eLineAlgo(n, x, y1, x_inc, y_inc, error2, dx, dy);
    }
}


function insideCircle(center, tile, radius) {
    let dx = center[0] - tile[0], dy = center[1] - tile[1];
    let distance_squared = dx*dx + dy*dy;
    return distance_squared <= radius*radius;
}
