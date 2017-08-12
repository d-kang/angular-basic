angular.module('stage')
.component('app',{
  controller :'AppCtrl',
  templateUrl: 'templates/app.html'
})
.controller('AppCtrl',function(test){ // you can pass any number of services to ctrl
  this.var="Hello World";
  test.get(this.var); // this is how you pass values to services (test in testservice.js)
  this.add = function(name) {
    console.log(name);
  };
  this.names = [1,2,3,4,5];
  test.postData(this.names);
  test.getData((data) => {this.names = data;});
  // test.getData(function(data) {
  //   console.log('data :', data );
  //   this.names = data;
  //   console.log('this.names: ', this.names)
  // }); // invoke the $http.get
});

// when you do a get remember the context of `this`

// you have to pass the service


// there are two ways to create an app in angular one is what we are

// var app = angular.module('stage');
// app.controller
// app.service
