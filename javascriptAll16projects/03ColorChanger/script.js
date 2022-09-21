const container = document.querySelector(".container"),
canvas = container.querySelector("#canvas"),
button = container.querySelector("#button");



function colorChanger(){
    let code = "0123456789ABCDEF";
    let newCode = "#";

    for(let i = 1;i<=6;i++){
        newCode = newCode + (code[Math.floor(Math.random() * 15)]);
    }

    return newCode;
}

button.addEventListener("click",()=>{
    canvas.style. backgroundColor = colorChanger();
});
