function Db() {
	// Attributi
	this.container = $('body');
	this.data = [];
	var _this = this;

	this.init = function (config) {
		// this.updateData();
	}

	this.updateData = function () {

		$.ajax({
			type: "GET",
			dataType: "JSONP",
			jsonpCallback: "test",
			url: "http://zuccaezafferano.it/Luca/tris/results.php?ac=" + Date.now(),
			success: function (data) {
				// console.log("successResults", data, data[0], data[0].results);
				_this.data = data;
				ranking.render(data[0].results);
			}
		})

	};

	this.addData = function (data) {
		let date = new Date();
		date = date.toLocaleString();

		$.ajax({
			type: "GET",
			dataType: "JSONP",
			jsonpCallback: "test",
			url: "http://zuccaezafferano.it/Luca/tris/save_game.php",
			data: {
				date: date,
				name_1: data.p1,
				name_2: data.p2,
				winner: data.w,
			},
			success: function () {
				console.log("ok");
				_this.updateData();
			}
		})

	}

	this.getData = function () {

		this.updateData();
		// let res = [];
		// for (var i = 0; i < this.data.length; i++) {
		// 	let tmp = JSON.parse(this.data[i].value);
		// 	tmp.date = this.data[i].key;
		// 	res.push(tmp);
		// }
		// return res;
		return this.data.results;
	}

	this.cls = function () {
		this.res = [];
		localStorage.clear();
	}

	// Cancello l'elemento
	this.destroy = function () {
		this.container.html(" ");
	}
}
