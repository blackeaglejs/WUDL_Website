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
		'meet-the-team': {to: 'meet-the-team'},
		'schedule': {to: 'schedule'},
		'tournaments': {to: 'tournaments'},
		'udlmodel': {to: 'udlmodel'},
		'camp': {to: 'camp'}
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
