
function drawUI(uiInfo){
    drawPossibleActions(uiInfo.possibleActions);
    drawRotateButtons(uiInfo.rotate)
    drawEndTurn(uiInfo.endTurn);
    drawHexBoard(uiInfo.hexBoards);
    drawSpellList(uiInfo.spellList);
    drawLines();
}

function drawPossibleActions(possibleActions){
    for(let possibleActionIndex = 0; possibleActionIndex < possibleActions.length; possibleActionIndex++){
        hoveredActionIndex = possibleActions[possibleActionIndex].hoveredActionIndex;
        for(let x = 0; x<possibleActions[possibleActionIndex].Actions.length; x += 1){
            ctx.beginPath();
            if(hoveredActionIndex == x){
                ctx.lineWidth = 2;
                ctx.strokeStyle = '#ffffff';
            }else{
                ctx.lineWidth = 1;
                ctx.strokeStyle = '#b4b4b4';
            }
            ctx.rect(possibleActions[possibleActionIndex].Location[0], possibleActions[possibleActionIndex].Location[1] + (possibleActions[possibleActionIndex].Height * x), possibleActions[possibleActionIndex].Width, possibleActions[possibleActionIndex].Height);
            ctx.stroke();
            ctx.fillStyle = "#ffffff";
            ctx.font = "15px Garamond";
            ctx.fillText(possibleActions[possibleActionIndex].Actions[x].name, possibleActions[possibleActionIndex].Location[0] + possibleActions[possibleActionIndex].Width/8, possibleActions[possibleActionIndex].Location[1] + (possibleActions[possibleActionIndex].Height * x)+possibleActions[possibleActionIndex].Height/1.5);
        }
        ctx.drawImage(uiSpriteSheet[0], possibleActions[possibleActionIndex].Location[0]-28, possibleActions[possibleActionIndex].Location[1]-15);
        ctx.drawImage(uiSpriteSheet[1], possibleActions[possibleActionIndex].Location[0]-28, possibleActions[possibleActionIndex].Location[1] - 8 + (possibleActions[possibleActionIndex].Actions.length)*possibleActions[possibleActionIndex].Height);
    }
}

function drawRotateButtons(rotate){
    //Draw Left pointing triangle
    ctx.beginPath();
    if(rotate.hoveredTriangleIndex == 0){
        ctx.fillStyle = "#ffffff";
    }else{
        ctx.fillStyle = "#b4b4b4";
    }
    ctx.moveTo(rotate.Location[0] - rotate.Width - rotate.Offset/2, rotate.Location[1]);
    ctx.lineTo(rotate.Location[0] - rotate.Offset/2, rotate.Location[1] + rotate.Height/2);
    ctx.lineTo(rotate.Location[0] - rotate.Offset/2, rotate.Location[1] - rotate.Height/2);
    ctx.fill();
    ctx.closePath();

    //Draw Right pointing triangle
    ctx.beginPath();
    if(rotate.hoveredTriangleIndex == 1){
        ctx.fillStyle = "#ffffff";
    }else{
        ctx.fillStyle = "#b4b4b4";
    }
    ctx.moveTo(rotate.Location[0] + rotate.Width + rotate.Offset/2, rotate.Location[1]);
    ctx.lineTo(rotate.Location[0] + rotate.Offset/2, rotate.Location[1] + rotate.Height/2);
    ctx.lineTo(rotate.Location[0] + rotate.Offset/2, rotate.Location[1] - rotate.Height/2);
    ctx.fill();
    ctx.closePath();
}

function drawEndTurn(endTurn){
    ctx.beginPath();
    if(endTurn.Hovered == true){
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#ffffff';
    }else{
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#b4b4b4';
    }
    ctx.rect(endTurn.Location[0], endTurn.Location[1], endTurn.Width, endTurn.Height);
    ctx.stroke();
    ctx.fillStyle = "#ffffff";
    ctx.font = "15px Garamond";
    ctx.fillText("End Turn", endTurn.Location[0] + endTurn.Width/10, endTurn.Location[1] + endTurn.Height/1.5);
    ctx.lineWidth = 2;
    ctx.closePath();

    ctx.drawImage(scrollSidesSprites[0], endTurn.Location[0]-7, endTurn.Location[1]-9);
    ctx.drawImage(scrollSidesSprites[1], endTurn.Location[0] - 7 + endTurn.Width, endTurn.Location[1]-9);
}

function drawHexBoard(hexBoards){
    for(let hexBoardIndex = 0; hexBoardIndex < hexBoards.length; hexBoardIndex++){
        for(let nodeIndex = 0; nodeIndex < hexBoards[hexBoardIndex].nodes.length; nodeIndex++){
            drawNode(hexBoards[hexBoardIndex].nodes[nodeIndex], hexBoards[hexBoardIndex])
        }
    }
}

