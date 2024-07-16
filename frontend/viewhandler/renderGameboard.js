function drawGameBoard(gameBoardInfo, actorInfo){
    drawMap(gameBoardInfo.backGroundMap, gameBoardInfo.hoveredTileIndex);
    drawActions(gameBoardInfo.actionMap, gameBoardInfo.hoveredTileIndex);
    drawActors(gameBoardInfo.actorsMap, gameBoardInfo.hoveredTileIndex, actorInfo);
    drawAnimatedObjects(gameBoardInfo.animatedObjects);
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

    /*
    if(hovered){
        ctx.lineWidth = 4;
        ctx.strokeStyle = '#464646';
    }else{
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#b4b4b4';
    }*/

    /*
    px = startTile[0] + (x-y)*(tileWidth/2);
    py = startTile[1] + (x+y)*(tileHeight/2);
    py = py+tileHeight/2;
    ctx.beginPath();
    ctx.arc(px, py, pointSizeSmall, 0, 2 * Math.PI);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.closePath();

    /*

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
    */

    ctx.lineWidth = 1;
    ctx.strokeStyle = '#ffffff';
    ctx.fillStyle = "#ffffff";
    //ctx.fillStyle = '#ffffff';
    px = startTile[0] + (x-y)*(tileWidth/2);
    py = startTile[1] + (x+y)*(tileHeight/2);
    py = py + 3*tileHeight/8;
    ctx.beginPath(); // Start a new path
    ctx.moveTo(px, py); // Move the pen to start location
    ctx.lineTo(px + tileWidth/8, py + tileHeight/8); // Draw first line
    ctx.stroke(); // Render the path
    ctx.lineTo(px, py + tileHeight/4); // Draw second line
    ctx.stroke(); // Render the path
    ctx.lineTo(px - tileWidth/8, py + tileHeight/8); // Draw third line
    ctx.stroke(); // Render the path
    ctx.lineTo(px,py); // Draw fourth line
    ctx.stroke(); // Render the path
    ctx.closePath();
    ctx.fill();
}

//Rendering Actors
function drawActors(map, hoveredTileIndex, actorInfo){
    for (let x = 0; x < map[0].length; x += 1) {
        for (let y = 0; y < map.length; y += 1) {
            switch(map[x][y]){
                case 1: case 2: case 4:
                    drawActor(x, y, map[x][y], hoveredTileIndex, actorInfo);
                    break;
                case 3:
                    drawWall(x, y, hoveredTileIndex);
                    break;
            }
        }
    }
}

