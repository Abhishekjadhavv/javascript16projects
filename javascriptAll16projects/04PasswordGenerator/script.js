// ---- select Element from html -----
const settings = document.querySelector('.settings'),
    PasswordLength = document.querySelector('#length'),
    uppercase = settings.querySelector('#uppercase'),
    lowercase = settings.querySelector('#lowercase'),
    numbers = settings.querySelector('#numbers'),
    symbols = settings.querySelector('#symbols');

const result = document.querySelector("#result");
const generateBtn = document.querySelector('#generate');
const resultContainer = document.querySelector(".result-container");

// ----- strings ----
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const PNumbers = '0123456789';
const PSymbols = '#@$%!_-?{}[]&^';

// ----- this variable will store new password ----
let newPassword = '';


// ------ generatePasswordForAllCase -------
let countFunctionCall = 1;
function generatePasswordForAllCase(arr,length) {
    for (const item of arr) {
        if(countFunctionCall<=length){
             // ---- uppercase ---
            if (item.caseName === uppercase.id) {
                newPassword += uppercaseLetters[Math.floor(Math.random() * 26)];
            }

            // ------ lowercase -----
            if (item.caseName === lowercase.id) {
                newPassword += lowercaseLetters[Math.floor(Math.random() * 26)];
            }

            // ----- Number -----
            if (item.caseName === numbers.id) {
                newPassword += PNumbers[Math.floor(Math.random() * 10)];
            }

            // ----- symbols ----
            if (item.caseName === symbols.id) {
                newPassword += PSymbols[Math.floor(Math.random() * (PSymbols.length ))];
            }
            countFunctionCall++;
        }
    }
}


// ---- Click event on generate btn ----
generateBtn.addEventListener("click", () => {
    let length = Number(PasswordLength.value);
    let upper = uppercase.checked;
    let lower = lowercase.checked;
    let PNumb = numbers.checked;
    let PSymb = symbols.checked;

    let ArrayForCase = [
        { case: upper, caseName: 'uppercase' },
        { case: lower, caseName: 'lowercase' },
        { case: PNumb, caseName: 'numbers' },
        { case: PSymb, caseName: 'symbols' }
    ].filter(ele => ele.case === true);

    if (length >= 4 && length <= 20) {
        if (ArrayForCase.length === 0) {
            alert("Please select at least one!🤷‍♂️");
        } else {

            for (let i = 0; i < length; i += ArrayForCase.length ? ArrayForCase.length : length) {
                generatePasswordForAllCase(ArrayForCase,length);
            }
            result.textContent = newPassword;
            newPassword = "";
            countFunctionCall = 1;
        }

        resultContainer.classList.add('active');
        
    } else {
        alert("Password length should be minimun 4 or maximum 20 letters!😅");
    }

});


// Copy the text inside the text field

let clipboard = document.querySelector("#clipboard");

clipboard.addEventListener("click",()=>{
    if(result.innerText){
     navigator.clipboard.writeText(result.innerText);
     alert(`Password has been copied : ${result.innerText} 😍`);
    }
});