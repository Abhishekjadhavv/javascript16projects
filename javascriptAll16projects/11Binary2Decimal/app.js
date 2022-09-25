const formEle = document.querySelector(".form"),
    binaryNum = formEle.querySelector("#binary"),
    btn = formEle.querySelector(".btn"),
    result = formEle.querySelector(".decimalNumber");


//  ------ This function will check number is binary or not ----   
function checkBinaryNum(num) {
    let temp = Number(num);
    while (temp) {
        let r = temp % 10;
        if (r !== 0) {
            if (r !== 1) {
                return false;
            }
        }

        temp = Math.floor(temp / 10);
    }
    return true;
}


// --- This function will return a digit ----
function returnDigit(num){
    return num % 10;
}

// ---- this function will covert Binary To Decimal----- 
function covertBinaryToDecimal() {
    let num = binaryNum.value;
    let sum = 0;
    if (checkBinaryNum(num)) {
        let n = Number(num);
        for (let i = 0; i < num.length; i++) {
          sum+= returnDigit(n) * Math.pow(2,i);
          n = Math.floor(n/10);
        }
        
        result.textContent = sum;
    } else {
        formEle.reset();
        result.textContent = sum = 0;
        alert("Please enter valid binary number!");
    }
}


btn.addEventListener("click", (e) => {
    e.preventDefault();
    covertBinaryToDecimal();
});


