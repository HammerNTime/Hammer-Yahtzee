/* -------------------------Constants------------------------- */


/* -------------------------Cached Elements------------------------- */

const dice = document.querySelector("#dice")
const dice1 = document.querySelector("#dice1")
const dice2 = document.querySelector("#dice2")
const dice3 = document.querySelector("#dice3")
const dice4 = document.querySelector("#dice4")
const dice5 = document.querySelector("#dice5")

const diceHold = document.querySelector("#dice-hold")
const rollButtonForm = document.querySelector("#roll-button-form")
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

let dice1Check, dice2Check, dice3Check, dice4Check, dice5Check, diceArray, currentRoll, currentTurn, plr1Array

const player1Obj = {
    aces: null,
    twos: null,
    threes: null,
    fours: null,
    fives: null,
    sixes: null,
}

/* -------------------------Event Listeners------------------------- */

rollButtonForm.addEventListener("click", rollNewDice)
scoreCard.addEventListener("click", scoreCardClick)
dice.addEventListener("click", diceHoldInit)


/* -------------------------Functions------------------------- */
init()
function init() {
    plr1Array = []
    currentTurn = 1
    diceReset()
    turnReset()
}


function rollNewDice() {
    if (dice1Check === -1 
    && dice2Check === -1
    && dice3Check === -1
    && dice4Check === -1
    && dice5Check === -1
    || currentRoll > 3){
        return    
    }
    rollCheck()
    if (currentRoll === "reset"){
        diceReset()
        turnReset()
        return
    }
    let roll
    
    if (dice1Check !== -1){
        roll = randomDiceRoll()
        dice1.innerText = roll
        diceArray.splice(0, 1, roll)
        
    }
    if (dice2Check !== -1){
        roll = randomDiceRoll()
        dice2.innerText = roll
        diceArray.splice(1, 1, roll)
    }
    if (dice3Check !== -1){
        roll = randomDiceRoll()
        diceArray.splice(2, 1, roll)
        dice3.innerText = roll
    }
    if (dice4Check !== -1){
        roll = randomDiceRoll()
        dice4.innerText = roll
        diceArray.splice(3, 1, roll)
    }
    if (dice5Check !== -1){
        roll = randomDiceRoll()
        dice5.innerText = roll
        diceArray.splice(4, 1, roll)
    }
    render()
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
    dice1.style.backgroundColor = "white"
    dice2.style.backgroundColor = "white"
    dice3.style.backgroundColor = "white"
    dice4.style.backgroundColor = "white"
    dice5.style.backgroundColor = "white"
    diceArray = [null, null, null, null, null]
}

function scoreCardClick(event) {
    if (event.target.parentElement === column1 
        || event.target.parentElement === column2 
        || event.target.id === "score-card"
        || event.target.id === "column-1"
        || event.target.id === "column-2"
        || event.target.id === "column-3"
        || event.target.id === "column-4"
        || event.target.id === "plr-1-name"
        || event.target.id === "plr-2-name"
        || plr1Array.includes(event.target.id)
        || event.target.innerText === "none"){
        return
    }
    else {
        plr1Array.push(event.target.id)
        console.log(plr1Array);
        diceReset()
        turnReset()
    }
    console.log(event)
}

function diceHoldInit(event) {
    if (event.target.id === "dice1"){
        dice1Check *= -1
        if (dice1Check === -1){
            dice1.style.backgroundColor = "red"
        }
        if (dice1Check === 1){
            dice1.style.backgroundColor = "white"
        }
    }
    if (event.target.id === "dice2"){
        dice2Check *= -1
        if (dice2Check === -1){
            dice2.style.backgroundColor = "red"
        }
        if (dice2Check === 1){
            dice2.style.backgroundColor = "white"
        }
    }
    if (event.target.id === "dice3"){
        dice3Check *= -1
        if (dice3Check === -1){
            dice3.style.backgroundColor = "red"
        }
        if (dice3Check === 1){
            dice3.style.backgroundColor = "white"
        }
    }
    if (event.target.id === "dice4"){
        dice4Check *= -1
        if (dice4Check === -1){
            dice4.style.backgroundColor = "red"
        }
        if (dice4Check === 1){
            dice4.style.backgroundColor = "white"
        }
    }
    if (event.target.id === "dice5"){
        dice5Check *= -1
        if (dice5Check === -1){
            dice5.style.backgroundColor = "red"
        }
        if (dice5Check === 1){
            dice5.style.backgroundColor = "white"
        }
    }
}

function turnReset() {
    currentRoll = 1
    rollButton.innerHTML = "Roll 1"
    checkPossibilities()
    turnChange()
}

function rollCheck() {
    if (currentRoll === 1) {
        rollButton.innerHTML = "Roll 2"
        currentRoll++
    }
    else if (currentRoll === 2){
        rollButton.innerHTML = "Roll 3"
        currentRoll++
    }
    else if (currentRoll === 3){
        rollButton.innerHTML = "Make Your Selection"
        currentRoll++
    }
}
function render() {
    checkPossibilities()
}

