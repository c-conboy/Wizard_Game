function drawGameBoard(gameBoardInfo){
    drawMap(gameBoardInfo.backGroundMap, gameBoardInfo.hoveredTileIndex);
    drawActions(gameBoardInfo.actionMap, gameBoardInfo.hoveredTileIndex);
    drawActors(gameBoardInfo.actorsMap, gameBoardInfo.hoveredTileIndex);
}


//Rendering Actions
function drawActions(map, hoveredTileIndex){
    for (let x = 0; x < map[0].length; x += 1) {
        for (let y = 0; y < map.length; y += 1) {
            if(x == hoveredTileIndex[0] && y == hoveredTileIndex[1]){
                drawAction(x, y, map[x][y], true)
            }else{
                drawAction(x, y, map[x][y], false)
            }
        }
    }
}

function drawAction(x, y, a, hovered){

    let  actionShrinkFactor = 5;
    
    //Determine what to draw
    if(a == 0){
        return
    }

    if(hovered){
        ctx.lineWidth = 4;
        ctx.strokeStyle = '#e5e91f';
    }else{
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#e5e31a';
    }

    px = startTile[0] + (x-y)*(tileWidth/2);
    py = startTile[1] + (x+y)*(tileHeight/2) - 2 + actionShrinkFactor;
    ctx.beginPath(); // Start a new path
    ctx.moveTo(px, py); // Move the pen to start location
    ctx.lineTo(px + (tileWidth-actionShrinkFactor)/2, py + (tileHeight-actionShrinkFactor)/2); // Draw first line
    ctx.stroke(); // Render the path
    ctx.lineTo(px, py + (tileHeight-actionShrinkFactor)); // Draw second line
    ctx.stroke(); // Render the path
    ctx.lineTo(px - (tileWidth-actionShrinkFactor)/2, py + (tileHeight-actionShrinkFactor)/2); // Draw third line
    ctx.stroke(); // Render the path
    ctx.lineTo(px, py); // Draw fourth line
    ctx.stroke(); // Render the path
}


//Rendering Actors
function drawActors(map, hoveredTileIndex){
    for (let x = 0; x < map[0].length; x += 1) {
        for (let y = 0; y < map.length; y += 1) {
            switch(map[x][y]){
                case 1: case 2:
                    drawActor(x, y, map[x][y], hoveredTileIndex);
                    break;
                case 3:
                    drawWall(x, y, hoveredTileIndex);
                    break;
            }

        }
    }
}

function drawActor(x, y, a, hoveredTileIndex){
    //Determine what to draw
    if(a == 0){
        return
    }
    switch(a){
        case 1:
            ctx.fillStyle = "Red";
            break;
        case 2:
            ctx.fillStyle = "Green";
            break;
    }
    //Draw it
    px = startTile[0] + (x-y)*(tileWidth/2);
    py = startTile[1] + (x+y)*(tileHeight/2);
    ctx.beginPath();
    if(x == hoveredTileIndex[0] && y == hoveredTileIndex[1]){
        ctx.arc(px, py, radius+3, 0, 2 * Math.PI);
    }else{
        ctx.arc(px, py, radius, 0, 2 * Math.PI);
    }
    ctx.fill();
}

//Rendering Map
function drawMap(map, hoveredTileIndex){
    for (let x = 0; x < map[0].length; x += 1) {
        for (let y = 0; y < map.length; y += 1) {
            switch(map[x][y]){
                case 0:
                    if(x == hoveredTileIndex[0] && y == hoveredTileIndex[1]){
                        drawTile(x, y, true)
                    }else{
                        drawTile(x, y, false)
                    }
                    break;
            }

        }
    }
}

function drawTile(x, y, hovered){
    if(hovered){
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#040410';
        ctx.fillStyle = '#697F96';
    }else{
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#040400';
        ctx.fillStyle = '#8799AB';
    }
    let px = startTile[0] + (x-y)*(tileWidth/2);
    let py = startTile[1] + (x+y)*(tileHeight/2);

    ctx.beginPath(); // Start a new path
    ctx.moveTo(px, py); // Move the pen to start location
    ctx.lineTo(px + tileWidth/2, py + tileHeight/2); // Draw first line
    ctx.stroke(); // Render the path
    ctx.lineTo(px, py + tileHeight); // Draw second line
    ctx.stroke(); // Render the path
    ctx.lineTo(px - tileWidth/2, py + tileHeight/2); // Draw third line
    ctx.stroke(); // Render the path
    ctx.lineTo(px, py); // Draw fourth line
    ctx.stroke(); // Render the path
    ctx.closePath();
    ctx.fill();
}

function drawWall(x, y, hoveredTileIndex){

    let hovered = false;

    if(x == hoveredTileIndex[0] && y == hoveredTileIndex[1]){
        hovered = true;
    }

    if((x-1) == hoveredTileIndex[0] && (y-1) == hoveredTileIndex[1]){
        hovered = true;
    }

    let wallHeight = radius*2;
    let px = startTile[0] + (x-y)*(tileWidth/2);
    let py = startTile[1] + (x+y)*(tileHeight/2);

    if(hovered){
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#040410';
        ctx.fillStyle = 'rgba(0,0,0,0)';
    }else{
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#040400';
        ctx.fillStyle = '#70706F';
    }


    //Draw Left Face
    ctx.beginPath();
    ctx.moveTo(px - tileWidth/2, py + tileHeight/2);
    ctx.lineTo(px - tileWidth/2, py + tileHeight/2 - wallHeight);
    ctx.stroke();
    ctx.lineTo(px, py + tileHeight - wallHeight);
    ctx.stroke();
    ctx.lineTo(px, py + tileHeight);
    ctx.stroke();
    ctx.lineTo(px - tileWidth/2, py + tileHeight/2);
    ctx.stroke();
    ctx.closePath()
    ctx.fill();

    if(hovered){
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#040410';
        ctx.fillStyle = 'rgba(0,0,0,0)';
    }else{
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#040400';
        ctx.fillStyle = '#686868';
    }

    //Draw Right Face
    ctx.beginPath();
    ctx.moveTo(px, py + tileHeight);
    ctx.lineTo(px, py + tileHeight - wallHeight);
    ctx.stroke();
    ctx.lineTo(px + tileWidth/2, py + tileHeight/2 - wallHeight);
    ctx.stroke();
    ctx.lineTo(px + tileWidth/2, py + tileHeight/2);
    ctx.stroke();
    ctx.lineTo(px, py + tileHeight);
    ctx.stroke();  
    ctx.closePath()
    ctx.fill();


    if(hovered){
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#040410';
        ctx.fillStyle = 'rgba(0,0,0,0)';
    }else{
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#040400';
        ctx.fillStyle = '#999998';
    }

    py = py - wallHeight;
    //Draw Second Square
    ctx.beginPath(); // Start a new path
    ctx.moveTo(px, py); // Move the pen to start location
    ctx.lineTo(px + tileWidth/2, py + tileHeight/2); // Draw first line
    ctx.stroke(); // Render the path
    ctx.lineTo(px, py + tileHeight); // Draw second line
    ctx.stroke(); // Render the path
    ctx.lineTo(px - tileWidth/2, py + tileHeight/2); // Draw third line
    ctx.stroke(); // Render the path
    ctx.lineTo(px, py); // Draw fourth line
    ctx.stroke(); // Render the path
    ctx.closePath()
    ctx.fill();
}