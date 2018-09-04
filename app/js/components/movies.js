"use strict";

const movies = {
  templateUrl: `app/js/templates/movies.html`,

  controller: ["MovieService","$location", function(MovieService, $location) {
    const vm = this;
    
    vm.search = (searchWord) => {
      MovieService.resetResultsArr();
      MovieService.search(searchWord).then(vm.results = MovieService.results);
      console.log(vm.results);
    }

    vm.getMovie = (id) => {
      MovieService.getImdb(id).then(() => {
        vm.movie = MovieService.imdb;
        $location.url("/details");
      });
    }
  }]

  
}


angular
  .module("app")
  .component("movies", movies);