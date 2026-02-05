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
//carouser slider


const slider = document.getElementById('slider')
function activate(e){
    const items = document.querySelectorAll('.sliderItem')
    e.target.matches('.next') && slider.append(items[0])
    e.target.matches('.prev') && slider.prepend(items[items.length - 1]);


}
document.addEventListener('click', activate)