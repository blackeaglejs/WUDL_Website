Template.pictureupload.events({
	'submit form': function (e, t) {
		e.preventDefault();
		var name = $(e.target).prev().attr('id');
		var files = [];
		var file = $('#userimage')[0].files[0];
		files.push(file);

		Cloudinary.delete(name, function(result){
			console.log(result);
		});

		Cloudinary.uploader.upload(files, {
	      public_id: name
	    }, function(result){console.log(result);});
	}
});

Template.topicresources.helpers({
	topic1: function () {
		return Topic1.findOne({});
	},
	topic2: function () {
		return Topic2.findOne({});
	}
});
Template.teachers.helpers({
	teachers: function(){
		return Teachers.findOne({});
	}
});

Template.ProfessionalDevelopment.helpers({
	professional_development: function(){
		return professional_development.findOne({});
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

Template.startteam.helpers({
	startteam1: function () {
		return Startteam1.findOne({});
	},
	startteam2: function () {
		return Startteam2.findOne({});
	},
	startteam3: function () {
		return Startteam3.findOne({});
	},
	startteam4: function () {
		return Startteam4.findOne({});
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

Template.involve.helpers({
	involve1: function () {
		return Involve1.findOne({});
	},
	involve2: function () {
		return Involve2.findOne({});
	},
	involve3: function () {
		return Involve3.findOne({});
	},
	involve4: function () {
		return Involve4.findOne({});
	},
	involve5: function () {
		return Involve5.findOne({});
	},
});

Template.involvefooter.helpers({
	volunteerpolicies: function () {
		return Volunteerpolicies.findOne({});
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