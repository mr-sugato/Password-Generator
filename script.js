const upperCase = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
const lowerCase = [..."abcdefghijklmnopqrstuvwxyz"]
const number = [..."0123456789"]
const symbol = [..."!@#$%^&*()-_=+[]{}|;:'\",.<>?/\\`~"]

let pass1 = document.getElementById("passOne")
let pass2 = document.getElementById("passTwo")
let symbols = document.getElementById("symbols")
let upperCases = document.getElementById("upperCases")
let numbers = document.getElementById("numbers")
let passowrdLenght = document.getElementById("passLenght")
let spanlenght = document.getElementById("lenghtShow")
pass1.addEventListener("click", function () {
  pass1.style.color = "greenyellow"
})
pass2.addEventListener("click", function () {
  pass2.style.color = "greenyellow"
})
function updateValue() {
  spanlenght.textContent = passowrdLenght.value
}

function copyPassOne() {
  navigator.clipboard.writeText(pass1.textContent)
}
function copyPassTwo() {
  navigator.clipboard.writeText(pass2.textContent)
}


function generatePassword() {
  pass1.style.color = "#EFB619"
  pass2.style.color = "#EFB619"
  
  pass1.textContent = getPass()
  pass2.textContent = getPass()
}
function getPass() {
  let passLenght = passowrdLenght.value
  let passList = []
  passList.push(lowerCase)
  if (symbols.checked) {
    passList.push(symbol)
  }
  if (upperCases.checked) {
    passList.push(upperCase)
  }
  if (numbers.checked) {
    passList.push(number)
  }
  // this line os new for me it does what it says flats all arrays inside so all of them are like one array
  passList = passList.flat()
  let pass = ""
  for (let i = 0; i < passLenght; i++){
    let chr = passList[(Math.floor(Math.random() * passList.length))]
    pass += chr
    
  }
  return pass
}

localStorage.se