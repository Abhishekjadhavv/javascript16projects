const form = document.querySelector(".form"),
    inputBox = form.querySelector('.form input'),
    btn = form.querySelector('.btn');

const noteContent = document.querySelector(".note-content"),
noData =  noteContent.querySelector(".noData");  

const alertMsg = document.querySelector(".alert");



let storeNotes = [];
let getData;


// ----- updateNote ----

function updateNote(index){
    let newNote = prompt('update Note',storeNotes[index]);
    if(newNote !== null){
       storeNotes[index] = newNote;
       localStorage.setItem("note",JSON.stringify(storeNotes));
       showData();
    }
}


// ----- delete data from localStorage ---
function deleteNote(index){
   let con = confirm('Are you sure you want to delete this note!');
   if(con){
       storeNotes.splice(index,1);
       localStorage.setItem("note",JSON.stringify(storeNotes));
       showData();
   } 
}


// -----  Show Data -----
function showData(){
    let sql = ""; 
    getData = localStorage.getItem("note");

    if(getData === null){
        noteContent.innerHTML = `<div class="noData">
                                    <p>No data available</p>
                                </div>` 
    }else{
        storeNotes = JSON.parse(getData);
        storeNotes.forEach((element,index)=>{
             sql += `<div class="Note flex space-between flex-wrap gap">
                            <div class="noteContent">
                                <p class="noteText">${element}</p>
                            </div>
                            <div class="action flex gap">
                                <i class='bx bxs-edit' onclick=updateNote(${index})></i>
                                <i class='bx bx-trash-alt' onclick=deleteNote(${index})></i>
                            </div>
                        </div>`;
            noteContent.innerHTML = sql;            
        }) 
    }

    if(storeNotes.length === 0)
    {    
       noteContent.innerHTML = `<div class="noData">
                                    <p>No data available</p>
                                </div>` 
    }
}
showData();
// ------- Add Data into the localStorage -----
function AddData() {
    getData = localStorage.getItem("note");
    if(getData === null){
       storeNotes = [];
    }else
    {
        storeNotes = JSON.parse(getData);
    }
    storeNotes.push(inputBox.value);
    localStorage.setItem("note",JSON.stringify(storeNotes));
    showData();

    alertMsg.classList.add("active");
    setTimeout(()=>{     
        alertMsg.classList.remove("active");
    },3000)

  form.reset();  
}



btn.addEventListener("click", (e) => {
    e.preventDefault();
    if(inputBox.value !== ""){
        AddData();
    }
});


