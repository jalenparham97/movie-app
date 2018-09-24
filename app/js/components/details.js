"use strict";

const more = {
  templateUrl: `app/js/templates/details.html`,

  controller: ["SearchService", function(SearchService) {
    const vm = this;
    vm.movie = SearchService.movie;
    console.log(vm.movie);
  }]
}

angular
  .module("app")
  .component("more", more);