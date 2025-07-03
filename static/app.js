import { getSingleNote } from "./templates.js";

let notes = [];
let archive = [];

function loadStorage() {
    const storeNotes = JSON.parse(localStorage.getItem('notes'));
    if (storeNotes != null) notes = storeNotes;
}

function saveStorage() {
    localStorage.setItem('notes', JSON.stringify(notes));
    localStorage.setItem('archive', JSON.stringify(archive));
}

function getUserInput() {
    const refInput = document.querySelectorAll('input[type=text]');
    
    if (refInput[0].value.length > 0 && refInput[1].value.length > 0) {
        notes.push({
            noteName: refInput[0].value,
            noteContent: refInput[1].value
        });
        saveStorage();
        renderNotes();
    }
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
    document.querySelectorAll('.saved-notes').forEach((saveNote, noteIndex) => {
        saveNote.addEventListener('click', () => {
            archiveNote(noteIndex);
        });
    });
}

function archiveNote(noteIndex) {
    const archievedNotes = notes.splice(noteIndex, 1);
    archive.push(archievedNotes[0]);
    saveStorage();
}

init();