/* Show / Hide Nav-Menu Bar */

const menu = document.querySelector('.menu')
const openMenu = document.querySelector('.open-menu-bar')
const closeMenu = document.querySelector('.close-menu-bar')

openMenu.addEventListener('click', () => {
    menu.style.display = "inline-block"
    openMenu.style.display = "none"
    closeMenu.style.display = "inline-block"
})


closeMenu.addEventListener('click', () => {
    menu.style.display = "none"
    openMenu.style.display = "inline-block"
    closeMenu.style.display = "none"
})