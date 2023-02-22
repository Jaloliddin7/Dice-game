const btnNew = document.querySelector(".btn--new")
const btnRoll = document.querySelector(".btn--roll")
const btnHold = document.querySelector(".btn--hold")


const imgDice = document.querySelector('.dice')
imgDice.style.display = 'none'

let current = 0
let activePlayer = 0
let score = [0, 0]
let gameOver = true
let audio = new Audio('dice.mp3')
let win = new Audio('win.mp3')

const activFunc = function () {
    current = 0
    document.querySelector(`#current--${activePlayer}`).textContent = current
    activePlayer = activePlayer === 0 ? 1 : 0
    document.querySelector("#current--0").textContent = current
    document.querySelector(`.player--0`).classList.toggle('player--active')
    document.querySelector(`.player--1`).classList.toggle('player--active')
}

btnRoll.addEventListener('click', () => {

    if (gameOver) {
        audio.play()
        imgDice.style.display = 'block'

        let random = Math.ceil(Math.random() * 6)
        imgDice.src = `dice-${random}.png`

        if (random !== 1) {
            current += random
            document.querySelector(`#current--${activePlayer}`).textContent = current
        } else {
            activFunc()
        }
    }

})

btnHold.addEventListener('click', () => {
    score[activePlayer] += current

    if (gameOver) {
        if (score[activePlayer] < 100) {
            document.querySelector(`#score--${activePlayer}`).textContent = score[activePlayer]
            activFunc()
        } else {
            win.play()
            document.querySelector(`#score--${activePlayer}`).textContent = score[activePlayer]
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`#name--${activePlayer}`).textContent += " Wins 🏆"
            current = 0
            document.querySelector(`#current--${activePlayer}`).textContent = current
            imgDice.style.display = 'none'
            gameOver = false
        }
    }

})




btnNew.addEventListener('click', () => {
    current = 0
    activePlayer = 0
    score = [0, 0]
    gameOver = true
    imgDice.style.display = 'none'
    document.querySelector(`#current--0`).textContent = 0
    document.querySelector(`#current--1`).textContent = 0
    document.querySelector(`#score--1`).textContent = 0
    document.querySelector(`#score--0`).textContent = 0
    document.querySelector(`.player--0`).classList.remove('player--winner')
    document.querySelector(`.player--1`).classList.remove('player--winner')
    document.querySelector(`#name--0`).textContent = `Player 1`
    document.querySelector(`#name--1`).textContent = `Player 2`
    document.querySelector(`.player--1`).classList.remove('player--active')
    document.querySelector(`.player--0`).classList.add('player--active')
})

// Get the animation element and the animate button
const winAnimation = document.getElementById('win-animation');
const animateButton = document.getElementById('animate-button');

// When the animate button is clicked, add the 'win-active' class to the animation element
animateButton.addEventListener('click', function() {
  winAnimation.classList.add('win-active');
});

  
