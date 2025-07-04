export function getSingleNote(name, content) {
    return /*html*/`
        <li>${name} - ${content}<button class="notes-btn saved-notes"><img src="assets/icons/save_blue.svg"></button></li>
    `
}

export function getSingleArchiveNote(name, content) {
    return /*html*/`
        <li>${name} - ${content}<button class="notes-btn unarchive-notes"><img src="assets/icons/uparrow_blue.svg"></button></li>
    `
}