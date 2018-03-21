function Game() {

	this.container = $('body');

	_this = this;
	this.counter = 0;

	this.init = function (config) {
		_this.container = config.container;
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
		this.container.html(" ");
		// this.container.remove();
	}

	function buttGame() {
		let btnId = _this.counter;
		let btn =
			$('<section>', { "id": "field_" + btnId }).addClass("field")
				.click(function () {
					_this.container.trigger('field_clicked', { id: btnId, el: btn });
				});
		//aumento il contatore
		_this.counter++;
		return btn;
	}
}

