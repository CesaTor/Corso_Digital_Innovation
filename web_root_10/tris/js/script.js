var gameTable = [];
var isGameRunning = false;
var ways = [];
ways.push([0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]);

var turn = true;
var loginData = {
	player1: "",
	player2: ""
}

var prompt;
var login;
var game;
var ranking;
var db;

$(document).ready(function () {
	//DECLARE
	prompt = new Prompt();
	login = new Login();
	db = new Db();
	ranking = new Ranking();

	//INIT
	init_login();
	init_prompt();
	db.init();
	ranking.init({ container: $('#rank_el') });
});

$('#game_el, #login_el').on('message', function (e, data) {
	prompt.addData(data);
});

$('#game_el').on('winner', function (e, data) {
	isGameRunning = false;

	db.addData({
		p1: loginData["player" + 1],
		p2: loginData["player" + 2],
		w: loginData["player" + data.player],
	})

	if (data.player != 0) {
		prompt.addData({ value: loginData["player" + data.player] + " WON!" });
	}
	else {
		prompt.addData({ value: "Nobody WON!" });
	}
	//New Game
	if (confirm('Wanna play again?')) {
		game.destroy();
		prompt.cls();
		init_game();
	} else {
		//creo tabella risultati
		goToRanking();
	}

});

function goToRanking() {

	$('#play_again').css('display', 'inline-block').click(function () {
		game.destroy();
		prompt.cls();
		init_game();
		ranking.destroy();
		$('#new_game').css('display', 'none');
		$('#play_again').css('display', 'none');
	});

	$('#new_game').css('display', 'inline-block').click(function () {
		game.destroy();
		prompt.cls();
		init_login();
		ranking.destroy();
		$('#new_game').css('display', 'none');
		$('#play_again').css('display', 'none');
		db.cls();
	});
}

function init_login() {
	login.init({
		name1: "Mario",
		name2: "Peach",
		container: $('#login_el')
	});
	login.render();
}

function init_prompt() {
	prompt.init({
		container: $('#prompt_el')
	});
	prompt.render();
}

function init_game() {
	gameTable = [0, 0, 0, 0, 0, 0, 0, 0, 0];

	game = new Game();
	game.init({
		container: $('#game_el')
	});
	game.render();
	game.container.trigger('message', { value: "Tocca a: " + loginData["player" + (turn ? '1' : '2')] })
	// prompt.addData({ value: "Tocca a: " + loginData["player" + (turn ? '1' : '2')] })
}