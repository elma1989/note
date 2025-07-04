export function getSingleNote(name, content) {
    return /*html*/`
        <li>
            ${name} - ${content}
            <button class="notes-btn saved-notes"><img src="assets/icons/save_blue.svg"></button>
            <button class="notes-btn trashed-notes note-del"><img src="assets/icons/trash_blue.svg"></button>
        </li>
    `
}

export function getSingleArchiveNote(name, content) {
    return /*html*/`
        <li>
            ${name} - ${content}
            <button class="notes-btn unarchive-notes"><img src="assets/icons/uparrow_blue.svg"></button>
            <button class="notes-btn trashed-notes archive-del"><img src="assets/icons/trash_blue.svg"></button>
        </li>
    `
}

export function getSingleTrashNote(name, content) {
    return /*html*/`
        <li>
            ${name} - ${content}
            <button class="notes-btn trashed-notes del-del"><img src="assets/icons/trash_blue.svg"></button>
        </li>
    `
}