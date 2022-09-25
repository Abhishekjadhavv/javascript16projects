const textview = document.querySelector(".textview");

// --- clean textview ----
function clean() {
    textview.value = 0;
}


// ----- insert text into the textview---
function insert(text) {
    let num = Number(textview.value);
    let operator = ['+','-','*','/','%','.'];
    if (textview.value.length === 1 && (text === '+' || text === '-' || text === '*' || text === '/' || text === '%' || text === '.')) {
        textview.value += text
    }else if(num === 0){
       textview.value = text;
    }else{
       let lastChar = textview.value[textview.value.length-1];
        for (const item of operator) {
            if(text === item && (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/' || lastChar === '%' || lastChar === '.')){
                textview.value = textview.value.slice(0,textview.value.length-1);
                textview.value+=text;
                return;
            }
        }
        textview.value += text
    }
}


// ----- eval value ----
function equals() {
    let lastChar = textview.value[textview.value.length-1];
    if(lastChar === '+' || lastChar ==='-' || lastChar === '*'|| lastChar==='/' || lastChar==='%'||lastChar==='.'){
        textview.value = textview.value.slice(0,textview.value.length-1);
        textview.value = eval(textview.value);
    }else{
        textview.value = eval(textview.value);
    }
}

// ---- back ----
function back(){
   let str = textview.value; 
   textview.value = str.slice(0,str.length-1);
   textview.value.length === 0 ?  textview.value = 0: textview.value;
}