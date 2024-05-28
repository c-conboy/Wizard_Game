class Animation {
    frameCount;
    localDestination;
    start;
    finish;
    position;
    speed;
    distance;

    constructor(name, initialize, nextFrame, onComplete, objects) {
        this.name = name;
        this.initialize = initialize; 
        this.nextFrame = nextFrame;
        this.objects = objects;
        this.onComplete = onComplete;
    }
}

moveAnimation = new Animation("move", initializeMove, nextFrameMove, onCompleteMove, "player");

function initializeMove(start, destination){
    this.localDestination= destination;
    this.start = localToGlobal(start);
    this.finish = localToGlobal(destination);
    this.position = localToGlobal(start);

    var dx = this.finish[0] - this.start[0];
    var dy = this.finish[1] - this.start[1];
    this.distance = Math.sqrt(dx * dx + dy * dy);

    this.speed = 1;
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

function onCompleteMove(){
    updateActorLocation(this.localDestination);
}
