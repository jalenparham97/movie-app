"use strict";

angular
  .module("app")
  .config(["$routeProvider", function($routeProvider) {
    $routeProvider
      .when("/movies", {
        template: `<movies></movies>`
      })
      .when("/favs", {
        template: `<my-list></my-list>`
      })
      .when("/tv", {
        template: `<tv-shows></tv-shows>`
      })
      .when("/home", {
        template: `<main-page></main-page>`
      })
      .when("/details", {
        template: `<more></more>`
      })
      .otherwise({
        redirectTo: "/home"
      })
  }]);