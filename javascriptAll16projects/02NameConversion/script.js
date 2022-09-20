const input = document.querySelector("#input");
const btn = document.querySelector(".btn");

const content = document.querySelector(".content"),
camelCase = content.querySelector(".camel-case"),
pascalCase = content.querySelector(".Pascal-case"),
snakeCase = content.querySelector(".Snake-case"),
screamingSnakeCase = content.querySelector(".Screaming-snake-case"),
kebabCase = content.querySelector(".Kebab-case"),
screamingKebabCase = content.querySelector(".Screaming-kebab-case");

// ---- camel_case -----
function camel_case(){
    let strArr = input.value.split(" ").filter((ele)=> ele!=="");    
    let newString = strArr[0].toLowerCase();
    for (const str of strArr.slice(1)) {
       newString = newString + (str[0].toUpperCase() + str.slice(1));
    }
    camelCase.textContent = newString;
}

// ----- PascalCase ----
function pascal_case(){
    let strArr = input.value.split(" ").filter((ele)=> ele!=="");    
    let newString = "";
    for (const str of strArr) {
       newString = newString + (str[0].toUpperCase() + str.slice(1));
    }
    pascalCase.textContent = newString;
}

// ---- snake_case ------
function snake_case(){
    snakeCase.textContent = input.value.split(" ").filter((ele)=> ele!=="").join('_').toLowerCase();
}

// ---- screaming_snake_case ------
function screaming_snake_case(){
    screamingSnakeCase.textContent = input.value.split(" ").filter((ele)=> ele!=="").join('_').toUpperCase();
}

// ----- kebabCase ----

function kebab_case(){
    kebabCase.textContent = input.value.split(" ").filter((ele)=> ele!=="").join('-').toLowerCase();
}

// -----  screaming_kebab_case ----
function screaming_kebab_case(){
    screamingKebabCase.textContent = input.value.split(" ").filter((ele)=> ele!=="").join('-').toUpperCase();
}

btn.addEventListener("click",()=>{
    camel_case();
    pascal_case();
    snake_case();
    screaming_snake_case();
    kebab_case();
    screaming_kebab_case();
});

