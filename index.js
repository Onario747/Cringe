const menuBtn = document.querySelector('.menubtn')
const navLinks = document.querySelector('.navlinks')
const navBar = document.querySelector('.navbar')


menuBtn.addEventListener('click',() => {
    navLinks.classList.toggle('active')
})

window.onscroll = () => {
    navBar.classList.remove('active')
}
