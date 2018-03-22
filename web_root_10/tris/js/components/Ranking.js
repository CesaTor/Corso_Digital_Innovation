function Ranking() {
	// Attributi
	this.container = $('body');
	this.data = [];
	var _this = this;

	this.init = function (config) {
		this.container = config.container;
	}

	this.render = function (data) {
		console.log("ranking data got", data);
		this.data = data;

		let el = $('<table>')
			.append($('<tr>'))
			.append($('<th>').html('Data'), $('<th>').html('Player 1'), $('<th>').html('Player 2'), $('<th>').html('Winner'))

		_this.data.forEach(function (datum) {
			el.append($('<tr>'))
				.append($('<td>').html(datum.date), $('<td>').html(datum.name_1), $('<td>').html(datum.name_2), $('<td>').html(datum.winner))
		});

		this.container.append(el);
	}

	// Cancello l'elemento
	this.destroy = function () {
		this.container.html(" ");
	}

}
