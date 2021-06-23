/* -------------------------Constants------------------------- */


/* -------------------------Cached Elements------------------------- */

const dice = document.querySelector("#dice")
const dice1 = document.querySelector("#dice1")
const dice2 = document.querySelector("#dice2")
const dice3 = document.querySelector("#dice3")
const dice4 = document.querySelector("#dice4")
const dice5 = document.querySelector("#dice5")

const diceHold = document.querySelector("#dice-hold")
const rollButton = document.querySelector("#roll-button")
const scoreCard = document.querySelector("#score-card")
const column1 = document.querySelector("#column-1")
const column2 = document.querySelector("#column-2")
const column3 = document.querySelector("#column-3")
const column4 = document.querySelector("#column-4")
const plr1Name = document.querySelector("#plr-1-name")
const plr2Name = document.querySelector("#plr-2-name")
const aces1 = document.querySelector("#aces-1")
const aces2 = document.querySelector("#aces-2")
const twos1 = document.querySelector("#twos-1")
const twos2 = document.querySelector("#twos-2")
const threes1 = document.querySelector("#threes-1")
const threes2 = document.querySelector("#threes-2")
const fours1 = document.querySelector("#fours-1")
const fours2 = document.querySelector("#fours-2")
const fives1 = document.querySelector("#fives-1")
const fives2 = document.querySelector("#fives-2")
const sixes1 = document.querySelector("#sixes-1")
const sixes2 = document.querySelector("#sixes-2")
const bonus1 = document.querySelector("#bonus-1")
const bonus2 = document.querySelector("#bonus-2")
const upperTotal1 = document.querySelector("#upper-total-1")
const upperTotal2 = document.querySelector("#upper-total-2")

console.log(plr1Name)

/*---------------------------- Variables (state) ----------------------------*/

let dice1Check, dice2Check, dice3Check, dice4Check, dice5Check


/* -------------------------Event Listeners------------------------- */

rollButton.addEventListener("click", rollNewDice)
scoreCard.addEventListener("click", addScore)


/* -------------------------Functions------------------------- */

function init() {
    diceReset()
}



function rollNewDice() {
    let roll
    if (dice1Check !== -1){
        roll = randomDiceRoll()
        dice1.innerText = roll
    }
    if (dice2Check !== -1){
        roll = randomDiceRoll()
        dice2.innerText = roll
    }
    if (dice3Check !== -1){
        roll = randomDiceRoll()
        dice3.innerText = roll
    }
    if (dice4Check !== -1){
        roll = randomDiceRoll()
        dice4.innerText = roll
    }
    if (dice5Check !== -1){
        roll = randomDiceRoll()
        dice5.innerText = roll
    }
}


const randomDiceRoll = () => {
   return parseInt(Math.floor((Math.random() * 6) + 1))
} 

function diceReset() {
    dice1Check = 1
    dice2Check = 1
    dice3Check = 1
    dice4Check = 1
    dice5Check = 1
}

function addScore(event) {
    if (event.target.parentElement === column1 
        || event.target.parentElement === column2 
        || event.target.id === "score-card"
        || event.target.id === "column-1"
        || event.target.id === "column-2"
        || event.target.id === "column-3"
        || event.target.id === "column-4"){
        return
    }
    else {
        event.target.innerText = dice1.innerText
    }
    console.log(event)
}