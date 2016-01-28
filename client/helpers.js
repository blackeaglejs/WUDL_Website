Template.pictureupload.events({
	'click button': function (e, t) {
		e.preventDefault();
		$(event.target).next().next().css("background", 'red');
	}
});

Template.teachers.helpers({
	teachers: function(){
		return Teachers.findOne({});
	}
});

Template.professional_development.helpers({
	professional_development: function(){
		return professional_development.findOne({})
	}
})

Template.programming.helpers({
	programming: function(){
		return Programming.findOne({});
	}
});
Template.impact.helpers({
	impact: function(){
		return Impact.findOne({});
	},
	impactgraduation: function(){
		return ImpactGraduation.findOne({});
	},
	impactgrades: function(){
		return ImpactGrades.findOne({});
	},
	impactattendance: function(){
		return ImpactAttendance.findOne({});
	},
	impactscores: function(){
		return ImpactScores.findOne({});
	},
	impactcollege: function(){
		return ImpactCollege.findOne({});
	},
	impactquote: function(){
		return ImpactQuote.find();
	}
})
Template.about.helpers({
	about: function(){
		return About.findOne({});
	}
	
});

Template.registerHelper('optionsHelper', function(){
	return {
			wysiwyg: true,
			eventType: "dblclick",
			textarea: true,
			showToolbar: true
		};
});
Template.registerHelper('isAdmin', function(){
	return Meteor.userId()===Meteor.users.findOne({username: "admin"})["_id"];
});