Cloudinary.config({
  cloud_name: 'dvztnrdqc',
  api_key: '992122492835359',
  api_secret: 'kTd_5V6DXe5ti9mLxYvV9lTvoAM'
});

Meteor.startup(function(){
	if (Teachers.find().count() === 0){
		console.log("adding teacher post");
		Teachers.insert({content: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"});
	}
	if (Programming.find().count() === 0){
		console.log("adding programming post");
		Programming.insert({content: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"});
	}
	if (About.find().count() === 0){
		console.log("adding programming post");
		About.insert({content: "<h2>About Us</h2><p style='font-style: italic'>The mission of Urban Debate is simple, to teach urban kids to think, communicate, collaborate, and love learning. We want every student to graduate from high school prepared to succeed in their future endeavors, and to contribute to their community. Policy Debate builds these crucial skills and inspires students to enjoy learning. Urban Debate programming is key to bringing policy debate back to urban cities where such opportunities have become scarce.<br><br>Debate has a long and exciting history in the Washington area, the center of our nation's democracy. Sadly, these opportunities are only consistently found in elite, private institutions. The Washington Urban Debate League exclusively serves public school students at the middle and high school level. We especially encourage the participation of students of color and those from financially disadvantaged backgrounds to participate, and want our league to reflect the rich diversity of the metro area.<br><br>As member of NAUDL, the National Association of Urban Debate Leagues, and a partner of DCPS, we have substantial resources to provide policy debate programming to middle and high school students in Washington area public schools. Our staff works to provide high quality debate tournaments, after school and lunchtime activities, and other programming for our students, free of charge to them and their schools. Our staff is dedicated to developing strong teacher-coaches in our partner schools. Together, we offer expert coaching, judging, and mentorship to all participants.</p><p>--<br>David Trigaux</p><p>Program Director<br>Washington Urban Debate League</p><p>Contact Information:<br>202-770-7887<br><a href='david.trigaux@urbandebate.org'>david.trigaux@urbandebate.org</a></p><p>Follow us on social media:<br><a href='https://www.facebook.com/washingtonurbandebateleague'>link</a></p>"});
	}
	if (Impact.find().count() == 0){
		console.log("adding impact post");
		Impact.insert({content: "<p>The Washington Urban Debate League believes that debate is a fun way to get students interested in learning. Our approach isn't just based on thought; it is grounded in external peer-reviewed research.</p>"})
	}
	if (ImpactGrades.find().count() === 0){
		ImpactGrades.insert({content: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"});
	}
	if (ImpactGraduation.find().count() === 0){
		ImpactGraduation.insert({content: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"});
	}
	if (ImpactScores.find().count() === 0){
		ImpactScores.insert({content: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"});
	}
	if (ImpactAttendance.find().count() === 0){
		ImpactAttendance.insert({content: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"});
	}
	if (ImpactCollege.find().count() === 0){
		ImpactCollege.insert({content: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"});
	}
});
Meteor.methods({
	sendEmail: function(to, from, subject, text) {
		check([to, from, subject, text], [String]);
		this.unblock();

		Email.send({
			to: to,
			from: from,
			subject: subject,
			text: text
		});
	}
});
