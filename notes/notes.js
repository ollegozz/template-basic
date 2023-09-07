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
const btnAdd = document.querySelector('.notes__btn')

const notes = [{
    title: 'Первая задача',
    complited: false
},
{
    title: 'Вторая задача',
    complited: true

},
{
    title: 'Третья задача',
    complited: false
}]

function renderNotes() {
    notesList.innerHTML = ''
    if (notes.length === 0) {
        notesList.innerHTML = '<p>Нет заметок</p>'
    }
    for (let i = 0; i < notes.length; i++) {
        notesList.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))
    }
    // for (let note of notes) {
    //     notesList.insertAdjacentHTML('beforeend', getNoteTemplate(note))
    // }
}

createBtn.onclick = function () {
    // notesList.innerHTML = ``
    if (noteTitle.value.length === 0) {
        return
    }

    const newNote = {
        title: noteTitle.value,
        complited: false
    }

    notes.push(newNote)

    // notesList.insertAdjacentHTML('beforeend', getNoteTemplate(newNote))
    noteTitle.value = ''
    renderNotes()
}

notesList.addEventListener('click', function (e) {
    // console.log(e.target.dataset); 
    if (e.target.dataset.index) {
        const index = parseInt(e.target.dataset.index)
        const type = e.target.dataset.type

        if (type === 'toggle') {
            notes[index].complited = !notes[index].complited
        } else if (type === 'remove') {
            notes.splice(index, 1)
        }
    }
    renderNotes()
})

function getNoteTemplate(note, index) {
    return `
        <div class="notes__list-body">
            <div class="notes__list-input">
                <div class="notes__list-input_text ${note.complited && 'note-done'}">
                ${note.title}
                </div>
            </div>
            <div>
                <button 
                class="notes__list-button-toggle ${note.complited && 'button-done'}"
                data-index="${index}"
                data-type="toggle">V</button>

                <button class="notes__list-button-remove"
                data-index="${index}"
                data-type="remove">X</button>
            </div>
        </div>
    `
}

renderNotes()


function timer() {

    let mode = 'full'

    const output = document.getElementById('output')
    const fullBtn = document.getElementById('full')
    const dateBtn = document.getElementById('date')
    const timeBtn = document.getElementById('time')


    // Замыкание
    function bindMode(nameMode) {
        return function () {
            mode = nameMode
            update()
        }
    }

    fullBtn.onclick = bindMode('full')
    dateBtn.onclick = bindMode('date')
    timeBtn.onclick = bindMode('time')

    function update() {
        output.textContent = format(mode)
    }

    setInterval(update, 1000)

    // setInterval(() => {
    //     update()
    // }, 1000)

    update()

    function format(formatMode) {
        const now = new Date()

        switch (formatMode) {
            case 'time': return now.toLocaleTimeString()
            case 'date': return now.toLocaleDateString()
            case 'full': return now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
            default: return now.toLocaleTimeString()
        }
    }
}

// timer()

const obj = {
    name: 'Oleg',
    lastName: 'aff',
    age: 32,
    'age win': 2023
}


const { ['age win']: ageWin } = obj
 
// for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//         console.log(key); 
//     }
// }

const a = Object.keys(obj).map((key) => {
    // console.log(obj[key]);

    return obj[key]
})

// this
const logger = {
    keys() {
        console.log('Object keys', Object.keys(this))
    },

    keysAndValue() {
        Object.keys(this).forEach((key) => {
            console.log('Key', key)
            console.log('Value', this[key])
        })
    }
}

const bound = logger.keys.bind(obj)
// bound()



//наследование

class Human {
    isHumaa = true
    humnGreet() {
        console.log('Good');
    }
}

class Person extends Human {
    constructor(name, age) {
        super()
        this.name = name
        this.age = age
    }
    sayHello() {
         console.log('Hello', this.name);
    }
}

const person1 = new Person('Oleg', 32)

console.log(person1.isHumaa);