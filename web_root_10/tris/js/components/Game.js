function Game() {
	this.container = $('body');

	_this = this;
	this.counter = 0;

	this.init = function (config) {
		_this.container = config.container;
		isGameRunning = true;
	}

	this.render = function () {
		let el = $('<div>')
			.append(
				buttGame(),
				buttGame(),
				buttGame(),
				$('<br>').addClass('cls'),
				buttGame(),
				buttGame(),
				buttGame(),
				$('<br>').addClass('cls'),
				buttGame(),
				buttGame(),
				buttGame(),
		)

		_this.container.append(el);
	}

	this.destroy = function () {
		isGameRunning = false;
		this.container.html(" ");
		// this.container.remove();
	}

	function buttGame() {
		let btnId = _this.counter;
		let btn =
			$('<section>', { "id": "field_" + btnId }).addClass("field")
				.click(function () {
					if (isGameRunning) {
						_this.container.trigger('field_clicked', { id: btnId, el: btn });
					}
				});
		//aumento il contatore
		_this.counter++;
		return btn;
	}
}

//LOGIC

$('#game_el').on('field_clicked', function (e, data) {
	var id = data.id;

	if (checkEmpty(id)) {
		// Salvo in tabella e scrivo sul bottone
		setSign(id, data.el);
		// Cambio turno
		checkWin();
	} else {
		$('#game_el').trigger('message', { value: "Nope, già in uso!" });
		// prompt.addData({ value: "Nope, già in uso!" });
		// alert("Nope, già in uso!");
	}

})


function setSign(id, el) {
	gameTable[id] = turnSign(id, el);
	el.text(turnSign());
	turn = !turn;
	el.trigger('message', { value: "Tocca a: " + loginData["player" + (turn ? '1' : '2')] });
	// prompt.addData({ value: "Tocca a: " + loginData["player" + (turn ? '1' : '2')] })
}

function checkWin() {
	ways.forEach(function (way) {
		if (gameTable[way[0]] == 'X' && gameTable[way[1]] == 'X' && gameTable[way[2]] == 'X') {
			$('#game_el').trigger('winner', { player: 1 });
			return;
		}
		if (gameTable[way[0]] == 'O' && gameTable[way[1]] == 'O' && gameTable[way[2]] == 'O') {
			$('#game_el').trigger('winner', { player: 2 });
			return;
		}
	})

	if (gameTable.indexOf(0) == -1) {
		if (isGameRunning) {
			$('#game_el').trigger('winner', { player: 0 });
		}
	}
}

function checkEmpty(id) {
	if (gameTable[id] != 0) {
		return false;
	}
	return true;
}

function turnSign() {
	if (turn) {
		return 'X';
	}
	return 'O';
}