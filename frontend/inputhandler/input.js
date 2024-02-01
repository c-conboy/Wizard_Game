document.addEventListener('mousedown', acceptClick);
document.addEventListener('mousemove', acceptMove);

rect = canvas.getBoundingClientRect();
clickedFlag = false;
userInput = new Object();
userInput.mouseInformation = new Object();
userInput.mouseInformation.clickCoordinates = [0,0];
userInput.mouseInformation.click = false; 
userInput.mouseInformation.coordinates = [0,0];

function acceptInput(){
    if(clickedFlag){
        userInput.mouseInformation.click = true; 
        clickedFlag = false;
        return userInput;
    }else{
        userInput.mouseInformation.click = false; 
        return userInput;
    }
}

function acceptClick(evt){
    userInput.mouseInformation.clickCoordinates[0] = (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
    userInput.mouseInformation.clickCoordinates[1] = (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
    clickedFlag = true;
}

function acceptMove(evt){
    userInput.mouseInformation.coordinates[0] = (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
    userInput.mouseInformation.coordinates[1] = (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
}