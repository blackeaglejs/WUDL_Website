Template.member-post.events({
	'submit form': function (e, t) {
		e.preventDefault();

		var name = $('#inputName').val();
		var position = $('#inputPosition').val();
		var bio = $('#inputBiography').val();
		var files = [];
		var file = $('#userimage')[0].files[0];
		files.push(file);
		
	}
});