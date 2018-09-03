"use strict";

const mainPage = {
  templateUrl: `app/js/templates/mainPage.html`,

  controller: ["SearchService", "$location", function(SearchService, $location) {
    const vm = this;
    vm.search = (searchWord) => {
      SearchService.resetResultsArr();
      SearchService.search(searchWord).then(vm.results = SearchService.results);
    }

    vm.getMovie = (id) => {
      SearchService.getImdb(id).then((response) => {
        vm.movie = SearchService.imdbs;
        $location.url("/details");
      });
    }
  }]
}

angular
  .module("app")
  .component("mainPage", mainPage);
