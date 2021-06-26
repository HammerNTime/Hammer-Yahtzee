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
const threeKind1 = document.querySelector("#three-kind-1")
const threeKind2 = document.querySelector("#three-kind-2")


console.log(plr1Name)

/*---------------------------- Variables (state) ----------------------------*/

let dice1Check, dice2Check, dice3Check, dice4Check, dice5Check, diceArray, currentRoll, 
currentTurn, plr1Array, plr1Upper, plr2Upper, checkUpper, plr1Lower, plr2Lower

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
    plr2Array = []
    plr1Upper = []
    plr2Upper = []
    plr1Lower = []
    plr2Lower = []
    diceReset()
    turnReset()
    currentTurn = 1
}

/* -------------------------Click Event Functions------------------------- */

function scoreCardClick(event) {
    upperCheck = event.target.id
    if (event.target.parentElement === column1 
        || event.target.parentElement === column2 
        || event.target.id === "score-card"
        || event.target.id === "column-1"
        || event.target.id === "column-2"
        || event.target.id === "column-3"
        || event.target.id === "column-4"
        || event.target.id === "plr-1-name"
        || event.target.id === "plr-2-name"
        || event.target.innerText === ""){
        return
    }
    else if (currentTurn === 1){
        if (plr1Array.includes(event.target.id)){
            return
        } 
        else if (checkUpper === true) {
            plr1Array.push(event.target.id)
            plr1Upper.push(parseInt(event.target.innerText))
            console.log(parseInt(event.target.innerText));
            diceReset()
            turnReset()
        } else {
            plr1Array.push(event.target.id)
            plr1Lower.push(parseInt(event.target.innerText))
            console.log(parseInt(event.target.innerText));
            diceReset()
            turnReset()
        }
    } else {
        if (plr2Array.includes(event.target.id)){
            return
        } 
        else if (checkUpper === true) {
            plr2Array.push(event.target.id)
            plr2Upper.push(parseInt(event.target.innerText))
            console.log(plr2Array);
            diceReset()
            turnReset()
        } else {
            plr2Array.push(event.target.id)
            plr2Lower.push(parseInt(event.target.innerText))
            console.log(plr2Array);
            diceReset()
            turnReset()
        }
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



/* -------------------------Roll Dice Functions------------------------- */


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
    // if (currentRoll === "reset"){
    //     diceReset()
    //     turnReset()
    //     return
    // }
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

const randomDiceRoll = () => {
   return parseInt(Math.floor((Math.random() * 6) + 1))
} 


/* -------------------------Reset Functions------------------------- */


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


function turnReset() {
    currentRoll = 1
    rollButton.innerHTML = "Roll 1"
    render()
    turnChange()
}

function turnChange() {
    currentTurn *= -1
}


/* -------------------------Render Functions------------------------- */

function render() {
    checkPossibilities()
    updateTotals()
}
function checkPossibilities(){
    console.log('Checking!');
    if (currentTurn === 1){
        checkAces(plr1Array, "aces-1", aces1)
        checkTwos(plr1Array, "twos-1", twos1)
        checkThrees(plr1Array, "threes-1", threes1)
        checkFours(plr1Array, "fours-1", fours1)
        checkFives(plr1Array, "fives-1", fives1)
        checkSixes(plr1Array, "sixes-1", sixes1)
        check3Kind(plr1Array, "three-kind-1", threeKind1)
    }
    if (currentTurn === -1){
        checkAces(plr2Array, "aces-2", aces2)
        checkTwos(plr2Array, "twos-2", twos2)
        checkThrees(plr2Array, "threes-2", threes2)
        checkFours(plr2Array, "fours-2", fours2)
        checkFives(plr2Array, "fives-2", fives2)
        checkSixes(plr2Array, "sixes-2", sixes2)
        check3Kind(plr2Array, "three-kind-2", threeKind2)
    }
}

function updateTotals() {
    upperTotal1.innerText = plr1Upper.reduce((acc, num) => acc += num, 0) 
    upperTotal2.innerText = plr2Upper.reduce((acc, num) => acc += num, 0)
}

function checkIfUpper(){
    if (upperCheck === "aces-1"
    || upperCheck === "twos-1"
    || upperCheck === "threes-1"
    || upperCheck === "fours-1"
    || upperCheck === "fives-1"
    || upperCheck === "sixes-1"
    || upperCheck === "aces-2"
    || upperCheck === "twos-2"
    || upperCheck === "threes-2"
    || upperCheck === "fours-2"
    || upperCheck === "fives-2"
    || upperCheck === "sixes-2"
    ){
        return true
    } else {
        return false
    }
}

/* ------------------------- Game Logic ------------------------- */

function checkAces(plr, id, el){
    if (plr.includes(id)){
        el.style.backgroundColor = "#ededed"
        return
    }
    let filteredNumsArray = []
    let total
    if (diceArray.includes(1)){
        el.style.backgroundColor = "#42f581"
        diceArray.forEach(num => {
            if (num === 1){
                filteredNumsArray.push(num)
            }      
        })
       total = filteredNumsArray.reduce((acc, currentnum) => acc + currentnum);  
       el.innerText = total
    } else {
        el.style.backgroundColor = "white"
        el.innerText = null
    }
    if (!diceArray.includes(1) && currentRoll === 4){
        el.style.backgroundColor = "yellow"
        el.innerText = 0

    }
}
function checkTwos(plr, id, el){
    if (plr.includes(id)){
        el.style.backgroundColor = "#ededed"
        return
    }
    let filteredNumsArray = []
    let total
    if (diceArray.includes(2)){
        el.style.backgroundColor = "#42f581"
        diceArray.forEach(num => {
            if (num === 2){
                filteredNumsArray.push(num)
            }      
        })
       total = filteredNumsArray.reduce((acc, currentnum) => acc + currentnum);  
       el.innerText = total
    } else {
        el.style.backgroundColor = "white"
        el.innerText = null
    }
    if (!diceArray.includes(2) && currentRoll === 4){
        el.style.backgroundColor = "yellow"
        el.innerText = 0

    }
}
function checkThrees(plr, id, el){
    if (plr.includes(id)){
        el.style.backgroundColor = "#ededed"
        return
    }
    let filteredNumsArray = []
    let total
    if (diceArray.includes(3)){
        el.style.backgroundColor = "#42f581"
        diceArray.forEach(num => {
            if (num === 3){
                filteredNumsArray.push(num)
            }      
        })
       total = filteredNumsArray.reduce((acc, currentnum) => acc + currentnum);  
       el.innerText = total
    } else {
        el.style.backgroundColor = "white"
        el.innerText = null
    }
    if (!diceArray.includes(3) && currentRoll === 4){
        el.style.backgroundColor = "yellow"
        el.innerText = 0

    }
}
function checkFours(plr, id, el){
    if (plr.includes(id)){
        el.style.backgroundColor = "#ededed"
        return
    }
    let filteredNumsArray = []
    let total
    if (diceArray.includes(4)){
        el.style.backgroundColor = "#42f581"
        diceArray.forEach(num => {
            if (num === 4){
                filteredNumsArray.push(num)
            }      
        })
       total = filteredNumsArray.reduce((acc, currentnum) => acc + currentnum);  
       el.innerText = total
    } else {
        el.style.backgroundColor = "white"
        el.innerText = null
    }
    if (!diceArray.includes(4) && currentRoll === 4){
        el.style.backgroundColor = "yellow"
        el.innerText = 0

    }
}
function checkFives(plr, id, el){
    if (plr.includes(id)){
        el.style.backgroundColor = "#ededed"
        return
    }
    let filteredNumsArray = []
    let total
    if (diceArray.includes(5)){
        el.style.backgroundColor = "#42f581"
        diceArray.forEach(num => {
            if (num === 5){
                filteredNumsArray.push(num)
            }      
        })
       total = filteredNumsArray.reduce((acc, currentnum) => acc + currentnum);  
       el.innerText = total
    } else {
        el.style.backgroundColor = "white"
        el.innerText = null
    }
    if (!diceArray.includes(5) && currentRoll === 4){
        el.style.backgroundColor = "yellow"
        el.innerText = 0

    }
}
function checkSixes(plr, id, el){
    if (plr.includes(id)){
        el.style.backgroundColor = "#ededed"
        return
    }
    let filteredNumsArray = []
    let total
    if (diceArray.includes(6)){
        el.style.backgroundColor = "#42f581"
        diceArray.forEach(num => {
            if (num === 6){
                filteredNumsArray.push(num)
            }      
        })
       total = filteredNumsArray.reduce((acc, currentnum) => acc + currentnum);  
       el.innerText = total
    } else {
        el.style.backgroundColor = "white"
        el.innerText = null
    }
    if (!diceArray.includes(6) && currentRoll === 4){
        el.style.backgroundColor = "yellow"
        el.innerText = 0

    }
}

// checks for 3 of a kind validity. had to slice the diceArray to get a shallow copy so i could 
// mutate it without effecting the whole.
function check3Kind(plr, id, el){
    if (plr.includes(id)){
        el.style.backgroundColor = "#ededed"
        return
    }
    let total
    let copyDiceArray = diceArray.slice(0, 5)
    let sortedNumArray = copyDiceArray.sort((a, b) => a - b)
    console.log(sortedNumArray)
    console.log(diceArray)
    if ((sortedNumArray[0] === sortedNumArray[2] && diceArray[0] !== null)
        || (sortedNumArray[1] === sortedNumArray[3] && diceArray[0] !== null)
        || (sortedNumArray[2] === sortedNumArray[4] && diceArray[0] !== null))
        { 
            el.style.backgroundColor = "#42f581"
            total = sortedNumArray.reduce((acc, num) => acc += num, 0)
            el.innerText = total
        } else {
            el.style.backgroundColor = "white"
            el.innerText = null
        }
    if (sortedNumArray[0] !== sortedNumArray[2]
        && sortedNumArray[1] !== sortedNumArray[3]
        && sortedNumArray[2] !== sortedNumArray[4]
        ){
            if (currentRoll === 4){
            el.style.backgroundColor = "yellow"
            el.innerText = 0
            }
        }
}

    // let total
    // if (diceArray.includes(6)){
    //     el.style.backgroundColor = "#42f581"
    //     diceArray.forEach(num => {
    //         if (num === 6){
    //             filteredNumsArray.push(num)
    //         }      
    //     })
    //    total = filteredNumsArray.reduce((acc, currentnum) => acc + currentnum);  
    //    el.innerText = total
    // } else {
    //     el.style.backgroundColor = "white"
    //     el.innerText = null
    // }
    // if (!diceArray.includes(6) && currentRoll === 4){
    //     el.style.backgroundColor = "yellow"
    //     el.innerText = 0

    // }
