Template.memberpost.events({
	'submit form': function (e, t) {
		e.preventDefault();

		var files = [];
		var file = $('#userimage')[0].files[0];
		var name = $('#inputName').val();
		var position = $('#inputPosition').val();
		var bio = $('#summernote').summernote('code');
		var email = $('#inputEmail').val();
		var files = [];
		var file = $('#userimage')[0].files[0];
		files.push(file);
		Cloudinary.upload(files, {
	      public_id: "MEMBER_" + name
	    }, function(result){console.log(result);});

	    Members.insert({name: name, position: position, bio: bio, email: email});
	}
});

Template.member.helpers({
	formatTitle: function(){
    	return "MEMBER_" + this.name;
  	}
});

Template.member.events({
	'click .glyphicon-remove': function(e, t){
	    e.preventDefault();

	    Cloudinary.delete('MEMBER_' + e.target.id, function(result){
	      console.log(result);
	    });

	    Members.remove({_id: Members.findOne({name: e.target.id})["_id"]});
	}
});

Template.meettheteam.helpers({
	members: function () {
		return Members.find();
	}
});

Template.memberpost.onRendered(function(){
  this.$('#summernote').summernote({
    height: 200,
    focus: true
  });
});