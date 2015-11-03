var bio = {
    "name": "Frank James",
    "role": "Sidekick",
    "contacts": {
        "mobile": "323 555 1212",
        "email": "frankjames@thegemsaloon.com",
        "github": "FrankJamesCodes",
        "twitter": "@FrankJames",
        "location": "Tombstone"
    },
    "welcomeMessage": "My brother was Jesse - yes, that Jesse",
    "skills": ["hunting", "fishing", "shooting"],
    "biopic": "images/frank-james.jpg",
    "display": function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);

        $("#topContacts:last").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
        $("#topContacts:last").append(HTMLemail.replace("%data%", bio.contacts.email));
        $("#topContacts:last").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
        $("#topContacts:last").append(HTMLgithub.replace("%data%", bio.contacts.github));
        $("#topContacts:last").append(HTMLlocation.replace("%data%", bio.contacts.location));

        $("#topContacts").after(HTMLbioPic.replace("%data%", bio.biopic));
        $(".biopic").after(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
        //Checks for skills; then appends if present
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (var index in bio.skills) {
                var formattedHTMLskill = HTMLskills.replace("%data%", bio.skills[index]);
                $("#skills").append(formattedHTMLskill);
            }
        }
    }
};

var education = {
    "schools": [{
        "name": "College of Hard Knocks",
        "location": "Topeka",
        "degree": "Certificate of Attendance",
        "majors": ["Hunting", "Fishing"],
        "dates": 1870,
        "url": "http://www.collegeofhardknocks.com"
    }, {
        "name": "School of Gun Sports",
        "location": "Witchita",
        "degree": "Certificate of Appreciation",
        "majors": ["Shooting"],
        "dates": 1864,
        "url": "http://www.schoolofgunsports.org"
    }],
    "onlineCourses": [{
        "title": "Beginner Lockpicking",
        "school": "PreInternet Academy",
        "date": 1880,
        "url": "http://www.preinternetacademy.com"
    }, {
        "title": "Advanced Bailment",
        "school": "19th Century Online Police Academy",
        "date": 1881,
        "url": "http://www.19opd.com"
    }],
    "display": function() {
        //var indexSchool = education.schools.length
        for (i = 0; i < education.schools.length; i++) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            //Majors: Gather list of majors, test for multiple majors to format and pluralize 'Major' intro if necessary
            var schoolList = "";
            //Creates Major string, adding comma seperator and spacing where needed
            for (j = 0; j < education.schools[i].majors.length; j++) {
                schoolList = schoolList + " " + education.schools[i].majors[j];
                //comma added to all but last item in from skill array
                if (j < (education.schools[i].majors.length - 1)) {
                    schoolList = schoolList + ",";
                }
                var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", schoolList.trim());
                //Pluralize Major header if necessary
                if (education.schools[i].majors.length > 1) {
                    formattedSchoolMajor = formattedSchoolMajor.replace("Major", "Majors");
                }
            }

            var formattedSchoolItem = formattedSchoolName + formattedSchoolDegree + formattedSchoolLocation + formattedSchoolDates + formattedSchoolMajor;

            $(".education-entry:last").append(formattedSchoolItem);
        }
        $("#education").append(HTMLonlineClasses);

        for (i = 0; i < education.onlineCourses.length; i++) {
            $("#education").append(HTMLschoolStart);

            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);

            var formattedOnlineCourseItem = formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineURL;

            $(".education-entry:last").append(formattedOnlineCourseItem);
        }
    },
    "flipView": function() {
        /*       if ($("#education :last-child").attr('id') !== "hide") {
                 $("#education :first-child").nextAll().attr('id', 'hide');
              } else {
                  $("#education :first-child").nextAll().removeAttr('id');

              }*/
        var hideGroup = $(".hideable-education")
        hideGroup.slideToggle();
    }
};

var work = {
    "jobs": [{
        "employer": "JJ Industries",
        "title": "Assistant Robber",
        "location": "Dodge City",
        "dates": "1870-75",
        "description": "Played a major support role in robbing banks."
    }, {
        "employer": "The Gem",
        "title": "Spitoon Washer",
        "location": "Deadwood",
        "dates": "1875 - Present",
        "description": "Managed fast-paced spitting concession."
    }],
    "display": function() {
        for (i = 0; i < work.jobs.length; i++) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedWorkDate = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

            var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedWorkDate + formattedWorkLocation + formattedWorkDescription;

            $(".work-entry:last").append(formattedEmployerTitle);
        }
    },
    "flipView": function() {
        /*       if ($("#education :last-child").attr('id') !== "hide") {
                 $("#education :first-child").nextAll().attr('id', 'hide');
              } else {
                  $("#education :first-child").nextAll().removeAttr('id');

              }*/
        var hideGroup = $(".hideable-workExperience")
        hideGroup.slideToggle();
    }
};

