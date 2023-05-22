const menuBtn = document.getElementById('menuBtn');
const drawer = document.querySelector('.drawerMenu');
const back = document.querySelector('.backMenu');
const slider = document.querySelector('.sliderContainer');
const sildes = document.querySelectorAll('.slide')
const btnSliderLeft = document.querySelector('.btnLeft')
const btnSliderRight = document.querySelector('.btnRight')
const dots = document.querySelector('.dots')
let sliderTimer = null
sildes.forEach(item =>{
    const newDot = document.createElement('div')
    newDot.classList.add('dot')
    dots.appendChild(newDot)
    
})
const sliderDots = document.querySelectorAll('.dot')
let currentSlider = 0;


menuBtn.addEventListener('click', ()=>{
    drawer.classList.add('show')
    back.classList.add('show')
})

back.addEventListener('click', ()=>{
    drawer.classList.remove('show')
    back.classList.remove('show')
})

function nextSlide(){
    currentSlider+=1;
    if(currentSlider >= sildes.length)
        currentSlider=0
    initSlider()
}
function prevSlide(){
    currentSlider-=1;
    if(currentSlider < 0)
        currentSlider = sildes.length-1
    initSlider()
}

function initSlider(){
    clearInterval(sliderTimer)
    sliderTimer = setInterval(nextSlide,5000)

    sildes.forEach(item =>{
        item.style.opacity = '0';
    })

    sliderDots.forEach(item =>{
        item.classList.remove('active')
    })
    

    sildes[currentSlider].style.opacity = '1'
    sliderDots[currentSlider].classList.add('active')

}
btnSliderLeft.addEventListener('click',prevSlide)
btnSliderRight.addEventListener('click', nextSlide)

sliderDots.forEach((item, index) =>{
    item.addEventListener('click', ()=>{
        currentSlider = index
        initSlider()
    })
})

initSlider()