function drawActor(x, y, a, hoveredTileIndex, actorInfo){
    //Determine what to draw
    if(a == 0){
        return
    }
    switch(a){
        case 1:
            ctx.fillStyle = "White";
            break;
        case 2:
            ctx.fillStyle = "White";
            break;
        case 4:
            ctx.fillStyle = "White";
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

    //Draw Arrow if selected
    if(a == actorInfo.actors[actorInfo.turnIndex].id){
        ctx.beginPath();
        ctx.fillStyle = "#ffffff";
        py = py-radius-3-tileHeight/2;
        ctx.moveTo(px, py);
        ctx.lineTo(px + tileWidth/8, py + tileHeight/8); // Draw first line
        ctx.stroke(); // Render the path
        ctx.lineTo(px, py + tileHeight/2); // Draw second line
        ctx.stroke(); // Render the path
        ctx.lineTo(px - tileWidth/8, py + tileHeight/8); // Draw third line
        ctx.stroke(); // Render the path
        ctx.lineTo(px,py); // Draw fourth line
        ctx.stroke(); // Render the path
        ctx.closePath();
        ctx.fill();
    }
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
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#ffffff';
    ctx.fillStyle = 'Black';

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
    ctx.closePath();
    ctx.fill();

    
    if(hovered){
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#ffffff';
        //ctx.fillStyle = '#ffffff';
        let px = startTile[0] + (x-y)*(tileWidth/2);
        let py = startTile[1] + (x+y)*(tileHeight/2);
        py = py + tileHeight/4;
        
        ctx.beginPath(); // Start a new path
        ctx.moveTo(px, py); // Move the pen to start location
        ctx.lineTo(px + tileWidth/4, py + tileHeight/4); // Draw first line
        ctx.stroke(); // Render the path
        ctx.lineTo(px, py + tileHeight/2); // Draw second line
        ctx.stroke(); // Render the path
        ctx.lineTo(px - tileWidth/4, py + tileHeight/4); // Draw third line
        ctx.stroke(); // Render the path
        ctx.lineTo(px,py); // Draw fourth line
        ctx.stroke(); // Render the path
        ctx.closePath();
        ctx.fill();
    }

}

function drawWall(x, y, hoveredTileIndex){
    let hovered = false;
    let trueHovered = false;

    if(x == hoveredTileIndex[0] && y == hoveredTileIndex[1]){
        hovered = true;
        trueHovered = true;

    }

    if((x) == hoveredTileIndex[0] && (y-1) == hoveredTileIndex[1]){
        hovered = true;
    }

    if((x) == hoveredTileIndex[0] && (y+1) == hoveredTileIndex[1]){
        hovered = true;
    }

    if((x+1) == hoveredTileIndex[0] && (y) == hoveredTileIndex[1]){
        hovered = true;
    }

    if((x-1) == hoveredTileIndex[0] && (y) == hoveredTileIndex[1]){
        hovered = true;
    }

    if((x-1) == hoveredTileIndex[0] && (y-1) == hoveredTileIndex[1]){
        hovered = true;
    }

    if((x+1) == hoveredTileIndex[0] && (y+1) == hoveredTileIndex[1]){
        hovered = true;
    }

    if((x+1) == hoveredTileIndex[0] && (y-1) == hoveredTileIndex[1]){
        hovered = true;
    }

    if((x-1) == hoveredTileIndex[0] && (y+1) == hoveredTileIndex[1]){
        hovered = true;
    }

    let wallHeight = tileHeight;
    let px = startTile[0] + (x-y)*(tileWidth/2);
    let py = startTile[1] + (x+y)*(tileHeight/2);


    //Draw Left Face
    if(hovered){
        ctx.strokeStyle = '#ffffff';
        ctx.fillStyle = 'rgba(0,0,0,0)';
    }else{
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#ffffff';
        ctx.fillStyle = '#464646';
    }

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


    //Draw Right Face

    
    if(hovered){
        ctx.strokeStyle = '#ffffff';
        ctx.fillStyle = 'rgba(0,0,0,0)';
    }else{
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#ffffff';
        ctx.fillStyle = 'Black';
    }

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

    py = py - wallHeight;
    //Draw Second Square

    if(hovered){
        ctx.strokeStyle = '#ffffff';
        ctx.fillStyle = 'rgba(0,0,0,0)';
    }else{
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#ffffff';
        ctx.fillStyle = '#b4b4b4';
    }

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
    ctx.setLineDash([]);

    if(hovered){
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#ffffff';
        ctx.fillStyle = '#464646';

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
        ctx.closePath();
        ctx.fill();

        if(trueHovered){
            ctx.lineWidth = 1;
            ctx.strokeStyle = '#ffffff';
            //ctx.fillStyle = '#ffffff';
            px = startTile[0] + (x-y)*(tileWidth/2);
            py = startTile[1] + (x+y)*(tileHeight/2);
            py = py + tileHeight/4;
            ctx.beginPath(); // Start a new path
            ctx.moveTo(px, py); // Move the pen to start location
            ctx.lineTo(px + tileWidth/4, py + tileHeight/4); // Draw first line
            ctx.stroke(); // Render the path
            ctx.lineTo(px, py + tileHeight/2); // Draw second line
            ctx.stroke(); // Render the path
            ctx.lineTo(px - tileWidth/4, py + tileHeight/4); // Draw third line
            ctx.stroke(); // Render the path
            ctx.lineTo(px,py); // Draw fourth line
            ctx.stroke(); // Render the path
            ctx.closePath();
            ctx.fill();
        }
    }
    
}