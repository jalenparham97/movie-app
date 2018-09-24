"use strict";

const myList = {
  templateUrl: `app/js/templates/myList.html`,

  controller: ["MylistService", "SearchService", "$location", function(MylistService, SearchService, $location) {
    const vm = this;
    vm.list = MylistService.list;

    vm.getMovie = id => {
      SearchService.getImdb(id).then(() => {
        vm.movie = SearchService.imdb;
        $location.url("/details");
      });
    }

    
  }]
}

angular.module("app").component("myList", myList);