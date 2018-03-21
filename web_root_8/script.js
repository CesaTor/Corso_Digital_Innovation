var main = $('#tab');
var inputs;

$(document).ready(() => {
	inputs = $('input');
});

$('#tab').sortable({
	containerSelector: 'table',
	itemSelector: 'tr:not(:first-child)',
});

$('#sub').on('click', (e) => {
	// Block Default 
	// e.prevendDefault();
	var nameEl = inputs.eq(0);
	var surEl = inputs.eq(1);

	var name = nameEl.val();
	var sur = surEl.val();

	//Se la stringa è vuota, mostra il messaggio
	if (name == "" || sur == "") {
		$('form p').fadeIn().delay(1000).fadeOut();
		return;
	}

	// Add element to table
	var newEl = $('<tr>');

	newEl.append(td(genCheck(newEl)), td(name), td(sur), td(buttDel(newEl)));
	// Add to table
	main.append(newEl)
	// CLEAR onclick
	nameEl.val('');
	surEl.val('');
})

$("#sortName").click(
	() => {
		let rows = $('tr:not(:first-child)');

		let storage = [];
		//per ogni riga
		rows.each(function (index) {
			//per ogni elemento
			let els = $(this).find('td');
			storage.push({
				name: els.eq(1).text(),
				row: $(this),
			});
			// $(this).remove();
		})

		storage.sort(function (a, b) {
			if (a.name > b.name) return -1;
			else return 1;
		})

		// $.each(storage, (index, val) => {
		// 	let row = val.row;
		// 	main.append(row);
		// })

		$.each(storage, (index, val) => {
			let row = val.row;
			$('table tr#thead').after(row);
		})
	}
);

// td helper
function td(val) {
	return $('<td>').html(val);
}

// Generate delete button for defined row
function buttDel(el) {
	return $('<button>').html('Delete').click(() => {
		el.remove();
	});
}

var a = 0;

// Generate Checkbox for defined row
function genCheck(el) {
	let chk = $('<input type="checkbox" class="' + a + '" > ');
	a++;
	return chk.on('change', () => {
		el.toggleClass('selected', chk.is(':checked'))
	})
}

// Generate delete button for defined row
// $('table').on('click', '.classDeleteButton', () => {
// 	$(this).parent().parent().remove(); //$(this).closest('tr').remove()
// })

$('#delSelected').on('click', () => {
	$('tr.selected').each(function (index) {
		$(this).remove();
	});
})

$('#checkAll').on('change', () => {
	checka = $('input:checkbox:not(#checkAll)');
	checka.each(function (index) {
		$(this).prop('checked', $('#checkAll').is(':checked'));
		$(this).trigger('change');
	});
})