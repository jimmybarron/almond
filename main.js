const transBg = document.querySelector('.transBg')
const crossBoards = document.querySelector('.crossBoards')
const cta = document.querySelector('.cta')
const heroImage = document.querySelector('#heroImage')

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
            transformOrigin: '50% 100%',
            ease: Power2.easeInOut,
        })

        //move in from the left and fade in

        .to(transBg, .3, {
            x: -1200,
            opacity: 1,
            ease: Power2.easeInOut,
        })

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
    
    if (heroImage.src = './img/secretMenu.jpg') {
        setTimeout(function() {
            heroImage.src = './img/flags.jpg'
        }, 500)
    } else if (heroImage.src = './img/flags.jpg') {
        setTimeout(function() {
            heroImage.src = './img/secretMenu.jpg'
        }, 500)
    }
})

//triggers the transistion animation for debugging purposes

// document.addEventListener('DOMContentLoaded', () => {
//     transAnim.invalidate().restart();
// })