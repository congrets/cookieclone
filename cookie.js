// VARIABLES
// Cookie variables
let cookieCount = 0;
let clickPower = 1;
let cookiePerSecond = 0;

// Autoclicker variables
let autoClickerPrice = 20;
let autoClickPower = 0;
let autoClickerOwned = 0
let autoClickOn = false;

// Grandma variables
let grandmaPrice = 100;
let grandmaPower = 0;
let grandmaOwned = 0;
let grandmaVisible = false;

// Factory variables
let factoryPrice = 500;
let factoryPower = 0;
let factoryOwned = 0;
let factoryVisible = false;

// Achievement variables
let totalCookies = 0;


// DOM Declaration
// Cookie counter update control
let cookieCounter = document.getElementById('cookie-counter');
let cookieClicker = document.getElementById('cookie-clicker');
let cookiesPerSecond = document.getElementById('cookies-per-second');

// Autoclicker update control
let autoClickerPriceDisplay = document.getElementById('autoClicker-price-display');
let autoClickersOwned = document.getElementById('autoClickers-owned');

// Grandma update control
let grandmaPriceDisplay = document.getElementById('grandma-price-display');
let grandmasOwned = document.getElementById('grandmas-owned');

// Factory update control
let factoryPriceDisplay = document.getElementById('factory-price-display');
let factoriesOwned = document.getElementById('factories-owned');

// Update values at start of game
cookieCounter.innerHTML = cookieCount;
autoClickerPriceDisplay.innerHTML = autoClickerPrice;
autoClickersOwned.innerHTML = autoClickerOwned;
grandmaPriceDisplay.innerHTML = grandmaPrice;
grandmasOwned.innerHTML = grandmaOwned;
factoryPriceDisplay.innerHTML = factoryPrice;
factoriesOwned.innerHTML = factoryOwned;
cookiesPerSecond.innerHTML = cookiePerSecond;

//Auto Clicker Loop. Constantly adds cookies when you have bought an auto clicker.
let autoClickerStart = function() {
	window.setInterval(function() {
		autoClick()
	}, 1000);
}

let grandmaStart = function() {
	window.setInterval(function() {
		grandmaBake()
	}, 1000);
}

let factoryStart = function() {
	window.setInterval(function() {
		factoryProduce()
	}, 1000);
}

//Adds cookies when you click on the cookie
function clickUp() {
	cookieCount = cookieCount + clickPower;
	totalCookies += clickPower;
	refreshCookieCount();
}

//Auto Clicker Upgrade
function autoClickerUpgrade() {
	if (cookieCount >= autoClickerPrice) {
		cookieCount -= autoClickerPrice;
		autoClickerPrice = Math.floor(autoClickerPrice * 1.10);
		autoClickPower += 1;
		autoClickerOwned += 1;
		grandmaVisible = true;

		if (autoClickOn == false) {
			autoClickOn = true;
			autoClickerStart();
		}

		refreshCookieCount();
		//Updates the autoClicker price
		autoClickerPriceDisplay.innerHTML = autoClickerPrice;
		autoClickersOwned.innerHTML = autoClickerOwned;
	} else {
		alert("Not enough cookies!");
	}
}

function grandmaUpgrade() {
	if (cookieCount >= grandmaPrice) {
		cookieCount -= grandmaPrice;
		grandmaPrice = Math.floor(grandmaPrice * 1.10);
		grandmaPower += 25;
		grandmaOwned += 1;
		factoryVisible = true;

		refreshCookieCount();
		grandmaPriceDisplay.innerHTML = grandmaPrice;
		grandmasOwned.innerHTML = grandmaOwned;
	} else {
		alert("Not enough cookies!");
	}
}

function factoryUpgrade() {
	if (cookieCount >= factoryPrice) {
		cookieCount -= factoryPrice;
		factoryPrice = Math.floor(factoryPrice * 1.10);
		factoryPower += 50;
		factoryOwned += 1;

		refreshCookieCount();
		factoryPriceDisplay.innerHTML = factoryPrice;
		factoriesOwned.innerHTML = factoryOwned;
	} else {
		alert("Not enough cookies!");
	}
}

//Refreshes the cookie count
function refreshCookieCount() {
	cookieCounter.innerHTML = cookieCount;
}

function autoClick() {
	totalCookies = totalCookies + autoClickPower + grandmaPower + factoryPower;
	cookieCount = cookieCount + autoClickPower + grandmaPower + factoryPower;
	cookiePerSecond = autoClickPower + grandmaPower + factoryPower;
	cookiesPerSecond.innerHTML = cookiePerSecond;
	refreshCookieCount();
	if (grandmaVisible) {
		document.getElementById('upgrade2').style.visibility = "visible";
	}
	if (factoryVisible) {
		document.getElementById('upgrade3').style.visibility = "visible";
	}
	if (totalCookies >= 100) {
		document.getElementById('oneHundredCookies').style.visibility = "visible";
	}
	if (totalCookies >= 10000) {
		document.getElementById('tenThousandCookies').style.visibility = "visible";
	}
	if (totalCookies >= 1000000) {
		document.getElementById('oneMillionCookies').style.visibility = "visible";
	}
	if (autoClickerOwned >= 10) {
		document.getElementById('tenAutoClickers').style.visibility = "visible";
	}
	if (autoClickerOwned >= 100) {
		document.getElementById('oneHundredAutoClickers').style.visibility = "visible";
	}
	if (grandmaOwned >= 10) {
		document.getElementById('tenGrandmas').style.visibility = "visible";
	}
	if (grandmaOwned >= 100) {
		document.getElementById('oneHundredGrandmas').style.visibility = "visible";
	}
	if (factoryOwned >= 10) {
		document.getElementById('tenFactories').style.visibility = "visible";
	}
	if (factoryOwned >= 100) {
		document.getElementById('oneHundredFactories').style.visibility = "visible";
	}
}

function changeSkinToCookie() {
	document.getElementById('cookie-clicker').src="cookie.png";
}

function changeSkinToSugarCookie() {
	document.getElementById('cookie-clicker').src="sugarCookie.png";
}

function changeSkinToOreoCookie() {
	document.getElementById('cookie-clicker').src="oreoCookie.png";
}