Router.configure({
	layoutTemplate: 'layout',
	yieldTemplates: {
		'home': {to: 'home'},
		'about': {to: 'about'},
		'programming': {to: 'programming'},
		'contact': {to: 'contact'},
		'impact': {to: 'impact'},
		'involve': {to: 'involve'},
		'students': {to: 'students'},
		'teachers': {to: 'teachers'},
		'meettheteam': {to: 'meettheteam'},
		'schedule': {to: 'schedule'},
		'tournaments': {to: 'tournaments'},
		'udlmodel': {to: 'udlmodel'},
		'camp': {to: 'camp'},
		'professionaldevelopment': {to: 'professionaldevelopment'},
		'startteam': {to: 'startteam'},
		'topicresources': {to: 'topicresources'},
		'coachingresources': {to: 'coachingresources'},
		'meeting': {to: 'meeting'},
		'policydebate': {to: 'policydebate'},
		'evidence': {to: 'evidence'},
		'results': {to: 'results'},
		'imageupload': {to: 'imageupload'}
	}
});

Router.map(function(){
	this.route('Home', {
		path: '/',
		template: 'layout',
		data: function(){
			Session.set('url', 'home');
		}
	});
	this.route('Pages', {
		path: '/:name',
		template: 'layout',
		data: function(){
			Session.set('url', this.params.name);
		}
	});
});