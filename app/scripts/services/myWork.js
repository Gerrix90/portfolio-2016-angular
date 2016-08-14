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
        		"id": "mbp",
        		"name": "Mack Boring",
        		"agency": "Delia Associates",
        		"role": "Front-End Developer",
        		"link": "http://www.mackboring.com/",
            "about": "Mack Boring & Parts Company is a leading provider of power products and solutions, including diesel engines and power generation systems, to the recreational and commercial marine, industrial, off highway and military markets.",
            "responsibilities": "This responsive site was built with a custom wordpress theme from the ground up. Using advanced custom fields for client usability. Custom Post types for product organization. Bourbon neat for grid, Scss for CSS preprocessor, Javascript for interactivity.  Photoshop to edit images."
        	},
        	{
        		"id": "pfc",
        		"name": "Pinnacle FCU",
        		"agency": "Delia Associates",
        		"role": "Front-End Developer",
        		"link": "https://www.pinnaclefcu.com/",
            "about": "Pinnacle Federal Credit Union offer financial services including savings, checking, direct deposit, secured and unsecured loans, online banking and much more.",
            "responsibilities": "This responsive site was built with a custom wordpress theme from the ground up. Using advanced custom fields for client usability. Custom Post types for product organization. Bourbon neat for grid, Scss for CSS preprocessor, Javascript for interactivity.  Photoshop to edit images."
        	},
        	{
        		"id": "mdp",
        		"name": "Meyer Depew",
        		"agency": "Delia Associates",
        		"role": "Front-End Developer",
        		"link": "http://www.meyer-depew.com/",
            "about": ""
        	},
          {
        		"id": "lhs",
        		"name": "Lee H. Smith & Company",
        		"agency": "Delia Associates",
        		"role": "Front-End Developer and Designer",
        		"link": "http://www.leehsmith.com/",
            "about": "Lee H. Smith delivers highly responsive customer-focused service selling kosher and non-kosher products in very small to large quantities.",
            "about": "Mack Boring & Parts Company is a leading provider of power products and solutions, including diesel engines and power generation systems, to the recreational and commercial marine, industrial, off highway and military markets.",
            "responsibilities": "For Lee H. Smith, my responsibilites extended beyond development. With input from my peers, I was responsible for the design of this site. This responsive site was built with a custom wordpress theme from the ground up. Using advanced custom fields for client usability. Bourbon neat for grid, Scss for CSS preprocessor, Javascript for interactivity. Photoshop to edit images."
        	}
      ];
    };
  };
});
