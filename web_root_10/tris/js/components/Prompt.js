function Prompt() {
	// Attributi
	this.container = $('body');

	// Metodi
	// costructor
	this.init = function (config) {
		// Check config
		if (!config) {
			console.log("No Config passed, using default")
			return;
		}

		if (!config.container) {
			console.log("No contaner set, using default")
			return;
		}

		this.container = config.container;
	}
	// Creo l'elemento 
	this.render = function () {
		let _this = this;
		let el = $('<div>').addClass('prompt');
		this.container.append(el);
	}

	this.addData = function (data) {
		let prompt = this.container.find('.prompt');
		prompt.html(prompt.html() + data.value + "<br>");
	}

	this.cls = function () {
		let prompt = this.container.find('.prompt');
		prompt.html(" ");
	}

	// Cancello l'elemento
	this.destroy = function () {
		this.container.html(" ");
	}

}

