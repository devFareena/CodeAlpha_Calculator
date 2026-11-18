const display = document.getElementById("display");

function appendToDisplay(input){
    if (display.value === "Error") display.value = "";
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    if (display.value === "") return;
    try{
        const result = eval(display.value);
        display.value = Number.isFinite(result) ? result : "Error";
    }
    catch(error){
        display.value = "Error";
    }
}