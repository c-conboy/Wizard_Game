//Rendering Actions
function drawActions(map){
    for (x = 0; x < map[0].length; x += 1) {
        for (y = 0; y < map.length; y += 1) {
            drawAction(x, y, map[x][y])
        }
    }
}

function drawAction(x, y, a){
    //Determine what to draw
    if(a == 0){
        return
    }
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#e5e31a';
    px = startTile[0] + (x-y)*(tileWidth/2);
    py = startTile[1] + (x+y)*(tileHeight/2) - 2;
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
}


//Rendering Actors
function drawActors(map){
    for (x = 0; x < map[0].length; x += 1) {
        for (y = 0; y < map.length; y += 1) {
            drawActor(x, y, map[x][y])
        }
    }
}

function drawActor(x, y, a){
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
    ctx.arc(px, py, radius, 0, 2 * Math.PI);
    ctx.fill();
}

//Rendering Map
function drawMap(map){
    for (x = 0; x < map[0].length; x += 1) {
        for (y = 0; y < map.length; y += 1) {
            drawTile(x, y)
        }
    }
}

function drawTile(x, y){
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#040400';
    px = startTile[0] + (x-y)*(tileWidth/2);
    py = startTile[1] + (x+y)*(tileHeight/2);
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
}