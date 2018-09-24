"use strict";

const myList = {
  templateUrl: `app/js/templates/myList.html`,

  constroller: ["MylistService", function(MylistService) {
    const vm = this;
    vm.list = MylistService.list;

    console.log(vm.list);
  }]
}

angular.module("app").component("myList", myList);