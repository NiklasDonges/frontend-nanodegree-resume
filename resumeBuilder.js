

if (0<10){
var formattedName = HTMLheaderName.replace("%data%", "Niklas Donges");
$("#header").append(formattedName);
var formattedRole = HTMLheaderRole.replace("%data%", "FULL-STACK WEBDEVELOPER");
$("#header").append(formattedRole);
}


var bio = {
	"name": "Niklas Donges",
	"role": "Web Developer",
	"contacts": {
		"mobile": "12345678",
		"email": "donges-niklas@gmx.de",
		"github": "NiklasDonges",
		"twitter": "None",
		"location": "Marburg"
},
"welcomeMessage": "Hey there! I am getting a Senior Web Developer in just 3months!",
"skills": [
	"awesomeness", "delivering things", "get things done", "learning"
],
"bioPic": ["http://www.punkerslut.com/graphics-library-of-revolution-and-social-justice/anonymous-and-anonymous-movement/vectorportal---1/vectorportal---1__200x200.jpg"]
}

if (bio.skills.length > 1){
	var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedPic);
}





var education = {
	"schools": [
	{
		"name":"Stadtschule",
		"city":"Biedenkopf",
		"degree":"mittlere Reife",
		"dates":"2013",
		"major":"hey",
	},
	{
		"name":"Fachoberschule",
		"city":"Biedenkopf",
		"degree":"Fachhochschulreife",
		"dates":"2015",
		"major":"hey",
	}
	],
	"onlineCourses": [
	{
		"title":"Front-End Degree",
		"school":"Udacity",
		"dates":"2017",
		"major":"hey",
	}
  ]
}


if (bio.skills.length > 0){
	$("#Education").append(HTMLschoolStart);
	
	var formattedschoolname = HTMLschoolName.replace("%data%", education.schools.name);


	var formattedschooldegree = HTMLschoolDegree.replace("%data%", education.schools.degree);

	var formattedschoolTitle = formattedschoolname + formattedschooldegree;

	$("#education").append(formattedschoolTitle);

	var formattedschooldates = HTMLschoolDates.replace("%data%", education.schools.dates);
	$("#education").append(formattedschooldates);

	var formattedschollmajors = HTMLschoolMajor.replace("%data%", education.schools.major);
	$("#education").append(formattedschollmajors);
}	


if (bio.skills.length > 0){
	var formattedname = HTMLmobile.replace("%data%", bio.contacts.mobile );
	$("#topContacts").append(formattedname);

	var formattedemail = HTMLemail.replace("%data%", bio.contacts.email );
	$("#topContacts").append(formattedemail);

	var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github );
	$("#topContacts").append(formattedgithub);

	var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter );
	$("#topContacts").append(formattedtwitter);

	var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location );
	$("#topContacts").append(formattedlocation);

}
if (bio.skills.length > 0){
	var formattedworkDescription = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage );
	$("#header").append(formattedworkDescription);
}



/* --------------------- */

var work = {
  "jobs": [
    {
      "employer": "Udacity",
      "title": "Course Developer",
      "location": "Mountain View, CA",
      "dates": "Feb 2014 - Current",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LearnBIG",
      "title": "Software Engineer",
      "location": "Seattle, WA",
      "dates": "May 2013 - Jan 2014",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LEAD Academy Charter High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jul 2012 - May 2013",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "Stratford High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jun 2009 - Jun 2012",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }
  ]
};


var projects = {
	"projects": [
	{
		"name":"Ober Handlesschule",
		"city":"Biedenkopf",
		"degree":"höhere Reife",
		"majors":"no major",
		"dates":"2011",
		"url":"https:keineahnungvier.com",
		"images": ["http://cdn.business2community.com/wp-content/uploads/2016/03/Vd3MJo.jpg"]
	},
	{
		"name":"Ober Handlesschule",
		"city":"Biedenkopf",
		"degree":"höhere Reife",
		"majors":"no major",
		"dates":"2011",
		"url":"https:keineahnungvier.com",
		"images":["http://cdn.business2community.com/wp-content/uploads/2016/03/Vd3MJo.jpg"]
	},
  ]
}

if (bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0] );
	$("#skills").append(formattedSkill);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1] );
	$("#skills").append(formattedSkill);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2] );
	$("#skills").append(formattedSkill);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[3] );
	$("#skills").append(formattedSkill);
}

function displayWork() {
for (job in work.jobs) {


	$("#workExperience").append(HTMLworkStart);



	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);


	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);

	

}
}

displayWork();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});


projects.display = function () {
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);	

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title)
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates)
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description)
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0){
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);

			}
		}
	}
}
projects.display();
$("#mapDiv").append(googleMap);




