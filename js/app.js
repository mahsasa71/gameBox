const $ = document
const surface = $.querySelector('.surface')
const car = $.querySelector('.car')
const carImg = $.querySelector('.car img')

const gifts = $.querySelectorAll('.gift')

let isLightOn = true

window.addEventListener('keypress', (event) => {
    if (event.code === 'Enter') {
        surface.classList.toggle('moveRight')
        car.classList.toggle('carTopBottom')
    }
    if (event.code === 'Space') {
        carImg.setAttribute('src', isLightOn ? 'images/Img_06.png' : 'images/Img_05.png')
        isLightOn = !isLightOn
    }
})


setTimeout(() => {
    gifts.forEach(gift => {
        gift.classList.add('show')  
    })
    AOS.refresh() 
}, 15000)


document.querySelector('.gift1').addEventListener('click', () => {
    window.location.href = 'question.html';
});
