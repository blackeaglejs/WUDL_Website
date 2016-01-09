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