function checkPossibilities(){
    console.log('Checking!');
    checkAces()
    checkTwos()
    checkThrees()
    checkFours()
    checkFives()
    checkSixes()
}

function turnChange() {
    currentTurn *= -1
}

/* ------------------------- Game Logic ------------------------- */

function checkAces(){
    if (plr1Array.includes("aces-1")){
        aces1.style.backgroundColor = "#ededed"
        return
    }
    let filteredNumsArray = []
    let total
    if (diceArray.includes(1)){
        aces1.style.backgroundColor = "#42f581"
        diceArray.forEach(num => {
            if (num === 1){
                filteredNumsArray.push(num)
            }      
        })
       total = filteredNumsArray.reduce((acc, currentnum) => acc + currentnum);  
       aces1.innerText = total
    } else {
        aces1.style.backgroundColor = "white"
        aces1.innerText = "none"
    }
    if (!diceArray.includes(1) && currentRoll === 4){
        aces1.style.backgroundColor = "yellow"
        aces1.innerText = 0

    }
}
function checkTwos(){
    if (plr1Array.includes("twos-1")){
        twos1.style.backgroundColor = "#ededed"
        return
    }
    let filteredNumsArray = []
    let total
    if (diceArray.includes(2)){
        twos1.style.backgroundColor = "#42f581"
        diceArray.forEach(num => {
            if (num === 2){
                filteredNumsArray.push(num)
            }      
        })
       total = filteredNumsArray.reduce((acc, currentnum) => acc + currentnum);  
       twos1.innerText = total
    } else {
        twos1.style.backgroundColor = "white"
        twos1.innerText = "none"
    }
    if (!diceArray.includes(2) && currentRoll === 4){
        twos1.style.backgroundColor = "yellow"
        twos1.innerText = 0

    }
}
function checkThrees(){
    if (plr1Array.includes("threes-1")){
        threes1.style.backgroundColor = "#ededed"
        return
    }
    let filteredNumsArray = []
    let total
    if (diceArray.includes(3)){
        threes1.style.backgroundColor = "#42f581"
        diceArray.forEach(num => {
            if (num === 3){
                filteredNumsArray.push(num)
            }      
        })
       total = filteredNumsArray.reduce((acc, currentnum) => acc + currentnum);  
       threes1.innerText = total
    } else {
        threes1.style.backgroundColor = "white"
        threes1.innerText = "none"
    }
    if (!diceArray.includes(3) && currentRoll === 4){
        threes1.style.backgroundColor = "yellow"
        threes1.innerText = 0

    }
}
function checkFours(){
    if (plr1Array.includes("fours-1")){
        fours1.style.backgroundColor = "#ededed"
        return
    }
    let filteredNumsArray = []
    let total
    if (diceArray.includes(4)){
        fours1.style.backgroundColor = "#42f581"
        diceArray.forEach(num => {
            if (num === 4){
                filteredNumsArray.push(num)
            }      
        })
       total = filteredNumsArray.reduce((acc, currentnum) => acc + currentnum);  
       fours1.innerText = total
    } else {
        fours1.style.backgroundColor = "white"
        fours1.innerText = "none"
    }
    if (!diceArray.includes(4) && currentRoll === 4){
        fours1.style.backgroundColor = "yellow"
        fours1.innerText = 0

    }
}
function checkFives(){
    if (plr1Array.includes("fives-1")){
        fives1.style.backgroundColor = "#ededed"
        return
    }
    let filteredNumsArray = []
    let total
    if (diceArray.includes(5)){
        fives1.style.backgroundColor = "#42f581"
        diceArray.forEach(num => {
            if (num === 5){
                filteredNumsArray.push(num)
            }      
        })
       total = filteredNumsArray.reduce((acc, currentnum) => acc + currentnum);  
       fives1.innerText = total
    } else {
        fives1.style.backgroundColor = "white"
        fives1.innerText = "none"
    }
    if (!diceArray.includes(5) && currentRoll === 4){
        fives1.style.backgroundColor = "yellow"
        fives1.innerText = 0

    }
}
function checkSixes(){
    if (plr1Array.includes("sixes-1")){
        sixes1.style.backgroundColor = "#ededed"
        return
    }
    let filteredNumsArray = []
    let total
    if (diceArray.includes(6)){
        sixes1.style.backgroundColor = "#42f581"
        diceArray.forEach(num => {
            if (num === 6){
                filteredNumsArray.push(num)
            }      
        })
       total = filteredNumsArray.reduce((acc, currentnum) => acc + currentnum);  
       sixes1.innerText = total
    } else {
        sixes1.style.backgroundColor = "white"
        sixes1.innerText = "none"
    }
    if (!diceArray.includes(6) && currentRoll === 4){
        sixes1.style.backgroundColor = "yellow"
        sixes1.innerText = 0

    }
}