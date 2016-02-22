Session.setDefault('link', null);

Template.showresult.events({
	'click .resultlist': function (e, t) {
		e.preventDefault();
		var link = this.link;
		Session.set('link', this.link);
		$('iframe').attr('src', link);
	}
});

Template.addresult.events({
	'submit form': function(e, t){
		e.preventDefault();
		var name = $('#inputName').val();
		var link = $('#inputLink').val();
		var month = $('#inputMonth').val();
		var day = $('#inputDay').val();
		var year = $('#inputYear').val();

		var date = year*10000 + month*100 + day; 

		ResultList.insert({name: name, link: link, date: date});
	}
});

Template.results.helpers({
	showingresults: function () {
		return ResultList.find({}, {sort: {date: -1}});
	},
	linklol: function(){
		Session.get('link');
	},
	isNull: function(){
		return Session.get('link')===null;
	}
});