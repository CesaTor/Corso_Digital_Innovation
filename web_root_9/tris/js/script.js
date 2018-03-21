// import { Login } from "./components/Login";

var gameTable = [];
var ways = [];
ways.push([0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]);

var turn = true;
var loginData = {
	player1: "",
	player2: ""
}

$(document).ready(function () {
	var login = new Login();
	var game; // Inizializzo comunque a priori

	var _this = this;

	login.init({
		name1: "Mario",
		name2: "Peach",
		container: $('#login_el')
	});

	login.render();
});

$('#game_el').on('winner', function (e, data) {
	if (data.player != 0) {
		alert(loginData["player" + data.player] + " WON!");
		game.destroy();
		initGame();
	}
	else {
		game.destroy();
		initGame();
	}
});

$('#login_el').on('name_inserted', function (e, data) {
	// console.log(e, data);
	loginData.player1 = data.name_1;
	loginData.player2 = data.name_2;

	initGame();
})

$('#game_el').on('field_clicked', function (e, data) {
	var id = data.id;

	if (checkEmpty(id)) {
		// Salvo in tabella e scrivo sul bottone
		setSign(id, data.el);
		// Cambio turno
		checkWin();
		// Cambio giro
		turn = !turn;
	} else {
		alert("Nope, già in uso!");
	}

})

function setSign(id, el) {
	gameTable[id] = turnSign(id, el);
	el.text(turnSign());
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
		if (prompt("Nessuno ha vinto, rigiocate?")) {
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

function initGame() {
	gameTable = [0, 0, 0, 0, 0, 0, 0, 0, 0];

	game = new Game();
	game.init({
		container: $('#game_el')
	});
	game.render();
}
