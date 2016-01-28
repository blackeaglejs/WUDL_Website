Template.memberpost.events({
	'submit form': function (e, t) {
		e.preventDefault();

		var files = [];
		var file = $('#userimage')[0].files[0];
		var name = $('#inputName').val();
		var position = $('#inputPosition').val();
		var bio = $('#inputBiography').val();
		var files = [];
		var file = $('#userimage')[0].files[0];
		files.push(file);
		Cloudinary.upload(files, {
	      public_id: "MEMBER_" + title
	    }, function(result){console.log(result);});
	}
});

Template.member.helpers({
	formatTitle: function(){
    	return "MEMBER_" + this.title;
  	}
});