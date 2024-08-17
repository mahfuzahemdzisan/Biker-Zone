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

/* Frequently Asked Questions - FAQ Section */

const accordions = document.querySelectorAll('.faq-card')

accordions.forEach(faq => {
    const answer = faq.querySelector(".faq-answer")
    const icon = faq.querySelector(".faq-icon")
    const iconUp = faq.querySelector(".icon-up")
    const iconDown = faq.querySelector(".icon-down")

    faq.addEventListener('click', () => {
        icon.classList.toggle('active')

        if(icon.classList.contains('active')){
            answer.style.maxHeight = answer.scrollHeight + 'px'
        }
        else{
            answer.style.maxHeight = null
        }
    })
})