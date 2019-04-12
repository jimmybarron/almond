const transBg = document.querySelector('.transBg')
const crossBoards = document.querySelector('.crossBoards')
const cta = document.querySelector('.cta')
const heroImage = document.querySelector('#heroImage')

crossBoards.style.opacity = 0;

let carouselIndex = 1
const carouselImage1 = './img/secretMenu.jpg'
const carouselImage2 = './img/flags.jpg'

const transAnim = new TimelineMax ({
    paused: true,

    //loops the transistion animation for debugging purposes

    // onComplete:function() {
    //     this.restart()}
})

transAnim
        //position and skew orange box
        .to(transBg, 0, {
            visibility: 'visible',
            height: '330%',
            x: 1000,
            transformOrigin: '50% 30%',
            ease: Power2.easeInOut,
        })

        //move in from the left and fade in

        .to(transBg, .3, {
            x: -1200,
            opacity: 1,
            ease: Power2.easeInOut,
        })

        //turn on svg and move

        .to(crossBoards, 0, {
            visibility: 'visible',
            opacity: 0,
            scale: 1,
        })

        .to(crossBoards, .5, {
            opacity: 1,
            scale: 1.4,
            ease: Power2.easeOut,
        })

        .to(crossBoards,.5, {
            opacity: 0,
            scale: 1,
            ease: Power2.easeIn,
        })

        //move colored background out
        
        .to(transBg, .3, {
            x: -3600,
        })
        
        .to(transBg, 0, {
            visibility: 'hidden',
            ease: Power2.easeInOut,
        })

        .to(crossBoards, 0, {
            visibility: 'hidden',
         })

cta.addEventListener('click', () => {
    transAnim.invalidate().restart()

    console.log(heroImage.src)
    
    if (carouselIndex === 1) {
        console.log('secret')
        setTimeout(function() {
            heroImage.src = carouselImage2
            carouselIndex = 2
        }, 500)
    } else if (carouselIndex === 2) {
        console.log('flags')
        setTimeout(function() {
            heroImage.src = carouselImage1
            carouselIndex = 1
        }, 500)
    }
})

//triggers the transistion animation for debugging purposes

// document.addEventListener('DOMContentLoaded', () => {
//     transAnim.invalidate().restart();
// })