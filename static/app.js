let notes = [];

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
    })
}

init();