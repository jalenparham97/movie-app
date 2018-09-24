"use strict";

function MylistService () {
  const vm = this;
  vm.list = []

  vm.addToList = movie => {
    console.log(movie);
    console.log(vm.list)
    vm.list.unshift(movie);
  }
}

angular.module("app").service("MylistService", MylistService);