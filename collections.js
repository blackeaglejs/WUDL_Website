//Setting up CollectionFS

var dropboxStore = new FS.Store.Dropbox("files", {
  key: "o0mx8wpdv30ushe",
  secret: "5zz4g0mv8397yad",
  token: "6TaHAQONRxkAAAAAAAAAn-RwJYnRtO1IqkXniBFLwkO-J-7abvTyn48rqa6UB5CJ", // Don’t share your access token with anyone.
  folder: "WUDLText", //optional, which folder (key prefix) to use 
});

var dropboxStore2 = new FS.Store.Dropbox("files2", {
  key: "o0mx8wpdv30ushe",
  secret: "5zz4g0mv8397yad",
  token: "6TaHAQONRxkAAAAAAAAAn-RwJYnRtO1IqkXniBFLwkO-J-7abvTyn48rqa6UB5CJ", // Don’t share your access token with anyone.
  folder: "WUDLText", //optional, which folder (key prefix) to use 
});

var dropboxStore3 = new FS.Store.Dropbox("files3", {
  key: "o0mx8wpdv30ushe",
  secret: "5zz4g0mv8397yad",
  token: "6TaHAQONRxkAAAAAAAAAn-RwJYnRtO1IqkXniBFLwkO-J-7abvTyn48rqa6UB5CJ", // Don’t share your access token with anyone.
  folder: "WUDLText", //optional, which folder (key prefix) to use 
});

var dropboxStore4 = new FS.Store.Dropbox("files4", {
  key: "o0mx8wpdv30ushe",
  secret: "5zz4g0mv8397yad",
  token: "6TaHAQONRxkAAAAAAAAAn-RwJYnRtO1IqkXniBFLwkO-J-7abvTyn48rqa6UB5CJ", // Don’t share your access token with anyone.
  folder: "WUDLText", //optional, which folder (key prefix) to use 
});

var dropboxStore5 = new FS.Store.Dropbox("files5", {
  key: "o0mx8wpdv30ushe",
  secret: "5zz4g0mv8397yad",
  token: "6TaHAQONRxkAAAAAAAAAn-RwJYnRtO1IqkXniBFLwkO-J-7abvTyn48rqa6UB5CJ", // Don’t share your access token with anyone.
  folder: "WUDLText", //optional, which folder (key prefix) to use 
});

//This is The Coaching Resource
Files = new FS.Collection("files", {
  stores: [dropboxStore]
});

MeetingResource = new FS.Collection("files2", {
	stores: [dropboxStore2]
});

Teacherss = new FS.Collection("files3", {
	stores: [dropboxStore3]
});

EvidenceFiles = new FS.Collection("files4", {
  stores: [dropboxStore4]
});

ProfFiles = new FS.Collection('files5', {
  stores: [dropboxStore5]
});


//Normal Mongo DBs

TeacherQuote = new Mongo.Collection('teacherquote');

ResultList = new Mongo.Collection('resultlist');

Members = new Mongo.Collection('members');

Teachers = new Mongo.Collection('teachers');

Programming = new Mongo.Collection('programming');

About = new Mongo.Collection('about');

Impact = new Mongo.Collection('impact');
ImpactGraduation = new Mongo.Collection('impactgraduation');
ImpactGrades = new Mongo.Collection('impactgrades');
ImpactScores = new Mongo.Collection('impactscores');
ImpactAttendance = new Mongo.Collection('impactattendance');
ImpactCollege = new Mongo.Collection('impactcollege');
ImpactQuote = new Mongo.Collection('impactquote');

Schedule = new Mongo.Collection('schedule');

Tournaments1 = new Mongo.Collection('tournaments1');
Tournaments2 = new Mongo.Collection('tournaments2');
Tournaments3 = new Mongo.Collection('tournaments3');

UDLModel = new Mongo.Collection('udlmodel');
UDLData = new Mongo.Collection('udldata');
UDLGoals = new Mongo.Collection('udlgoals');
UDLDebate = new Mongo.Collection('udldebate');

Camp = new Mongo.Collection('camp');
Campapp = new Mongo.Collection('campapp');
Campschedule = new Mongo.Collection('campschedule');

Startteam1 = new Mongo.Collection('startteam1');
Startteam2 = new Mongo.Collection('startteam2');
Startteam3 = new Mongo.Collection('startteam3');
Startteam4 = new Mongo.Collection('startteam4');

Involve1 = new Mongo.Collection('involve1');
Involve2 = new Mongo.Collection('involve2');
Involve3 = new Mongo.Collection('involve3');
Involve4 = new Mongo.Collection('involve4');
Involve5 = new Mongo.Collection('involve5');
Volunteerpolicies = new Mongo.Collection('volunteerpolicies');

Topic1 = new Mongo.Collection('topic1');
Topic2 = new Mongo.Collection('topic2');

Coaching = new Mongo.Collection('coaching');

Profdev = new Mongo.Collection('profdev');

Pdebate1 = new Mongo.Collection('pdebate1');

Evidence = new Mongo.Collection('evidence');
Evidence2 = new Mongo.Collection('evidence2');

Meeting = new Mongo.Collection('meeting');

ImageInfo = new Mongo.Collection('imageinfo');




