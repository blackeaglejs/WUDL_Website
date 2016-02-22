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

Template.impact.events({
	'click .glyphicon-remove': function (e, t) {
		e.preventDefault();

    	ImpactQuote.remove({_id: ImpactQuote.findOne({quote: e.target.id})["_id"]});
	}
});

Template.impact.onRendered(function(){
	$('#side').height($('#main').height());
});

Template.teachers.onRendered(function(){
	$('#side').height($('#main').height());
});
