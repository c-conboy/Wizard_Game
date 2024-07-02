class Animation {
    frameCount;
    localDestination;
    start;
    finish;
    position;
    speed;
    distance;

    constructor(name, initialize, nextFrame, objects) {
        this.name = name;
        this.initialize = initialize; 
        this.nextFrame = nextFrame;
        this.objects = objects;
    }
}

moveAnimation = new Animation("move", initializeMove, nextFrameMove, "player");
shakeAnimation = new Animation("shake", initializeShake, nextFrameShake, "player");

function initializeMove(start, destination){
    this.localDestination = destination;
    this.start = localToGlobal(start);
    this.finish = localToGlobal(destination);
    this.position = localToGlobal(start);

    var dx = this.finish[0] - this.start[0];
    var dy = this.finish[1] - this.start[1];
    this.distance = Math.sqrt(dx * dx + dy * dy);

    this.speed = 5;
    this.frameCount = Math.ceil(this.distance/this.speed);

    animationInfo.frameCounter = this.frameCount;
    animationInfo.inAnimation = true;
    animationInfo.currentAnimation = this;
}

function nextFrameMove(){
    // Calculate new position based on speed
    this.position[0] += (this.finish[0] - this.start[0]) / this.distance * this.speed;
    this.position[1] += (this.finish[1] - this.start[1]) / this.distance * this.speed;

    animatedObject = new Object();
    animatedObject.object = this.objects;
    animatedObject.location = this.position;

    this.frameCount = this.frameCount - 1;

    return animatedObject;
}

function initializeShake(start){
    var intensity = 2;
    var globalStart = localToGlobal(start);
    this.start = globalStart;
    this.distance = intensity;
    this.finish = globalStart;
    this.position = globalStart;
    this.speed = 3;

    //Calculate Frame Count
    //How many backs and forths: 20
    repetitions = 10;

    this.frameCount = Math.ceil(this.distance*4*repetitions/this.speed);
    animationInfo.frameCounter = this.frameCount;
    animationInfo.inAnimation = true;
    animationInfo.currentAnimation = this;
}

function nextFrameShake(){
    //Every third frame update position to right
    //If in an even frame update position to the right
    var numberOfDivisors = 0;
    var sumOfDivisors = 0;

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