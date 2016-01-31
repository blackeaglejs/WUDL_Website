Template.addquote.events({
	'submit form': function (e, t) {
		e.preventDefault();
		var quote = $('#inputQuote').val();
		var author = $('#inputAuthor').val();

		ImpactQuote.insert({quote: quote, author: author});
		$(form).each(function(){
			this.reset();
		});
	}
});

Template.impact.onRendered(function(){
	$('#side').height($('#main').height());
});

Template.teachers.onRendered(function(){
	$('#side').height($('#main').height());
});
