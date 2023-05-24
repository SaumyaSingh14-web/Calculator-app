let ioscreen = document.getElementById("ioscreen");
buttons = document.querySelectorAll("button");
let screenValue = ""; 
for(const i of buttons) {
    i.addEventListener("click", (e)=>{
        buttonText = e.target.innerHTML; 
        console.log("button text is ", buttonText);
        // screenValue += buttonText;
        // ioscreen.value = screenValue;
        if (buttonText == "x") {
            buttonText = "*";
            screenValue += buttonText;
            ioscreen.value = screenValue;
        }
        // else if(buttonText == "C"){
        //     buttonText = ;
        //     screenValue = buttonText;
        //     ioscreen.value = screenValue;
        // }
        else if(buttonText == "CA"){
            buttonText = "";
            screenValue = buttonText;
            ioscreen.value = screenValue;
        }
        else if(buttonText == "="){
            buttonText = eval(screenValue);
            screenValue = buttonText;
            ioscreen.value = screenValue;
        }
        else{
            screenValue += buttonText;
            ioscreen.value = screenValue;
        }

    })
}