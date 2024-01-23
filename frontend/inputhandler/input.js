document.addEventListener('mousedown', acceptClick);
rect = canvas.getBoundingClientRect();
clickCoordinates = [0,0]

function acceptInput(){
    return clickCoordinates;
}

function acceptClick(evt){
    clickCoordinates[0] = (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
    clickCoordinates[1] = (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
}