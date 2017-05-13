'use strict';

/**
 * @ngdoc service
 * @name portfolioApp.myWork
 * @description
 * # myWork
 * Service in the portfolioApp.
 */
angular.module('portfolioApp')
  .service('myWork', function (){
    return function(){
      this.getHeader = function(){
        return {
          name: "Cory Pierson",
          role: "Front-End Developer"
        };
      },
      this.getWork = function(){
        return [
					{
        		"id": "movie-note",
        		"name": "Movie-Note",
        		"agency": "Cory Pierson",
        		"role": "Front-End Developer and Designer",
        		"link": "https://movie-note.firebaseapp.com/",
            "about": "Move-Note is a personal project I created out of my love for movies. Movie-Note allows a user to lookup and save a movie that interests them to a list for future viewing.",
            "responsibilities": "This single page app was built with ReactJS. It uses Firebase for the database and authentication, fetch to call the tmdb api and flexbox for the layout."
        	},
        	{
        		"id": "mbp",
        		"name": "Mack Boring",
        		"agency": "Delia Associates",
        		"role": "Front-End Developer",
        		"link": "http://mbp.delianet.com/",
            "about": "Mack Boring & Parts Company is a leading provider of power products and solutions, including diesel engines and power generation systems, to the recreational and commercial marine, industrial, off highway and military markets.",
            "responsibilities": "This responsive site was built with a custom wordpress theme from the ground up. Using advanced custom fields for client usability. Custom Post types for product organization. Bourbon neat for grid, SCSS for CSS preprocessor, Javascript for interactivity.  Photoshop to edit images."
        	},
          {
        		"id": "gsh",
        		"name": "GSH",
        		"agency": "Delia Associates",
        		"role": "Front-End Developer",
        		"link": "http://www.gshgroup.com/",
            "about": "GSH provides the people, equipment and resources required to maintain your building facilities at their optimum levels of operation.",
            "responsibilities": "This responsive site was built with a custom wordpress theme from the ground up. Using advanced custom fields for client usability. Bootstrap framework, SCSS for CSS preprocessor, Javascript for interactivity.  Photoshop to edit images."
        	},
        	{
        		"id": "pfc",
        		"name": "Pinnacle FCU",
        		"agency": "Delia Associates",
        		"role": "Front-End Developer",
        		"link": "https://www.pinnaclefcu.com/",
            "about": "Pinnacle Federal Credit Union offer financial services including savings, checking, direct deposit, secured and unsecured loans, online banking and much more.",
            "responsibilities": "This responsive site was built with a custom wordpress theme from the ground up. Using advanced custom fields for client usability. Bourbon neat for grid, SCSS for CSS preprocessor, Javascript for interactivity.  Photoshop to edit images."
        	},
          {
            "id": "sdg",
        		"name": "Heim Electronics",
        		"agency": "Delia Associates",
        		"role": "Front-End Developer",
        		"link": "http://www.heimelectronics.com/",
            "about": "Heim Electronics is a leader in the security and safety industry and one of the most respected companies in the field.",
            "responsibilities": "This responsive site was built with a custom wordpress theme from the ground up. Using advanced custom fields for client usability. Bootstrap framework, SCSS for CSS preprocessor, Javascript for interactivity.  Photoshop to edit images."
          },
        	{
        		"id": "mdp",
        		"name": "Meyer Depew",
        		"agency": "Delia Associates",
        		"role": "Front-End Developer",
        		"link": "http://www.meyer-depew.com/",
            "about": "Meyer Depew installs high efficiency heating and air conditioning systems in homes and business's.",
            "responsibilities": "This responsive site was built with a custom wordpress theme from the ground up. Using advanced custom fields for client usability. Bourbon neat for grid, SCSS for CSS preprocessor, Javascript for interactivity.  Photoshop to edit images."
        	},
          {
        		"id": "lhs",
        		"name": "Lee H. Smith & Company",
        		"agency": "Delia Associates",
        		"role": "Front-End Developer and Designer",
        		"link": "http://www.leehsmith.com/",
            "about": "Lee H. Smith delivers highly responsive customer-focused service selling kosher and non-kosher products in very small to large quantities.",
            "responsibilities": "For Lee H. Smith, my responsibilites extended beyond development. With input from my peers, I was responsible for the design of this site. This responsive site was built with a custom wordpress theme from the ground up. Using advanced custom fields for client usability. Bourbon neat for grid, SCSS for CSS preprocessor, Javascript for interactivity. Photoshop to edit images."
        	}
      ];
    };
  };
});
