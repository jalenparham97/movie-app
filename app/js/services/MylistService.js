"use strict";

var config = {
  apiKey: "AIzaSyAxZh9dbfSf-zIs7ai99Dp0B3I0DAVnCWA",
  authDomain: "movie-app-85163.firebaseapp.com",
  databaseURL: "https://movie-app-85163.firebaseio.com",
  projectId: "movie-app-85163",
  storageBucket: "movie-app-85163.appspot.com",
  messagingSenderId: "189413286592"
};
firebase.initializeApp(config);

function MylistService () {
  const vm = this;
  vm.list = [];

  vm.listRef = firebase.database().ref("favorites");
  
  vm.addToList = movie => {
    console.log(movie);
    console.log(vm.list);
    vm.list.unshift(movie);
  }

  vm.addToFireBase = (id ,title, poster) => {
    vm.dataBase = vm.listRef.push();
    vm.dataBase.set({
      id: id,
      title: title,
      poster: poster
    });
  }

  vm.getFromFireBase = (data) => {
    vm.movies = data.val();
    vm.keys = Object.keys(vm.movies);
    for (let i = 0; i < vm.keys.length; i++) {
      let index = vm.keys[i];
      vm.poster = vm.movies[index].poster;
      vm.id = vm.movies[index].id; 
      vm.list.unshift({
        poster: vm.poster,
        id: vm.id
      });
    } 

    console.log(vm.list);
  }

  vm.error = (err) => {
    console.log("Error");
    console.log(err);
  }

  vm.listRef.on("value", vm.getFromFireBase, vm.error);
}

angular.module("app").service("MylistService", MylistService);