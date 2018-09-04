"use strict";

function MovieService($http) {
  const vm = this;
  vm.results = [];
  vm.imdb = null;
  vm.movie = null;

  vm.resetResultsArr = () => {
    vm.results = [];
  }

  vm.search = (searchWord) => {
    return $http({
      method: "GET",
      url: `https://api.themoviedb.org/3/search/movie?api_key=422b1f14ef4eff0f32a9894fac9b11c6&language=en-US&query=${searchWord}&page=1&include_adult=false`
    }).then((response) => {
      console.log(response);
      for(let i = 0; i < response.data.results.length; i++) {
        vm.results.push(response.data.results[i]);
      }
    })
  }

  vm.getImdb = (id) => {
    return $http({
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/ ${id}?api_key=422b1f14ef4eff0f32a9894fac9b11c6&language=en-US`
    }).then((response) => {
      vm.imdb = response.data.imdb_id;
    }).then(() => {
      return $http({
        method: "GET",
        url: `http://www.omdbapi.com/?apikey=bcd4965e&i=${vm.imdb}`
      }).then((response) => {
        vm.movie = response.data;
        console.log(vm.movie);
      });
    });
  }
}

angular
  .module("app")
  .service("MovieService", MovieService);