import { getSingleNote, getSingleArchiveNote, getSingleTrashNote } from "./templates.js";

let notes = [];
let archive = [];
let trashes = [];

// #region Mangement functions
function loadStorage() {
    const storeNotes = JSON.parse(localStorage.getItem('notes'));
    const archievedNotes = JSON.parse(localStorage.getItem('archive'));
    const trashedNotes = JSON.parse(localStorage.getItem('trashes'));

    if (storeNotes != null) notes = storeNotes;
    if (archievedNotes != null) archive = archievedNotes;
    if (trashedNotes != null) trashes = trashedNotes;
}

function saveStorage() {
    localStorage.setItem('notes', JSON.stringify(notes));
    localStorage.setItem('archive', JSON.stringify(archive));
    localStorage.setItem('trashes', JSON.stringify(trashes));
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
    // Notes
    notes.forEach(note => {
        refUls[0].innerHTML += getSingleNote(note.noteName, note.noteContent);
    });
    //Archived Notes
    archive.forEach (note => {
        refUls[1].innerHTML += getSingleArchiveNote(note.noteName, note.noteContent);
    });
    //Trahed Notes
    trashes.forEach (note => {
        refUls[2].innerHTML += getSingleTrashNote(note.noteName, note.noteContent);
    });
    addAllEventlisteners();
}

function addAllEventlisteners() {
    // Archive noraml Note
    document.querySelectorAll('.saved-notes').forEach((saveNote, noteIndex) => {
        saveNote.addEventListener('click', () => {
            archiveNote(noteIndex);
        });
    });
    // unarchive Note
    document.querySelectorAll('.unarchive-notes').forEach((note, noteIndex) => {
        note.addEventListener('click', () => {
            unarchiveNote(noteIndex);
        });
    });
    // trash noraal Note
    document.querySelectorAll('.note-del').forEach((note, noteIndex) => {
        note.addEventListener('click', () => {
            trashNote(noteIndex);
        });
    });
}
// #endregion
// #region NoteOptions
function archiveNote(noteIndex) {
    const archievedNotes = notes.splice(noteIndex, 1);
    archive.push(archievedNotes[0]);
    saveStorage();
    renderNotes();
}

function unarchiveNote(noteIndex) {
    const unarchiedNotes = archive.splice(noteIndex, 1);
    notes.push(unarchiedNotes[0]);
    saveStorage();
    renderNotes();
}

function trashNote(noteIndex) {
    const trashedNotes = notes.splice(noteIndex, 1);
    trashes.push(trashedNotes[0]);
    saveStorage();
    renderNotes();
}
// #endregion
init();