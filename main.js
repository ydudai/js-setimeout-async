let timeoutID;

function setElementColor(color) {
    let elem = document.getElementById("mydiv");
    elem.style.backgroundColor = color;
    enableDisableButton(false);
}

function enableDisableButton(isDisabled) {
    document.getElementById("change-color").disabled = isDisabled;
}

function setColorInDilay(color) {
    enableDisableButton(true);
    timeoutID = setTimeout(setElementColor, 3000, color);
    
}

function cancelOperation() {
    clearTimeout(timeoutID);
    enableDisableButton(false);
}