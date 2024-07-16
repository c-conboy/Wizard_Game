class Animation {
    frameCount;
    localDestination;
    start;
    finish;
    position;
    speed;
    distance;
    object;

    constructor(name, initialize, nextFrame, object) {
        this.name = name;
        this.initialize = initialize; 
        this.nextFrame = nextFrame;
    }
}

moveAnimation = new Animation("move", initializeMove, nextFrameMove);
shakeAnimation = new Animation("shake", initializeShake, nextFrameShake);

function initializeMove(start, destination){
    this.object = gameObject.actorInfo.actors[gameObject.actorInfo.turnIndex].id;
    this.localDestination = destination;
    this.start = localToGlobal(start);
    this.finish = localToGlobal(destination);
    this.position = localToGlobal(start);

    let dx = this.finish[0] - this.start[0];
    let dy = this.finish[1] - this.start[1];
    this.distance = Math.sqrt(dx * dx + dy * dy);

    this.speed = 5;
    this.frameCount = Math.ceil(this.distance/this.speed);

    gameObject. animationInfo.frameCounter = this.frameCount;
    gameObject.animationInfo.inAnimation = true;
    gameObject.animationInfo.currentAnimation = this;
}

function nextFrameMove(){
    // Calculate new position based on speed
    this.position[0] += (this.finish[0] - this.start[0]) / this.distance * this.speed;
    this.position[1] += (this.finish[1] - this.start[1]) / this.distance * this.speed;

    animatedObject = new Object();
    animatedObject.object = this.object;
    animatedObject.location = this.position;

    this.frameCount = this.frameCount - 1;

    return animatedObject;
}

function initializeShake(start){
    let intensity = 2;
    let globalStart = localToGlobal(start);
    this.start = globalStart;
    this.distance = intensity;
    this.finish = globalStart;
    this.position = globalStart;
    this.speed = 3;

    //Calculate Frame Count
    //How many backs and forths: 20
    repetitions = 10;

    this.frameCount = Math.ceil(this.distance*4*repetitions/this.speed);
    gameObject.animationInfo.frameCounter = this.frameCount;
    gameObject.animationInfo.inAnimation = true;
    gameObject.animationInfo.currentAnimation = this;
}

function nextFrameShake(){
    //Every third frame update position to right
    //If in an even frame update position to the right
    let numberOfDivisors = 0;
    let sumOfDivisors = 0;

    while(sumOfDivisors <= this.frameCount){
        sumOfDivisors +=  this.speed;
        numberOfDivisors += 1;
    }

    if((numberOfDivisors%2) == 0){
        this.position[0] += this.distance;
    }else{
        this.position[0] -= this.distance;
    }

    animatedObject = new Object();
    animatedObject.object = this.objects;
    animatedObject.location = this.position;

    this.frameCount = this.frameCount - 1;

    return animatedObject;
}