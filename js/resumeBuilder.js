use strict;
//Bio Object
var bio = {
	"name":"Janhavi Bhedasgaonkar",
	"role":"Full Stack Developer",
	"contacts":{
		"mobileNo": "408-220-5497",
		"emailid":"janhavibhedasgaonkar@gmail.com",
		"githubid":"janhavibhedasgaonkar",
		"location":"Sunnyvale, CA"
	},
	"pictureUrl": './images/fry.jpg',
	"welcomeMsg":"Hi! Check this out!",
	"skills":["JavaScript","AngularJS","Node.js","CSS","HTML"]
};


bio.display = function(){
	if(bio.skills.length > 0){
		$("#header").append(HTMLskillsStart);
		for(var i = 0 ; i < bio.skills.length;i++){
			var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
			$("#skills").append(formattedSkill);
		}
	}
	var formattedName  = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var mybioPic  = HTMLbioPic.replace("%data%",bio.pictureUrl);
	$("#header").append(mybioPic);
 	//ContactInfo Header

	var contactInfo = $("#topContacts");
	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobileNo);
	contactInfo.append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.emailid);
	contactInfo.append(formattedEmail);
	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	contactInfo.append(formattedGithub);


 	//ContactInfo Footer
	var contactFooter = $("#footerContacts");
	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobileNo);
	contactFooter.append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.emailid);
	contactFooter.append(formattedEmail);
	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	contactFooter.append(formattedGithub);
}

bio.display();
//Work Object
var work = {
	"jobs":[{
		"employer" : "Samsung",
		"title" : "Full Stack Developer",
		"location": "Sunnyvale CA",
		"dates": "Sep-2014 - Current",
		"desc": "Development of Content Management System portal to manage music content."
	},{
		"employer" : "Ericsson",
		"title" : "Engineering Intern",
		"location": "Sunnyvale CA",
		"dates": "Sep-2013 - May-2014",
		"desc": "Development of Test Request Management System to manage automatic submission of test requests"
	},{
		"employer" : "Barclays",
		"title" : "Engineering Intern",
		"location": "Pune India",
		"dates": "Mar-2010- Aug-2012",
		"desc": "Development of Test Request Management System to manage automatic submission of test requests"
	}
	]
};


//Work projects
work.displayWork = function(){
	for(var i in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var employer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
		var title = HTMLworkTitle.replace("%data%",work.jobs[i].title);
		$(".work-entry:last").append(employer + title);
		var workDate = HTMLworkDates.replace("%data%",work.jobs[i].dates);
		$(".work-entry:last").append(workDate);
		var workLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
		$(".work-entry:last").append(workLocation);
		var workDesc = HTMLworkDescription.replace("%data%", work.jobs[i].desc);
		$(".work-entry:last").append(workDesc);
	}
}

work.displayWork();

//Education object
var education = {
	"schools":[
		{
			"name": "San Jose State University",
			"degree": "Masters of Science",
			"yrs": 2014,
			"location": "Sunnyvale, California",
			"majors": ["Software Engineering"]
		},
		{
			"name":"AISSMS",
			"degree": "Bachelors Degree",
			"yrs": 2009,
			"location": "Pune, India",
			"majors": ["Computer Science"]
		}
	],
	"onlineCourses": [
	{
		"name" : "JavaScript Nano degree",
		"school": "Udacity",
		"yrs" : 2015
	}]
};


education.display  = function(){
	for(var i=0 ; i < education.schools.length; i++){
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[i].name);
		$(".education-entry:last").append(formattedSchoolName);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
		$(".education-entry:last").append(formattedSchoolDegree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].yrs);
		$(".education-entry:last").append(formattedSchoolDates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
		$(".education-entry:last").append(formattedSchoolLocation);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
		$(".education-entry:last").append(formattedSchoolMajor);
	}

	for(var i=0 ; i < education.onlineCourses.length ;i++){
		$("#education").append(HTMLonlineClasses);
		$("#education").append(HTMLschoolStart);
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[i].name);
		$(".education-entry:last").append(formattedOnlineTitle);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school);
		$(".education-entry:last").append(formattedOnlineSchool);
		var formattedOnlineDate = HTMLonlineDates.replace("%data%",education.onlineCourses[i].yrs);
		$(".education-entry:last").append(formattedOnlineDate);

	}

}

education.display();
//Projects object


var projects = {
	"projects" : [
		{
			"title":"Flexible Station Tree", 
			"dates": "Sep 2014-Mar 2015",
			"desc":"Content Management System Portal to manage the music content from third party music vendors and developed using AngularJS on Front end and Node.js on backend",
			"images": []
		},
		{
			"title":"In App Notifications",
			"dates":"Mar 2015-Jun 2015",
			"desc":"Admin tool to create/edit/clone/delete InApp notifications developed using AngularJS on front end and node.js on backend",
			"images":[]
		},
		{
			"title":"Sports Talk Radio Ingestion",
			"dates":"Jun 2015-July 2015",
			"desc":"Ingestion tool to parse the Sports Talk meta data from sportsLab and ingesting the content in cloudant using Node.js",
			"images":[]
		}
	]
};

projects.display = function(){
	for(var i = 0 ; i < this.projects.length ; i++){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",this.projects[i].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDate = HTMLprojectDates.replace("%data%",this.projects[i].dates);
		$(".project-entry:last").append(formattedDate);
		var formattedDesc = HTMLprojectDescription.replace("%data%",this.projects[i].desc);
		$(".project-entry:last").append(formattedDesc);
	}
}

projects.display();

//Map of work places
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
