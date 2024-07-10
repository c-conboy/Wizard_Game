const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;

const numberOfTilesY = 10;
const tileWidth = 50;
const tileHeight = 25; 
const radius = Math.sqrt((tileWidth/2)**2 + (tileHeight/2)**2)/2;
const startTile = [canvas.width/2, 50];

const actionButtonWidth = 100;
const actionButtonHeight = 50;
const actionButtonStart = [2*(canvas.width/3), 50];

const magicButtonWidth = 25;
const magicButtonHeight = 25;
const magicButtonStart = [(canvas.width/4), 50];
const magicButtonOffset = 50;

const rotateStart = [canvas.width/2, tileHeight*numberOfTilesY];
const rotateHeight = 25;
const rotateWidth = 25;
const rotateOffset = 50;

const endTurnStart = [actionButtonStart[0], actionButtonStart[1] + actionButtonHeight*5];
const endTurnWidth = actionButtonWidth*1.5;
const endTurnHeight = actionButtonHeight;

const pointCoordinates = generateCoordinates();
const pointSizeSmall = 3;
const pointSizeLarge = 18;


function generateCoordinates(){
    let triangleWidth = 60;
    let triangleHeight = triangleWidth*Math.sqrt(3)/2;
    let startingLocation = [magicButtonStart[0]+magicButtonWidth, magicButtonStart[1]+60];

    let points = new Array();;

    //Top Point
    points.push(startingLocation);

    //Top Row
    for(let x = 0; x < 4; x++){
        points.push([startingLocation[0] - triangleWidth*1.5 + x*triangleWidth, startingLocation[1]+triangleHeight]);
    }

    //Middle Row
    for(let x = 0; x < 3; x++){
        points.push([startingLocation[0] - triangleWidth*1 + x*triangleWidth, startingLocation[1]+triangleHeight*2]);
    }

    //Bottom Row
    for(let x = 0; x < 4; x++){
        points.push([startingLocation[0] - triangleWidth*1.5 + x*triangleWidth, startingLocation[1]+triangleHeight*3]);
    }

    //Bottom Point
    points.push([startingLocation[0], startingLocation[1]+triangleHeight*4]);
    return points;
}


