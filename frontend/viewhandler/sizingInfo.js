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



