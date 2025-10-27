const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const width = 800;
const height = 600;
ctx.canvas.width  = width;
ctx.canvas.height = height;

const verticalStart = 0;
const verticalSlice1 = verticalStart + 250;
const verticalSlice2 = verticalSlice1 + 300;
const verticalSlice15 = verticalStart + 160;
const verticalSlice25 = verticalSlice15 + 480;

const horizontalStart = 0;
const horizontalSlice1 = horizontalStart + 50;
const horizontalSlice2 = horizontalSlice1 + 150;
const horizontalSlice3 = horizontalSlice2 + 50;
const horizontalSlice4 = horizontalSlice3 + 275;

const numberOfTiles = 11;
const tileWidth = Math.floor((verticalSlice2-verticalSlice1)/numberOfTiles);
const tileHeight = tileWidth/2;
const radius = Math.sqrt((tileWidth/2)**2 + (tileHeight/2)**2)/2;
const startTile = [verticalStart + verticalSlice1 + (verticalSlice2-verticalSlice1)/2, horizontalSlice1];

const hexBoardSize = 173.2;
const hexBoardCoordinate1 = [verticalStart + verticalSlice25 + (width - verticalSlice25)/2,horizontalSlice1];
const pointCoordinates = generateCoordinates(hexBoardSize, hexBoardCoordinate1);
const hexBoardCoordinate2 = [verticalStart + verticalSlice15/2,horizontalSlice1];
const pointCoordinates2 = generateCoordinates(hexBoardSize, hexBoardCoordinate2);
const pointSizeSmall = 3;
const pointSizeLarge = 12;

const rotateHeight = tileWidth;
const rotateWidth = tileWidth;
const rotateOffset = tileWidth*1.5;
const rotateStart = [verticalStart + verticalSlice1 + (verticalSlice2-verticalSlice1)/2 - 100, horizontalSlice2 + (horizontalSlice3- horizontalSlice2)/2];


const heightAdjustHeight = tileWidth/2;
const heightAdjustWidth = tileWidth/2;
const heightAdjustOffset = tileWidth*0.75;
const heightAdjustStart = [verticalStart + verticalSlice1 + (verticalSlice2-verticalSlice1)/2 + 100, horizontalSlice2 + (horizontalSlice3- horizontalSlice2)/2];

const actionButtonWidth = 104;
const actionButtonHeight = 30;
const actionButtonStart = [verticalStart + verticalSlice25 + (width - verticalSlice25)/2 - actionButtonWidth/2, horizontalSlice3];
const actionButtonStart2 = [verticalStart + (verticalSlice15-verticalStart)/2 - actionButtonWidth/2, horizontalSlice3];

const endTurnWidth = 100;
const endTurnHeight = 30;
const endTurnStart = [verticalStart + verticalSlice25 + (width - verticalSlice25)/2 - endTurnWidth/2, horizontalSlice4 + (height-horizontalSlice4)/2 - endTurnHeight/2];

const spellListCoordinates = [verticalStart + verticalSlice15, horizontalSlice3];
const spellListHeight = 325;
const spellListWidth = 480;
const spellListEntryHeight = 30;

function generateCoordinates(size, location){
    let triangleWidth = size/4;
    let triangleHeight = triangleWidth*Math.sqrt(3)/2;
    let startingLocation = location;

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


