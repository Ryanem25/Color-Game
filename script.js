const dicec1 = document.getElementById("dice1");
const dicec2 = document.getElementById("dice2");
const dicec3 = document.getElementById("dice3");

let dice1;
let dice2;
let dice3;

let balance = document.getElementById("balance")
let betAmount = document.getElementById("betAmount")
let totalBet = 0;
let pinkBet = 0
let whiteBet = 0
let yellowBet = 0
let greenBet = 0
let redBet = 0
let blueBet = 0
let myMoney = 500
let myColors = []
let myBetmoney = []



document.getElementById("roll").disabled = true

//bet
const pink = document.querySelector(".c1")
const white = document.querySelector(".c2")
const yellow = document.querySelector(".c3")
const green = document.querySelector(".c4")
const red = document.querySelector(".c5")
const blue = document.querySelector(".c6")

let add500 = document.getElementById("add500")
let add200 = document.getElementById("add200")
let add100 = document.getElementById("add100")
let add50 = document.getElementById("add50")
let add20 = document.getElementById("add20")

add500.addEventListener("click", add500 = () => {

  if (myMoney < 500) {
    document.querySelector("#bet").innerHTML = "<p class='addErr'>Not Enough Money</p>"
    setTimeout(() => document.querySelector(".addErr").remove(), 2000)
  } else {
    betAmount.value = 500
  }


})
add200.addEventListener("click", add500 = () => {
  if (myMoney < 200) {
    document.querySelector("#bet").innerHTML = "<p class='addErr'>Not Enough Money</p>"
    setTimeout(() => document.querySelector(".addErr").remove(), 2000)
  } else {
    betAmount.value = 200
  }
  
})
add100.addEventListener("click", add500 = () => {
  if (myMoney < 100) {
    document.querySelector("#bet").innerHTML = "<p class='addErr'>Not Enough Money</p>"
    setTimeout(() => document.querySelector(".addErr").remove(), 2000)
  } else {
    betAmount.value = 100
  }
})
add50.addEventListener("click", add500 = () => {
  if (myMoney < 50) {
    document.querySelector("#bet").innerHTML = "<p class='addErr'>Not Enough Money</p>"
    setTimeout(() => document.querySelector(".addErr").remove(), 2000)
  } else {
    betAmount.value = 50
  }
})
add20.addEventListener("click", add500 = () => {
  if (myMoney === 0) {
    document.querySelector("#bet").innerHTML = "<p class='addErr'>Not Enough Money</p>"
    setTimeout(() => document.querySelector(".addErr").remove(), 2000)
  } else {
    betAmount.value = myMoney
  }
})



pink.addEventListener('click', function() {


  if (myMoney < betAmount.value) {
    document.querySelector("#info-box").innerHTML = "<h2 class='msgErr'>Not Enough Money</h2>"
    setTimeout(() => document.querySelector(".msgErr").remove(), 2000)
  } else if (betAmount.value < 20) {
    document.querySelector("#info-box").innerHTML = "<h2 class='msgErr'>Minimum Bet is 50</h2>"
    setTimeout(() => document.querySelector(".msgErr").remove(), 2000)
  } else {
    totalBet += Number(betAmount.value)
    pinkBet += Number(betAmount.value)
    document.getElementById("pinkAmount").innerHTML = `<h2 class='pinkMsg' >${pinkBet}</h2>`;

    document.querySelector("#info-box").innerHTML = `<h2 class='betAnnounce' >Your total bet is ${totalBet}</h2>`
    balance.innerHTML = myMoney - totalBet
    myMoney -= pinkBet
    myColors.push(1)
    myBetmoney.push(pinkBet)
    document.getElementById("roll").disabled = false
    document.getElementById("roll").textContent = "Roll"
  }
  betAmount.value = ' '



})

white.addEventListener('click', function() {

  if (myMoney < betAmount.value) {
    document.querySelector("#info-box").innerHTML = "<h2 class='msgErr'>Not Enough Money</h2>"
    setTimeout(() => document.querySelector(".msgErr").remove(), 2000)
  } else if (betAmount.value < 20) {
    document.querySelector("#info-box").innerHTML = "<h2 class='msgErr' >Minimum Bet is 50</h2>"
    setTimeout(() => document.querySelector(".msgErr").remove(), 2000)
  } else {

    totalBet += Number(betAmount.value)
    whiteBet += Number(betAmount.value)
    document.getElementById("whiteAmount").innerHTML = `<h2 class='whiteMsg' >${whiteBet}</h2>`;
    document.querySelector("#info-box").innerHTML = `<h2  class='betAnnounce' >Your total bet is ${totalBet}</h2>`
    balance.innerHTML = myMoney - totalBet
    myColors.push(2)
    myMoney -= whiteBet
    myBetmoney.push(whiteBet)
    document.getElementById("roll").disabled = false
    document.getElementById("roll").textContent = "Roll"
  }
  betAmount.value = ' '
})

