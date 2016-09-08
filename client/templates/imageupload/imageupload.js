Tracker.autorun(function(){
  Meteor.subscribe('lazyload-posts', Session.get('lazyloadLimit'));
});

Template.imageupload.events(
	'submit form': function(e,t) {
		e.preventDefault();

		var files = [];
		var file = $('#userimage')[0].files[0];
		var photographer = $('#photographerName').val();
		var tournament = $('#tournament').val();
		var people_in_picture = $('#inPicture').val();
		var orientation;
    	if ($('#checkOrientation').prop("checked")){
      		orientation = 'portrait';
    	}else{
      		orientation = 'landscape';
    	}
    	files.push(file);
    	
	})