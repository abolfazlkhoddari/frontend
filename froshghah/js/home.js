const headerMenu = document.getElementById('hederMenu')
const menuBtn = document.getElementById('menuBtn')
const closeBtn = document.getElementById('closeBtn')

//header and navar
menuBtn.addEventListener('click' , ()=>{
    headerMenu.classList.add('showMenu')
})
closeBtn.addEventListener('click' , ()=>{
    headerMenu.classList.remove('showMenu')
})