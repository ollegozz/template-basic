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


const userList = document.querySelector('.request__body_list')
const filter = document.querySelector('.request__body_input_filter')
let USERS = []

filter.addEventListener('input',(e) => {
    // const {value} = e.target
    const value = e.target.value.toLowerCase()
    const filteredUsers = USERS.filter((user) => {
        return user.name.toLowerCase().includes(value)
    })
    render(filteredUsers)
})

async function start() {
    const url = 'https://jsonplaceholder.typicode.com/users'

    try {
        userList.innerHTML = 'Loading ...'
        const response = await fetch(url)
        const data = await response.json()
        USERS = await data
        render(data)
    } catch (err) {
        userList.style.color = 'red'
        userList.innerHTML = 'Failed to fetch'        
    }
}

function render(users = []) {
    if (users.length === 0) {
        userList.style.color = 'red'
        userList.innerHTML = 'No matched user!'  
    } else {
        const html = users.map(toHtml).join('') //убираю зяпятую
        userList.innerHTML = html
    }
    
}

function toHtml(user) {
    return `
    <div class="request__body_list_item">${user.name}</div>
    `
}


start()

const title = document.querySelector('.request__body_title')

function getRandomColor() {
    
    let arrChar = []
    let titleText = title.innerHTML      

    for (let char of titleText) {         

        function generateColor() {
            return '#' + Math.floor(Math.random() * 16777215).toString(16)
        }
        const colorChar = generateColor()

        char = `<span style=\'color: ${colorChar}\'>${char}</span>`       
        arrChar.push(char)
    }

    title.innerHTML = arrChar.join('')
}



// getRandomColor()

title.addEventListener('mousemove', () => {
        title.innerHTML = 'Список пользователей'
        getRandomColor()       
})

title.addEventListener('mousemove', () => {
    title.innerHTML = 'Список пользователей'
    getRandomColor()
    setTimeout(() => {
        title.innerHTML = 'Список пользователей'
        
    },500)
})
