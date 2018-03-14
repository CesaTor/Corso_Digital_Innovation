// Global Variables ----------------------------------------

var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

// END Global Variables ----------------------------------------



// Functions -----------------------------------------------

// Set username to header
function setHeader(name) {
	myHeading.innerHTML = 'Things are cool, ' + name;
}

// Richiesta Username
function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	setHeader(myName);
}

// END Funtions ---------------------------------------------



// Listeners ------------------------------------------------

// OnImageClick
myImage.onclick = () => {
	let mySrc = myImage.getAttribute('src');
	if (mySrc === 'assets/img/img.jpg') {
		myImage.setAttribute('src', 'assets/img/img2.jpg')
	}
	else {
		myImage.setAttribute('src', 'assets/img/img.jpg')
	}
}

// OnButtonClick
myButton.onclick = setUserName;

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	setHeader(storedName);
}
// END Listeners ------------------------------------------------


var car = ['Fiat', 'Volvo', 'BMW', 'Mercedes'];
console.log(car, car.indexOf('BMW'));

switch (myCar) {
	case 'Fiat':
		console.log('We');
		break;
	case 'Volvo':
		console.log('Are');
		break;
	case 'BMW':
		console.log('Number');
		break;
	case 'Mercedes':
		console.log('One');
		break;
	default:
		console.log('We Are Number One, but by default');
		break;
}

car.splice(2, 0, 'Aonna', 'Hara');

console.log(car);