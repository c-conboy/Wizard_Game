const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;

const tileWidth = 50;
const tileHeight = 25; 
const radius = Math.sqrt((tileWidth/2)**2 + (tileHeight/2)**2)/2;
const startTile = [canvas.width/2, 50];

const actionButtonWidth = 100;
const actionButtonHeight = 50;
const actionButtonStart = [2*(canvas.width/3), 50];
