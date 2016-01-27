Template.contact.events({
	'submit form': function (e, t) {
		e.preventDefault();
		var message = 'name: ' + $('#inputName').val() + '\nEmail: ' + $('#inputEmail').val() + '\nSubject: ' + $('#inputPurpose').val() + '\nContent: ' + $('#inputSubject').val();
		Meteor.call('sendEmail',
					'1551780@gmail.com',
					'hyunraider@yahoo.com',
					'WUDL-Contact',
					message);
		Meteor.call('sendEmail',
					$('#inputEmail').val(),
					'hyunraider@yahoo.com',
					'WUDL',
					'Thank you for your input. We will get back to you as soon as possible.');
		$('#contact-us').each(function(){
      		this.reset();
    	});
	}
});