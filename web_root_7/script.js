$(document).ready(() => {
	console.log($('input'));
	inputs = $('input');


});

$('#sub').on('click', (e) => {
	// e.preventDefault();
	var name = inputs.eq(0).val();
	var sur = inputs.eq(1).val();
	var html = $('#text').val();
	$('#text').val(html + "\n" + name + " " + sur);
	// alert($('input').eq(1).val());
})

$('#cls').on('click', () => {
	var name = inputs.eq(0);
	var sur = inputs.eq(1);
	$('#text').val('');
})
