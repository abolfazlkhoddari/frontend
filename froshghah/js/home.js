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

//carouser section
let csSlider = document.querySelectorAll('.crouser .slider img')
let csLink = document.querySelectorAll(".crouserSection .crouser .nav-link")
let csBar = document.querySelectorAll(".crouser .overlays .bar")
let maxZindex = csSlider.length;
let easeInOutQuart = "cubic-bezier(0.77, 0, 0.175, 1)";
csSlider[0].classList.add('active')
csLink[0].classList.add('showli')

csLink.forEach((link , index)  => {
    csBar[index].style.zIndex = `${maxZindex - index}`

    //link chenenge
    link.addEventListener('click' , ()=>{
        csLink.forEach(links => {
            links.classList.remove('showli')
        });
        link.classList.add('showli')
    
        //slider chenge
        let curentSlide = document.querySelector(".crouser .slider img.active")
        let slideFideOute = curentSlide.animate(
            [
                {transform:"translateX(0)" , opacity:1},
                {transform:'translateX(5%)' , opacity:0}],
        {
            duration:600,
            easing: "ease-in",
            fill: "forwards"
        })
        slideFideOute.onfinish = ()=>{
            csSlider.forEach(slide =>{ slide.classList.remove('active')})
                let activeSlide = csSlider[index];
                activeSlide.classList.add('active')
                activeSlide.animate(
                    [ {transform: 'translateX(-5%)' , opacity:0} ,
                    {transform : 'translateX(0)' , opacity:1 }],
                    {
                        duration: 600, easing: "ease-out", fill: "forwards"
                    }
                )

            }
            //overlays
            maxZindex += 1
            let activeBar = csBar[index]
            activeBar.style.zIndex =`${maxZindex}`
            activeBar.animate(
                [
                    {transform:'scaleX(0)'},
                    {transform:'scaleX(1)'}
                ],
                {
                    duration:1200,
                    fill:'forwards',   
                    easing: easeInOutQuart                  
                }
            )

    })
})
