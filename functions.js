let ioscreen = document.getElementById("ioscreen");
buttons = document.querySelectorAll("button");
let screenValue = ""; 
for(const i of buttons) {
    i.addEventListener("click", (e)=>{
        buttonText = e.target.innerHTML; 
        console.log("button text is ", buttonText);
        if(buttonText == "X"){
            buttonText = "*";
            ioscreen.value += screenValue;
        }
    })
}