var name = "Frank James";
var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Sidekick";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var bio = {
	"name":"Frank James",
	"role": "Sidekick",
	"welcomeMessage":"My brother was Jesse - yes, that Jesse",
	"contacts": {
		"mobile":"323 555 1212",
		"email":"frankjames@jessejamesmail.com",
		"github":"FrankJamesCodes",
		"twitter":"@FrankJames",
		"location": "Tombstone"
		},
	"picture": "images/frank-james.jpg",
	"skills": ["hunting","fishing","shooting"]
}


var work = {
	"jobs": [
		{
			"employer":"JJ Industries",
			"title":"Assistant Robber",
			"location":"Dodge City",
			"dates":"1870-75",
			"description":"Played a major support role in robbing banks."
		},
		{
			"employer":"The Gem",
			"title":"Spitoon Washer",
			"location":"Deadwood",
			"dates":"1875 - Present",
			"description":"Managed fast-paced spitting concession."
		}
		]

}


var projects = {
	"projects": [
		{
			"title": "Cleaning the Rooms",
			"dates": "1875-1880",
			"description": "A major initiative where I began the first effort to actually clean the rooms of the Gem. Previously, we just never cleaned them.",
			"images": [ "images/deadwood_gem_1.jpg", "images/deadwood_gem_2.jpg", "images/deadwood_gem_3.jpg"]
			},
		{
			"title": "Street Cleaning",
			"dates": "1877-1890",
			"description": "After pointing out the streets were filthy, I was volunteered for cleaning the streets of Deadwood for the first time ever, all by myself, for the next several years. Highly successful!",
			"images": ["images/deadwood_gem_street_1.jpg", "images/deadwood_gem_street_2.jpg", "images/deadwood_gem_street_3.jpg"]
			}
		]
}


var education = {
	"schools": [
		{
		"name":"College of Hard Knocks",
		"city":"Topeka",
		"majors":["Shooting","fishing"],
		"dates":"1866-1870",
		"courseLinks":"http://www.collegeofhardknocks.com"
			},
		{
		"name":"School of Gun Sports",
		"city":"Witchita",
		"majors":["Aiming"],
		"dates":"1860-1864",
		"courseLinks":"http://www.schoolofgunsports.org"
			}
		],
	"onlineCourses":[
		{
			"title": "Beginner Lockpicking",
			"school": "PreInternet Academy",
			"dates": 1880,
			"url": "http://www.preinternetacademy.com"
			},
		{
			"title": "Advanced Bailment",
			"school": "19th Century Online Police Academy",
			"dates": 1881,
			"url": "http://www.19opd.com"
			}
		]
}

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	
	var formattedHTMLskill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedHTMLskill);

	var formattedHTMLskill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedHTMLskill);

	var formattedHTMLskill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedHTMLskill);

};

var displayWork = function() {
	for (index in work.jobs) {
		$("#workExperience").append(HTMLworkStart);


		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[index].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[index].title);
		var formattedWorkDate = HTMLworkDates.replace("%data%", work.jobs[index].dates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[index].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[index].description);

		var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedWorkDate + formattedWorkLocation + formattedWorkDescription;
		$(".work-entry:last").append(formattedEmployerTitle);
	}
};

displayWork();

/*
var inName = function() {
	nameArray = name.trim().split(" ");

	firstNameFirstLetter = nameArray[0].charAt(0).toUpperCase();
	restOfFirstName = nameArray[0].slice(1).toLowerCase();
	nameArray[0] = firstNameFirstLetter + restOfFirstName;
	
	nameArray[1] = nameArray[1].toUpperCase();
	
	internationalName = nameArray[0] + " " + nameArray[1];
	return internationalName;

}

$("#main").append(internationalizeButton); */

projects.display = function() {
	for (index in projects.projects) {
		$("#projects").append(HTMLprojectStart);
	var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[index].title);
	var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[index].dates);
	var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[index].description);
	
	var formattedProjectImages = "";
	if (projects.projects[index].images.length > 0){
		
		for (image in projects.projects[index].images) {
			var formattedNextProjectImage = HTMLprojectImage.replace("%data%", projects.projects[index].images[image]);
			formattedProjectImages = formattedProjectImages + formattedNextProjectImage;
		}
	};

	var formattedProjectItems = formattedProjectTitle + formattedProjectDates + formattedProjectDescription + formattedProjectImages;
	$(".project-entry:last").append(formattedProjectItems);
}
};

projects.display();

$("#mapDiv").append(googleMap);













