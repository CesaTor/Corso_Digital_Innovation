new Vue({
	el: '#editor',
	data: {
		input: '# hello'
	},
	computed: {
		compiledMarkdown: function () {
			return marked(this.input, { sanitize: true });			
			// return marked(this.invertText, { sanitize: true });
		},
		invertText: function () {
			return this.input.split('').reverse().join('');
		}
	},
	methods: {
		update: _.debounce(function (e) {
			this.input = e.target.value;
		}, 10)
	}
});