yellow.addEventListener('click', function() {
  if (myMoney < betAmount.value) {
    document.querySelector("#info-box").innerHTML = "<h2 class='msgErr'>Not Enough Money</h2>"
    setTimeout(() => document.querySelector(".msgErr").remove(), 2000)
  } else if (betAmount.value < 20) {
    document.querySelector("#info-box").innerHTML = "<h2 class='msgErr'>Minimum Bet is 20</h2>"
    setTimeout(() => document.querySelector(".msgErr").remove(), 2000)
  } else {

    totalBet += Number(betAmount.value)
    yellowBet += Number(betAmount.value)
    document.getElementById("yellowAmount").innerHTML = `<h2 class='yellowMsg' >${yellowBet}</h2>`;
    document.querySelector("#info-box").innerHTML = `<h2  class='betAnnounce' >Your total bet is ${totalBet}</h2>`
    balance.innerHTML = myMoney - totalBet
    myMoney -= yellowBet
    myColors.push(3)
    myBetmoney.push(yellowBet)
    document.getElementById("roll").disabled = false
    document.getElementById("roll").textContent = "Roll"
  }
  betAmount.value = ' '
})

green.addEventListener('click', function() {
  if (myMoney < betAmount.value) {
    document.querySelector("#info-box").innerHTML = "<h2 class='msgErr'>Not Enough Money</h2>"
    setTimeout(() => document.querySelector(".msgErr").remove(), 2000)
  } else if (betAmount.value < 20) {
    document.querySelector("#info-box").innerHTML = "<h2 class='msgErr'>Minimum Bet is 20</h2>"
    setTimeout(() => document.querySelector(".msgErr").remove(), 2000)
  } else {

    totalBet += Number(betAmount.value)
    greenBet += Number(betAmount.value)
    document.getElementById("greenAmount").innerHTML = `<h2 class='greenMsg' >${greenBet}</h2>`;
    document.querySelector("#info-box").innerHTML = `<h2  class='betAnnounce' >Your total bet is ${totalBet}</h2>`
    balance.innerHTML = myMoney - totalBet
    myMoney -= greenBet
    myColors.push(4)
    myBetmoney.push(greenBet)
    document.getElementById("roll").disabled = false
    document.getElementById("roll").textContent = "Roll"
  }
  betAmount.value = ' '
})

red.addEventListener('click', function() {
  if (myMoney < betAmount.value) {
    document.querySelector("#info-box").innerHTML = "<h2 class='msgErr'>Not Enough Money</h2>"
    setTimeout(() => document.querySelector(".msgErr").remove(), 2000)
  } else if (betAmount.value < 20) {
    document.querySelector("#info-box").innerHTML = "<h2 class='msgErr'>Minimum Bet is 20</h2>"
    setTimeout(() => document.querySelector(".msgErr").remove(), 2000)
  } else {

    totalBet += Number(betAmount.value)
    redBet += Number(betAmount.value)
    document.getElementById("redAmount").innerHTML = `<h2 class='redMsg' >${redBet}</h2>`;
    document.querySelector("#info-box").innerHTML = `<h2  class='betAnnounce'>Your total bet is ${totalBet}</h2>`
    balance.innerHTML = myMoney - totalBet
    myMoney -= redBet
    myColors.push(5)
    myBetmoney.push(redBet)
    document.getElementById("roll").disabled = false
    document.getElementById("roll").textContent = "Roll"
  }
  betAmount.value = ' '
})

blue.addEventListener('click', function() {
  if (myMoney < betAmount.value) {
    document.querySelector("#info-box").innerHTML = "<h2 class='msgErr'>Not Enough Money</h2>"
    setTimeout(() => document.querySelector(".msgErr").remove(), 2000)
  } else if (betAmount.value < 20) {
    document.querySelector("#info-box").innerHTML = "<h2 class='msgErr'>Minimum Bet is 20</h2>"
    setTimeout(() => document.querySelector(".msgErr").remove(), 2000)
  } else {

    totalBet += Number(betAmount.value)
    blueBet += Number(betAmount.value)
    document.getElementById("blueAmount").innerHTML = `<h2 class='blueMsg' >${blueBet}</h2>`;
    document.querySelector("#info-box").innerHTML = `<h2  class='betAnnounce' >Your total bet is ${totalBet}</h2>`
    balance.innerHTML = myMoney - totalBet
    myMoney -= blueBet
    myColors.push(6)
    myBetmoney.push(blueBet)
    document.getElementById("roll").disabled = false
    document.getElementById("roll").textContent = "Roll"
  }
  betAmount.value = ' '
})




let money1;
let money2;
let money3;
let isWin = false;

