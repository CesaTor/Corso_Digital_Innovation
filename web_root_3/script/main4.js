// IMG
var myImage = document.querySelector('img');

// OnClick --> ChangeImage
myImage.onclick = () => {
	let mySrc = myImage.getAttribute('src');
	if (mySrc === 'assets/img/img.jpg') {
		myImage.setAttribute('src', 'assets/img/img2.jpg')
	}
	else {
		myImage.setAttribute('src', 'assets/img/img.jpg')
	}
}
// ...
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}