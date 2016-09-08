Tracker.autorun(function(){
  Meteor.subscribe('lazyload-posts', Session.get('lazyloadLimit'));
});

Template.imageupload.events({
	'submit form': function(e, t){
		e.preventDefault();

		var files = [];
		var file = $('#userimage')[0].files[0];
		var name = $('#inputName').val();
		var description = $('#inputDescription').val();
		var photographer = $('#photographerName').val();
		var tournament = $('#tournament').val();
		var inpicture = $('inPicture').val();
		var orientation;
    	if ($('#checkOrientation').prop("checked")){
      		orientation = 'portrait';
    	}else{
      		orientation = 'landscape';
    	}
    	var frontpage;
    	if ($('frontPage').prop("checked")){
    		frontpage = 'true';
    	}else{
    		frontpage = 'false';
    	}
    	console.log(name + " " + photographer + "" + description + "" + tournament);
    	files.push(file)
    	console.log(file)
    	ImageInfo.insert({name: name, 
    					 description: description, 
    					 photographer: photographer,
    					 tournament: tournament,
    					 inpicture: inpicture,
    					 orientation: orientation,
    					 frontpage: frontpage});
	}
})