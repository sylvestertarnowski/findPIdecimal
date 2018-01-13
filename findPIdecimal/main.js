
// piDec are PI numbers after the decimal point
var piDec = "1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679";
var n;
// this function checks if correct numbers have been entered
function doSomething() {
  n = document.getElementById("decimals").value;
  if (n > 100) {
    document.getElementById("finalPi").innerText = 'Your number is too high, pick a number lower than 100!';
  } else if (n <= 0) {
    document.getElementById("finalPi").innerText = 'Pick a positive or a non zero number!';
  } else {
    document.getElementById("finalPi").innerText = '3.' + piDec.substring(0,n);
  }
}

// console.log('3.' + piDec.substring(0,n));
