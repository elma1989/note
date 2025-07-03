import { getSingleNote } from "./templates.js";

let notes = [];

function loadStorage() {
    const storeNotes = JSON.parse(localStorage.getItem('notes'));
    if (storeNotes != null) notes = storeNotes;
}

function saveStorage() {
    localStorage.setItem('notes', JSON.stringify(notes));
}

function getUserInput() {
    const refInput = document.querySelectorAll('input[type=text]');
    notes.push({
        noteName: refInput[0].value,
        noteContent: refInput[1].value
    });
    saveStorage();
}

function init() {
    document.forms[0].addEventListener('submit', (e) => {
        e.preventDefault();
        getUserInput();
    });
    loadStorage();
    renderNotes();
}

function renderNotes() {
    const refUls = document.querySelectorAll('ul');
    refUls.forEach(ul => {
        ul.innerHTML = '';
    });
    notes.forEach(note => {
        refUls[0].innerHTML += getSingleNote(note.noteName, note.noteContent);
    })
}

init();