function rolling() {
  dice1 = Math.floor(Math.random() * 6) + 1
  dice2 = Math.floor(Math.random() * 6) + 1
  dice3 = Math.floor(Math.random() * 6) + 1




  dicec1.classList.add("dice1Roll")
dicec2.classList.add("dice2Roll")
dicec3.classList.add("dice3Roll")

  document.getElementById("roll").style.display = "none"
  document.getElementById("roll").disabled = true
  document.getElementById("roll").textContent = "Place Your Bet First"
  document.getElementById("newRound").style.display = "block"


  setTimeout(() => document.querySelector(".pinkMsg").remove(), 6000)
  setTimeout(() => document.querySelector(".whiteMsg").remove(), 6000)
  setTimeout(() => document.querySelector(".yellowMsg").remove(), 6000)
  setTimeout(() => document.querySelector(".greenMsg").remove(), 6000)
  setTimeout(() => document.querySelector(".redMsg").remove(), 6000)
  setTimeout(() => document.querySelector(".blueMsg").remove(), 6000)

  if (dice1 != myColors[0] && dice2 != myColors[0] && dice3 === myColors[0] || dice1 != myColors[0] && dice2 === myColors[0] && dice3 != myColors[0] || dice1 === myColors[0] && dice2 != myColors[0] && dice3 != myColors[0]) {

    money1 = myBetmoney[0] *2
    isWin = true

    document.querySelector("#congMsg").innerHTML = `<h2 >You won ${totalBet*2}</h2>`
    document.getElementById("newRound").textContent = "Collect"


  } else if (dice1 != myColors[0] && dice2 === myColors[0] && dice3 === myColors[0] || dice1 === myColors[0] && dice2 === myColors[0] && dice3 != myColors[0] || dice1 === myColors[0] && dice2 != myColors[0] && dice3 === myColors[0])
  {
    money1 = myBetmoney[0] * 3
    document.querySelector("#congMsg").innerHTML = `<h2 >You won ${totalBet*3}</h2>`
    isWin = true
    document.getElementById("newRound").textContent = "Collect"
  } else if (dice1 === myColors[0] && dice2 === myColors[0] && dice3 === myColors[0])
  
  {
    money1 = myBetmoney[0] * 4
    document.querySelector("#congMsg").innerHTML = `<h2 >You won ${totalBet*4}</h2>`
    isWin = true
    document.getElementById("newRound").textContent = "Collect"
  } else {
    isWin = false
    document.querySelector("#congMsg").innerHTML = `<h2 >Aba ay taya Ulit!</h2>`
    document.getElementById("newRound").textContent = "Play Again"

  }



  pinkBet -= pinkBet
  whiteBet -= whiteBet
  yellowBet -= yellowBet
  greenBet -= greenBet
  redBet -= redBet
  blueBet -= blueBet
  totalBet = 0



setTimeout(() => toggleModal(), 7000)

  color1()
  color2()
  color3()

}


function newRound() {
  document.querySelector(".betAnnounce").remove()
  dicec1.classList.remove("dice1Roll")
  dicec2.classList.remove("dice2Roll")
  
 dicec3.classList.remove("dice3Roll")
  
  document.getElementById("roll").style.display = "block"
  document.getElementById("newRound").style.display = "none"
  if (isWin === true) {
    myMoney += money1
    document.getElementById("balance").innerHTML = myMoney
  } else {
    document.getElementById("balance").innerHTML = myMoney 
  }


  myColors.splice(0, myColors.length)
  
  myBetmoney.splice(0, myBetmoney.length)
}


function color1() {
  //dice1
 
    if (dice1 === 1) {
      dicec1.style.background = "pink"
    } else if (dice1 === 2) {
      dicec1.style.background = "white"
    } else if (dice1 === 3) {
      dicec1.style.background = "yellow"
    } else if (dice1 === 4) {
      dicec1.style.background = "green"
    } else if (dice1 === 5) {
      dicec1.style.background = "red"
    } else {
      dicec1.style.background = "blue"
    }
  
}

function color2() {
  //dice 2
  
    if (dice2 === 1) {
      dicec2.style.background = "pink"
    } else if (dice2 === 2) {
      dicec2.style.background = "white"
    } else if (dice2 === 3) {
      dicec2.style.background = "yellow"
    } else if (dice2 === 4) {
      dicec2.style.background = "green"
    } else if (dice2 === 5) {
      dicec2.style.background = "red"
    } else {
      dicec2.style.background = "blue"
    }
  
}

function color3() {
  //dice 3
  
    if (dice3 === 1) {
      dicec3.style.background = "pink"
    } else if (dice3 === 2) {
      dicec3.style.background = "white"
    } else if (dice3 === 3) {
      dicec3.style.background = "yellow"
    } else if (dice3 === 4) {
      dicec3.style.background = "green"
    } else if (dice3 === 5) {
      dicec3.style.background = "red"
    } else {
      dicec3.style.background = "blue"
    }
  
  
}

const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");
const collectBtn = document.querySelector("#newRound");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}



collectBtn.addEventListener("click", toggleModal);

