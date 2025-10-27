function drawGameBoard(gameBoardInfo, actorInfo){
    drawMap(gameBoardInfo.backGroundMap, gameBoardInfo.hoveredTileIndex, gameBoardInfo.actionMap);
    drawObjects(gameBoardInfo.objectsIdMap, gameBoardInfo.actionMap, gameBoardInfo.hoveredTileIndex, actorInfo, gameBoardInfo.viewHeight, gameBoardInfo.autoViewHeight);
    drawAnimatedObjects(gameBoardInfo.animatedObjects);
}

//Rendering Actions
function drawActions(map, hoveredTileIndex, objectsMap){
    for (let x = 0; x < map[0].length; x += 1) {
        for (let y = 0; y < map.length; y += 1) {
            if(x == hoveredTileIndex[0] && y == hoveredTileIndex[1]){
                drawAction(x, y, map[x][y], true, objectsMap[x][y].height)
            }else{
                drawAction(x, y, map[x][y], false, objectsMap[x][y].height)
            }
        }
    }
}

function drawAction(px, py){
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#ffffff';
    ctx.fillStyle = "#ffffff";
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

//Rendering Obejects
function drawObjects(map, actionMap, hoveredTileIndex, actorInfo, viewHeight, autoViewHeight){
    for (let x = 0; x < map[0].length; x += 1) {
        for (let y = 0; y < map.length; y += 1) {
            switch(map[x][y]){
                case 1: case 2:
                    drawActor(x, y, map[x][y], hoveredTileIndex, actorInfo, viewHeight, autoViewHeight, actionMap);
                    break;
                case 3:
                    drawWall(x, y, hoveredTileIndex, 1, viewHeight, autoViewHeight, actionMap[x][y]);
                    break;
                case 4:
                    drawWall(x, y, hoveredTileIndex, 2, viewHeight, autoViewHeight, actionMap[x][y]);
                    break;
                case 5:
                    drawWall(x, y, hoveredTileIndex, 3, viewHeight, autoViewHeight, actionMap[x][y]);
                    break;
            }
        }
    }
}

function drawActor(x, y, a, hoveredTileIndex, actorInfo, viewHeight, autoViewHeight, actionMap){
    let height = actorInfo.actors[a-1].height;
    if(height > 0){
        drawWall(x, y, hoveredTileIndex, height, viewHeight, autoViewHeight, actionMap[x][y]);
    }
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
    py = startTile[1] + (x+y)*(tileHeight/2) - height*tileHeight;
    ctx.beginPath();

    if(x == hoveredTileIndex[0] && y == hoveredTileIndex[1]){
        py = startTile[1] + (x+y)*(tileHeight/2) - height*tileHeight - 10;
    }
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
function drawMap(map, hoveredTileIndex, actionMap){
    for (let x = 0; x < map[0].length; x += 1) {
        for (let y = 0; y < map.length; y += 1) {
            switch(map[x][y]){
                case 0:
                    if(x == hoveredTileIndex[0] && y == hoveredTileIndex[1]){
                        drawTile(x, y, true, actionMap[x][y])
                    }else{
                        drawTile(x, y, false, actionMap[x][y])
                    }
                    break;
            }

        }
    }
}

function drawTile(x, y, hovered, actionMap){
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

    if(actionMap == 1){
        drawAction(px,py);
    }
}

function drawWall(x, y, hoveredTileIndex, height, viewHeight, autoViewHeight, actionMap){
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

    if(autoViewHeight){
        hovered = false;
    }

    for(let heightIndex = 0; heightIndex<height; heightIndex++){
        let px = startTile[0] + (x-y)*(tileWidth/2);
        let py = startTile[1] + (x+y)*(tileHeight/2) - tileHeight*heightIndex;
        if(hovered && viewHeight == heightIndex){
            let px = startTile[0] + (x-y)*(tileWidth/2);
            let py = startTile[1] + (x+y)*(tileHeight/2) - tileHeight*viewHeight-viewHeight;
            drawGreySquare(px,py);
        }
        if(heightIndex+1 > viewHeight){
            if(autoViewHeight && hovered){
                if(viewHeight == heightIndex){
                    let px = startTile[0] + (x-y)*(tileWidth/2);
                    let py = startTile[1] + (x+y)*(tileHeight/2) - tileHeight*(heightIndex)-heightIndex;
                    drawAction(px, py);
                }
            }
            drawCube(px, py, hovered, heightIndex);
        }else{
            drawCube(px, py, false, heightIndex);
        }
        if(autoViewHeight){
            if((height-1) == heightIndex && actionMap == 1){
                let px = startTile[0] + (x-y)*(tileWidth/2);
                let py = startTile[1] + (x+y)*(tileHeight/2) - tileHeight*(heightIndex+1)-heightIndex;
                drawAction(px, py);
            }
        }
    }

    if(trueHovered && actionMap == 1){
        let px = startTile[0] + (x-y)*(tileWidth/2);
        let py = startTile[1] + (x+y)*(tileHeight/2) - tileHeight*viewHeight-viewHeight;
        drawAction(px,py);
    }

    if(trueHovered){
        let px = startTile[0] + (x-y)*(tileWidth/2);
        let py = startTile[1] + (x+y)*(tileHeight/2) - tileHeight*viewHeight-viewHeight;
        drawHoveredSquare(px,py);
    }
}

function drawHoveredSquare(px,py){
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#ffffff';
    ctx.fillStyle = 'rgba(0,0,0,0)';
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

function drawCube(x,y,transparent,height){
    let wallHeight = tileHeight + height;
    px = x;
    py = y;

    //Draw Left Face
    if(transparent){
        ctx.strokeStyle = '#ffffff';
        ctx.fillStyle = 'rgba(0,0,0,0)';
    }else{
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#ffffff';
        ctx.fillStyle = '#303030';
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
    if(transparent){
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
    if(transparent){
        ctx.strokeStyle = '#ffffff';
        ctx.fillStyle = 'rgba(0,0,0,0)';
    }else{
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#ffffff';
        ctx.fillStyle = '#b4b4b4';
        switch(height){
            case 0: 
                ctx.lineWidth = 1;
                ctx.strokeStyle = '#ffffff';
                ctx.fillStyle = '#545454';
                break;
            case 1:
                ctx.lineWidth = 1;
                ctx.strokeStyle = '#ffffff';
                ctx.fillStyle = '#616060';
                break;
            case 2:
                ctx.lineWidth = 1;
                ctx.strokeStyle = '#ffffff';
                ctx.fillStyle = '#706f6f';
                break;
        }
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
}

function drawGreySquare(px,py){
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#ffffff';
    ctx.fillStyle = '#464646';
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