function drawNode(node, hexBoard){
    px = node.coordinate[0];
    py = node.coordinate[1];
    ctx.lineWidth = 1;

    ctx.drawImage(icons[node.index], px-8, py-8);

    if(node.status == "selected"){
        ctx.beginPath();
        ctx.strokeStyle = "#464646";
        ctx.arc(px, py, node.pointSizeLarge, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();
    }else if(node.activated == "true"){
        ctx.beginPath();
        ctx.strokeStyle = "#ffffff";
        ctx.arc(px, py, node.pointSizeLarge, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();
    }

    if(node.hovered){
        ctx.beginPath();
        ctx.strokeStyle = "#464646";
        ctx.arc(px, py, node.pointSizeLarge, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();
    }

    for(let index = 0; index < node.neighbours.length; index++){
        if(node.neighbours[index] > node.index){
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.strokeStyle = "#b4b4b4";
            ctx.setLineDash([3, 9]);
            ctx.lineTo(hexBoard.nodes[node.neighbours[index]].coordinate[0], hexBoard.nodes[node.neighbours[index]].coordinate[1]);
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.closePath();
        }
    }

    for(let index = 0; index < node.links.length; index++){
        if(node.links[index] > node.index){
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.strokeStyle = "#ffffff";
            ctx.lineTo(hexBoard.nodes[node.links[index]].coordinate[0], hexBoard.nodes[node.links[index]].coordinate[1]);
            ctx.stroke();
            ctx.closePath();
        }
    }
}

function drawSpellList(spellList){
    ctx.beginPath();
    px = spellList.Location[0] + spellListWidth/2+13+60;
    py =  spellList.Location[1] + 30;
    ctx.font = "15px Garamond Bold";
    ctx.fillText("A D M O", px, py);
    px = spellList.Location[0] + spellListWidth/2+10;
    py =  spellList.Location[1] + 35;
    //Draw Options
    for(let iconIndex = 0; iconIndex < icons.length; iconIndex++){
        ctx.drawImage(icons[iconIndex], px+iconIndex*15, py);
    }
    //Draw Spells
    py =  spellList.Location[1] + 60;
    ctx.strokeStyle = "#ffffff"
    for(let count = 0; count < spellList.entriesPerPage; count ++){
        ctx.rect(spellList.Location[0] + spellListWidth/2, py + count*spellList.spellListEntryHeight, spellList.Width/2, spellList.spellListEntryHeight);
        ctx.font = "15px Garamond Bold";
        ctx.fillText(spellList.spells[count + spellList.pageNumber].name, px, py + count*spellList.spellListEntryHeight + spellList.spellListEntryHeight/2,spellList.Width);

        for(costIndex = 0; costIndex < spellList.spells[count + spellList.pageNumber].cost.length; costIndex++){
            let iconIndex = 0;
            switch(spellList.spells[count + spellList.pageNumber].cost[costIndex]){
                case "Endurance":
                    iconIndex  = 0;
                    break;
                case "Spirit":
                    iconIndex = 1;
                    break;
                case "Air":
                    iconIndex = 2;
                    break;
                case "Earth":
                    iconIndex = 3;
                    break;
                case "Unity":
                    iconIndex = 4;
                    break;
                case "Sun":
                    iconIndex = 5;
                    break;
                case "Wildcard":
                    iconIndex = 6;
                    break;
                case "Moon":
                    iconIndex = 7;
                    break;
                case "Singularity":
                    iconIndex = 8;
                    break;
                case "Fire":
                    iconIndex = 9;
                    break;
                case "Water":
                    iconIndex = 10;
                    break;
                case "Blood":
                    iconIndex = 11;
                    break;
                case "Change":
                    iconIndex = 12;
                    break;
                default:
                    continue;
            }
            ctx.drawImage(icons[iconIndex], px + spellListWidth/2 - 60 - costIndex*15, py + count*spellList.spellListEntryHeight + spellList.spellListEntryHeight/2 -8);
        }
    }
    ctx.stroke();

    ctx.drawImage(bookSprites[0], spellList.Location[0], spellList.Location[1]);

    //Draw Tool Tip
}

function drawLines(){
    ctx.beginPath();
    ctx.strokeStyle = "#ffffff"
    ctx.lineWidth = 1;

    ctx.moveTo(verticalSlice1, horizontalStart);
    ctx.lineTo(verticalSlice1, horizontalSlice2);

    ctx.moveTo(verticalSlice2, horizontalStart);
    ctx.lineTo(verticalSlice2, horizontalSlice2);

    ctx.moveTo(verticalSlice15, horizontalSlice2);
    ctx.lineTo(verticalSlice15, height);

    ctx.moveTo(verticalSlice25, horizontalSlice2);
    ctx.lineTo(verticalSlice25, height);



    ctx.moveTo(verticalStart,horizontalSlice1);
    ctx.lineTo(width, horizontalSlice1);

    ctx.moveTo(verticalStart,horizontalSlice2);
    ctx.lineTo(width, horizontalSlice2);

    ctx.moveTo(verticalSlice15,horizontalSlice3);
    ctx.lineTo(verticalSlice25, horizontalSlice3);

    ctx.moveTo(verticalStart,horizontalSlice4);
    ctx.lineTo(verticalSlice15, horizontalSlice4);

    ctx.moveTo(verticalSlice25,horizontalSlice4);
    ctx.lineTo(width, horizontalSlice4);
    

    ctx.stroke();

    ctx.closePath();
}