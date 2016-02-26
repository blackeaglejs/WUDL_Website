Template.addquote2.events({
	'submit form': function (e, t) {
		e.preventDefault();
		var quote = $('#inputQuote').val();
		var author = $('#inputAuthor').val();

		TeacherQuote.insert({quote: quote, author: author});
		$(form).each(function(){
			this.reset();
		});
	}
});

Template.teachers.events({
	'click .glyphicon-remove': function (e, t) {
		e.preventDefault();

    	TeacherQuote.remove({_id: TeacherQuote.findOne({quote: e.target.id})["_id"]});
	}
});

Template.teachers.helpers({
	teacherquote: function () {
		return TeacherQuote.find();
	}
});