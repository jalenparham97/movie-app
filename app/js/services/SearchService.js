"use strict" 

function SearchService($http) {
  const vm = this;
  vm.results = [];
  vm.imdb = null;
  vm.movie = null;
  vm.page = 1;
  vm.lastSearchWord = null;
  vm.lastSearchWordMovies = null;

  vm.resetResultsArr = () => {
    vm.results = [];
  }

  vm.search = (searchWord) => {
    vm.page = 1;
    return $http({
      method: "GET",
      url: `https://api.themoviedb.org/3/search/movie?api_key=422b1f14ef4eff0f32a9894fac9b11c6&language=en-US&query=${searchWord}&page=1&include_adult=false`
    }).then((response) => {
      console.log(response);
      vm.lastSearchWord = searchWord;
      for(let i = 0; i < response.data.results.length; i++) {
        vm.results.push(response.data.results[i]);
      }
    });
  }

  vm.searchOnlyMovies = (searchWord) => {
    return $http({
      method: "GET",
      url: `https://api.themoviedb.org/3/search/movie?api_key=422b1f14ef4eff0f32a9894fac9b11c6&language=en-US&query=${searchWord}&page=1&include_adult=false`
    }).then((response) => {
      console.log(response);
      vm.lastSearchWordMovies = searchWord;
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

  vm.loadMore = () => {
    vm.page++;
    console.log(vm.page);
    return $http({
      method: "GET",
      url: `https://api.themoviedb.org/3/search/movie?api_key=422b1f14ef4eff0f32a9894fac9b11c6&language=en-US&query=${vm.lastSearchWord}&page=${vm.page}&include_adult=false`
    }).then((response) => {
      console.log(vm.lastSearchWord);
      console.log(vm.results);
      console.log(response);
      for(let i = 0; i < response.data.results.length; i++) {
        vm.results.push(response.data.results[i]);
      }
    });
  }
  
  vm.loadMoreMovies = () => {
    vm.page++;
    console.log(vm.page);
    return $http({
      method: "GET",
      url: `https://api.themoviedb.org/3/search/movie?api_key=422b1f14ef4eff0f32a9894fac9b11c6&language=en-US&query=${vm.lastSearchWordMovies}&page=${vm.page}&include_adult=false`
    }).then((response) => {
      console.log(vm.lastSearchWordMovies);
      console.log(vm.results);
      console.log(response);
      for(let i = 0; i < response.data.results.length; i++) {
        vm.results.push(response.data.results[i]);
      }
    });
  }

  vm.prePopulate = () => {
    return $http({
      method: "GET",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=422b1f14ef4eff0f32a9894fac9b11c6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    }).then((response) => {
      for(let i = 0; i < response.data.results.length; i++) {
        vm.results.push(response.data.results[i]);
      }
    })
  }
}

angular
  .module("app")
  .service("SearchService", SearchService);