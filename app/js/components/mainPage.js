"use strict";

const mainPage = {
  templateUrl: `app/js/templates/mainPage.html`,

  controller: ["SearchService", "$location", "MylistService", function(SearchService, $location, MylistService) {
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

    vm.addToList = movie => MylistService.addToList(movie);

    vm.loadMore = () => SearchService.loadMore();
  }]
}

angular
  .module("app")
  .component("mainPage", mainPage);
