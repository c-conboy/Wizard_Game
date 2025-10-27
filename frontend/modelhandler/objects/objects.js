class ObjectClass {
    constructor(id){
        this.id = id;
        this.type = "Normal";
        this.height = 0;
    }

    takeDamage(amount, type){
    }
}


class Wall extends ObjectClass {
    constructor(id){
        super(id);
        this.height = id - 2;
        this.type = "Wall";
    }
    takeDamage(amount, type){
        let objectCoordinates = findObject(this);
        if(amount > 2){
            if(objectCoordinates != null){
                if(gameObject.gameBoardInfo.objectsMap[objectCoordinates[0]][objectCoordinates[1]].height > 1){
                    gameObject.gameBoardInfo.objectsMap[objectCoordinates[0]][objectCoordinates[1]].height--;
                    gameObject.gameBoardInfo.objectsMap[objectCoordinates[0]][objectCoordinates[1]].id--;
                }else{
                    gameObject.gameBoardInfo.objectsMap[objectCoordinates[0]][objectCoordinates[1]] = new ObjectClass(0);
                }
            }
        }
    }
}

function generateObjectsMap(objectIdMap){
    return objectIdMap.map(row => row.map(id => generateObject(id)));
}

function generateObject(id){
    if(id == 1){
        return player1;
    }
    if(id == 2){
        return player2;
    }
    if(id > 2 && id < 6){
        return new Wall(id);
    }
    return new ObjectClass(id);
}

function generateObjectIdMap(objectsMap){
    return objectsMap.map(row => row.map(value => value.id));
}

function findObject(object){
    for(let x = 0; x< gameObject.gameBoardInfo.objectsMap.length; x++){
        for(let y = 0; y < gameObject.gameBoardInfo.objectsMap[x].length; y++){
            if(gameObject.gameBoardInfo.objectsMap[x][y] === object){
                return [x,y];
            }
        }
    }
    return null
}