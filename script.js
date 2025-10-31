const upperCase = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
const lowerCase = [..."abcdefghijklmnopqrstuvwxyz"]
const numbers = [..."0123456789"]
const symbols = [..."!@#$%^&*()-_=+[]{}|;:'\",.<>?/\\`~"]
const passLenght = 15

let pass1 = document.getElementById("passOne")
let pass2 = document.getElementById("passTwo")

function generatePassword() {
  pass1.textContent = getPass()
  pass2.textContent = getPass()
}
function getPass() {
  const passList = upperCase.concat(lowerCase, numbers, symbols)
  let pass = ""
  for (let i = 0; i < passLenght; i++){
    let chr = passList[(Math.floor(Math.random() * passList.length))]
    pass += chr
    
  }
  return pass
}