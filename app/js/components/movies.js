"use strict";

const movies = {
  templateUrl: `app/js/templates/movies.html`,

  controller: ["MovieService", function(MovieService) {
    const vm = this;
    
    vm.search = (searchWord) => {
      MovieService.resetResultsArr();
      MovieService.search(searchWord);
    }
  }]

  
}


angular
  .module("app")
  .component("movies", movies);