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

Template.schedule.helpers({
	schedule: function () {
		return Schedule.findOne({});
	}
});

Template.tournaments.helpers({
	tournaments1: function () {
		return Tournaments1.findOne({});
	},
	tournaments2: function () {
		return Tournaments2.findOne({});
	},
	tournaments3: function () {
		return Tournaments3.findOne({});
	}
});

Template.udlmodel.helpers({
	udlmodel: function () {
		return UDLModel.findOne({});
	},
	udldata: function() {
		return UDLData.findOne({});
	},
	udlgoals: function() {
		return UDLGoals.findOne({});
	},
	udldebate: function() {
		return UDLDebate.findOne({});
	}
});

Template.camp.helpers({
	camp: function () {
		return Camp.findOne({});
	},
	campapp: function() {
		return Campapp.findOne({});
	},
	campschedule: function() {
		return Campschedule.findOne({});
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