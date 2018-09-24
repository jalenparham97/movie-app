"use strict";

const movies = {
  templateUrl: `app/js/templates/movies.html`,

  controller: ["SearchService", "MylistService", "$location", function(SearchService, MylistService, $location) {
    const vm = this;

    SearchService.resetResultsArr();
    SearchService.prePopulate().then(vm.results = SearchService.results);
    
    vm.search = searchWord => {
      SearchService.resetResultsArr();
      SearchService.searchOnlyMovies(searchWord).then(vm.results = SearchService.results);
      console.log(vm.results);
    }

    vm.getMovie = id => {
      SearchService.getImdb(id).then(() => {
        vm.movie = SearchService.imdb;
        $location.url("/details");
      });
    }

    vm.addToList = movie => MylistService.addToList(movie);

    vm.loadMore = () => SearchService.loadMoreMovies();
  }]  
}


angular
  .module("app")
  .component("movies", movies);