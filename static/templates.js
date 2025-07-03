export function getSingleNote(name, content) {
    return /*html*/`
        <li>${name} - ${content}<button class="saved-notes"><img src="assets/icons/save_blue.svg"></button></li>
    `
}