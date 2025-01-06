const elem = document.getElementById("clock");
let startValue = elem.textContent;

async function substructValue(value) {
    value--;
    elem.textContent = value; 
    if(value == 0) {
        elem.textContent = "Time is up";
        return;
    }  
    setTimeout(substructValue,1000, value);
}

substructValue(startValue);

