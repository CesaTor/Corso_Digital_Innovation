
function Triangolo(base, altezza) {
	this.base = base;
  this.altezza = altezza;

  this.area = function () {
    return (this.base*this.altezza)/2;
  }
  
  this.lato = function () {
  	return Math.sqrt(Math.pow(this.base, 2) + Math.pow(this.altezza, 2));
  }
 
}

Triangolo.prototype.scale = function(s) {
	this.scale = s;
  return this.scale;
}

Triangolo.prototype.getScaledArea = function() {
  this.base *= this.scale;
  this.altezza *= this.scale;
  return this.area();
}

var tri = new Triangolo(3, 4);

document.body.appendChild(document.createTextNode("Area: "+tri.area()));
document.body.appendChild(document.createTextNode(" Ipotenusa: "+tri.lato()));

tri.scale(2)

document.body.appendChild(document.createTextNode(" Scaled: "+tri.getScaledArea()));
console.log(Triangolo.prototype);

