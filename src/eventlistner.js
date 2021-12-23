const Event = require("./class/Event");

let tashbtn = document.getElementById('tashBtn')
let projectBtn = document.getElementById('projectBtn')

let event = new Event()

// Add Event To "Tash and Project Btn"
projectBtn.addEventListener('click',event.createProject)
tashbtn.addEventListener('click',event.createTach)

// Add Event To edit btn for tach
let editTach = document.getElementsByClassName('editTach');

for (var i = 0; i < editTach.length; i++) {
    editTach[i].addEventListener('click',event.editTach);
}

// Load Project tash in reload page
event.tachLoad();
event.projectLoad();