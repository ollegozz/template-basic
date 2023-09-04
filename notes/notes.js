function showBurger() {
    const iconMenu = document.querySelector('.icon-menu');
    const menuBody = document.querySelector('.menu__body');
    const button = document.querySelector('.header__button');

    iconMenu.addEventListener('click', function () {
        button.classList.toggle('active-button');
        iconMenu.classList.toggle('icon-menu');
        iconMenu.classList.toggle('close-icon-menu');
        menuBody.classList.toggle('active');
        menuBody.classList.toggle('animOpen');
        // menuBody.classList.toggle('animClose');
    })
}

showBurger()

const noteTitle = document.getElementById('notes-title')
const createBtn = document.querySelector('.notes__btn')
const notesList = document.querySelector('.notes__list')

const notes = ['Первая задача', 'Вторая задача', 'asdad']

function renderNotes() {
    // for (let i = 0; i < notes.length; i++) {
    //     notesList.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))
    // }
    for (let note of notes) {
        notesList.insertAdjacentHTML('beforeend', getNoteTemplate(note))
    }
}

createBtn.onclick = function () {
    // notesList.innerHTML = ``
    if (noteTitle.value) {
        notesList.insertAdjacentHTML('beforeend', getNoteTemplate(noteTitle.value))
        noteTitle.value = ''
    } else return

}

function getNoteTemplate(title) {
    return `
        <div class="notes__list-body">
            <div class="notes__list-input">
                <div class="notes__list-input_text">${title}</div>
            </div>
            <div>
                <button class="notes__list-button-toggle">V</button>
                <button class="notes__list-button-remove">X</button>
            </div>
        </div>  
    `
}

renderNotes()