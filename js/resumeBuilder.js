/*var name = "Frank James";
var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Sidekick";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);*/



var bio = {
	"name":"Frank James",
	"role": "Sidekick",
	"contacts": {
		"mobile":"323 555 1212",
		"email":"frankjames@thegemsaloon.com",
		"github":"FrankJamesCodes",
		"twitter":"@FrankJames",
		"location": "Tombstone"
		},
	"welcomeMessage":"My brother was Jesse - yes, that Jesse",
	"skills": ["hunting","fishing","shooting"],
	"biopic": "images/frank-james.jpg",
	"display": function() {
		//$("#topContacts").append(HTMLcontactGeneric);
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);

		$("#topContacts:last").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		$("#topContacts:last").append(HTMLemail.replace("%data%", bio.contacts.email));
		$("#topContacts:last").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
		$("#topContacts:last").append(HTMLgithub.replace("%data%", bio.contacts.github));
		//$("#topContacts:last").append(HTMLblog.replace("%data%", bio.contacts.mobile));
		$("#topContacts:last").append(HTMLlocation.replace("%data%", bio.contacts.location));

		$("#topContacts").after(HTMLbioPic.replace("%data%", bio.biopic));
		$(".biopic").after(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			
				for (index in bio.skills) {
				var formattedHTMLskill = HTMLskills.replace("%data%", bio.skills[index]);
				$("#skills").append(formattedHTMLskill);
			}
/*
				var formattedHTMLskill = HTMLskills.replace("%data%", bio.skills[1]);
				$("#skills").append(formattedHTMLskill);

				var formattedHTMLskill = HTMLskills.replace("%data%", bio.skills[2]);
				$("#skills").append(formattedHTMLskill);*/
		}
	}
}




/*
var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class=" flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';
*/




var education = {
	"schools": [
		{
		"name":"College of Hard Knocks",
		"location":"Topeka",
		"degree": "Certificate of Attendance",
		"majors":["Hunting" , "Fishing"],
		"dates": 1870,
		"url":"http://www.collegeofhardknocks.com"
			},
		{
		"name":"School of Gun Sports",
		"location":"Witchita",
		"degree": "Certificate of Appreciation",
		"majors":["Shooting"],
		"dates": 1864,
		"url":"http://www.schoolofgunsports.org"
			}
		],
	"onlineCourses":[
		{
			"title": "Beginner Lockpicking",
			"school": "PreInternet Academy",
			"date": 1880,
			"url": "http://www.preinternetacademy.com"
			},
		{
			"title": "Advanced Bailment",
			"school": "19th Century Online Police Academy",
			"date": 1881,
			"url": "http://www.19opd.com"
			}
		],
		"display": function () {
			for (index in education.schools) {
				$("#education").append(HTMLschoolStart);
				
				var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[index].name);
				var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[index].degree);
				var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[index].location)
				var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[index].dates);
				var schoolList = "";
				for (item in education.schools[index].majors) {
					schoolList = schoolList + " " + education.schools[index].majors[item];
					if (item < (education.schools[index].majors.length -1 )) {
						schoolList = schoolList + ",";
						}
				var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", schoolList.trim());
				if (education.schools[index].majors.length > 1 ) {
					formattedSchoolMajor = formattedSchoolMajor.replace("Major", "Majors");
					}
				}

				var formattedSchoolItem = formattedSchoolName + formattedSchoolDegree + formattedSchoolLocation + formattedSchoolDates + formattedSchoolMajor;

				$(".education-entry:last").append(formattedSchoolItem);
				}
			$("#education").append(HTMLonlineClasses);
			
			for (index in education.schools) {
				$("#education").append(HTMLschoolStart);
				
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[index].title);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[index].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[index].date)
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[index].url);
				
				var formattedOnlineCourseItem = formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineURL;

				$(".education-entry:last").append(formattedOnlineCourseItem);
			}
		}
	}
/*
//var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';
*/


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
		],
	"display": function() {
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
		}
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
		],
		"display": function() {
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
			}
}


bio.display();

education.display();

work.display();

projects.display();

$("#mapDiv").append(googleMap);


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













