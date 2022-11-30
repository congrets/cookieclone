let cookieCount = 0;
let clickPower = 1;

let cookieCounter = document.getElementById('cookie-counter');
let cookieClicker = document.getElementById('cookie-clicker');
cookieCounter.innerHTML = cookieCount;

function clickUp() {
	cookieCount = cookieCount + clickPower;
	cookieCounter.innerHTML = cookieCount;
}