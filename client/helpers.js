Template.teachers.helpers({
	teachers: function(){
		return Teachers.findOne({});
	},
	optionsHelper: function () {
		return {
			wysiwyg: true,
			eventType: "dblclick",
			textarea: true,
			showToolbar: true
		};
	}
});
Template.programming.helpers({
	programming: function(){
		return Programming.findOne({});
	},
	optionsHelper: function () {
		return {
			wysiwyg: true,
			eventType: "dblclick",
			textarea: true,
			showToolbar: true
		};
	}
});
Template.about.helpers({
	about: function(){
		return About.findOne({});
	},
	optionsHelper: function () {
		return {
			wysiwyg: true,
			eventType: "dblclick",
			textarea: true,
			showToolbar: true
		};
	}
});