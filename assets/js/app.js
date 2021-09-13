const toggleMenuBtn = document.getElementById("toggle-menu")
const navMenu = document.getElementById('nav-menu')

toggleMenuBtn.addEventListener('click', ()=>{
    navMenu.classList.toggle('active')
})
AOS.init()