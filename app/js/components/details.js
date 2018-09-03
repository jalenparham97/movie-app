"use strict";

const more = {
  templateUrl: `app/js/templates/details.html`,

  controller: ["SearchService", "MovieService", function(SearchService, MovieService) {
    const vm = this;
    vm.movie = SearchService.movie || MovieService.movie;
    console.log(vm.movie);
  }]
}

angular
  .module("app")
  .component("more", more);