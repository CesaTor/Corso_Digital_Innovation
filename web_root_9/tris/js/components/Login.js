//
function Login() {
	// Attributi
	this.defaultName1 = "Mike Ler";
	this.defaultName2 = "John Doe";
	this.container = $('body');

	// Metodi
	// costructor
	this.init = function (config) {
		// Check config
		if (!config) {
			console.log("No Config passed, using default")
			return;
		}

		if (!config.name1 || !config.name2 || !config.container) {
			console.log("Config passed but fields are empty, using default")
			return;
		}

		this.defaultName1 = config.name1;
		this.defaultName2 = config.name2;
		this.container = config.container;
	}

	// Creo l'elemento 
	this.render = function () {
		let _this = this;

		let el =
			$('<form>')
				.append(
					$('<label>').text('Nome Player 1: '),
					$('<input>', { "type": "text", "id": "player1" }).val(this.defaultName1),
					$('<br>'),
					$('<label>').text('Nome Player 2: '),
					$('<input>', { "type": "text", "id": "player2" }).val(this.defaultName2),
					$('<br>'),
					$('<button>', { "type": "button" }).html('Inizia!')
						.click(function () {
							_this.send();
						})
				);
		this.container.append(el);
	}

	// Invio i dati
	this.send = function () {
		let name_1 = this.container.find('#player1').val();
		let name_2 = this.container.find('#player2').val();

		let data = {
			name_1: name_1,
			name_2: name_2,
		}

		// Triggero l'evento, gli passso i dati e cancello l'elemento
		this.container.trigger('name_inserted', data);
		this.destroy();
	}

	// Cancello l'elemento
	this.destroy = function () {
		this.container.html(" ");		
		// this.container.remove();
	}

}

