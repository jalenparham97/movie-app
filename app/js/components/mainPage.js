"use strict";

const mainPage = {
  templateUrl: `app/js/templates/mainPage.html`,

  controller: ["SearchService", "$location", function(SearchService, $location) {
    const vm = this;

    SearchService.resetResultsArr();
    SearchService.prePopulate().then(vm.results = SearchService.results);
  
    vm.search = searchWord => {
      SearchService.resetResultsArr();
      SearchService.search(searchWord).then(vm.results = SearchService.results);
    }

    vm.getMovie = id => {
      SearchService.getImdb(id).then(() => {
        vm.movie = SearchService.imdb;
        $location.url("/details");
      });
    }

    vm.loadMore = () => SearchService.loadMore();
  }]
}

angular
  .module("app")
  .component("mainPage", mainPage);