var projects = {
    "projects": [{
        "title": "Cleaning the Rooms",
        "dates": "1875-1880",
        "description": "A major initiative where I began the first effort to actually clean the rooms of the Gem. Previously, we just never cleaned them.",
        "images": ["images/deadwood-hotel-small_x1.jpg", "images/deadwood_gem_2-small_x1.jpg", "images/deadwood_gem_3-small_x1.jpg"]
    }, {
        "title": "Street Cleaning",
        "dates": "1877-1890",
        "description": "After pointing out the streets were filthy, I was volunteered for cleaning the streets of Deadwood for the first time ever, all by myself, for the next several years. Highly successful!",
        "images": ["images/deadwood_gem_street_1-small_x1.jpg", "images/deadwood_gem_street_2-small_x1.jpg", "images/deadwood_gem_street_3-small_x1.jpg"]
    }],
    "display": function() {
        for (i = 0; i < projects.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

            var formattedProjectImages = "";
            if (projects.projects[i].images.length > 0) {
                formattedProjectImages = HTMLimageHolder;
                for (j = 0; j < projects.projects[i].images.length; j++) {
                    var formattedNextProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
                    formattedProjectImages = formattedProjectImages + formattedNextProjectImage;
                }
                formattedProjectImages += HTMLimageHolderClose;
            }
            var formattedProjectItems = formattedProjectTitle + formattedProjectDates + formattedProjectDescription + formattedProjectImages;

            $(".project-entry:last").append(formattedProjectItems);
        }
    },
    "flipView": function() {
        /*       if ($("#education :last-child").attr('id') !== "hide") {
                 $("#education :first-child").nextAll().attr('id', 'hide');
              } else {
                  $("#education :first-child").nextAll().removeAttr('id');

              }*/
        var hideGroup = $(".hideable-projects")
        hideGroup.slideToggle();
    }

};

var footer = {
    "contacts": {
        "email": "mailto:frankjames@thegemsaloon.com",
        "github": "http://www.github.com/FrankJamesCodes",
        "twitter": "http://www.twitter.com/FrankJames"
    },
    "display": function() {
        if (Object.keys(footer.contacts).length > 0) {
            var formattedFooterContact = "";
            for (i = 0; i < Object.keys(footer.contacts).length; i++) {
                var contactItem = HTMLfooterContact.replace("%data1%", footer.contacts[Object.getOwnPropertyNames(footer.contacts)[i]]);
                contactItem = contactItem.replace("%data2%", Object.getOwnPropertyNames(footer.contacts)[i]);
                $("#footerContacts").append(contactItem);
            }
        }
    }
};

var i, j;

bio.display();

education.display();

work.display();

projects.display();

footer.display();

$("#workExperience :first-child").nextAll().addClass('hideable-workExperience');

$("#workExperience :first-child").on('click', function() {
    work.flipView();
});

$("#projects :first-child").nextAll().addClass('hideable-projects');

$("#projects :first-child").on('click', function() {
    projects.flipView();
});

$("#education :first-child").nextAll().addClass('hideable-education');

$("#education :first-child").on('click', function() {
    education.flipView();
});

$("#mapDiv").append(googleMap);

//("#mapDiv :first-child").nextAll().addClass('hideable-map');

$("#mapDiv :first-child").on('click', function() {
    if ($('#map').css('display') !== "none") {
        $("#mapDiv").animate({
            height: 49
        }, 500);
        $("#map").slideToggle();
    } else {
        $("#mapDiv").animate({
            height: 400
        }, 500);
        $("#map").slideToggle();
    }
});


var inName = function() {
    nameArray = bio.name.trim().split(" ");

    firstNameFirstLetter = nameArray[0].charAt(0).toUpperCase();
    restOfFirstName = nameArray[0].slice(1).toLowerCase();
    nameArray[0] = firstNameFirstLetter + restOfFirstName;

    nameArray[1] = nameArray[1].toUpperCase();

    internationalName = nameArray[0] + " " + nameArray[1];
    return internationalName;
};

$("#main").append(internationalizeButton);
