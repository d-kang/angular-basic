angular.module('stage') // anywhere in stage, test is now accessible in any controller
.service('test', function($http){ // pass test to app.js ctrl
  this.get = function(name) {
    console.log("service", name);
  };

  this.getData = function(cb) {
    $http.get('/api/get/names')/
    .then(res => {
      console.log('data from server', res.data);
      cb(res.data);
    })
    .catch(res => {
      console.log('Error data from server', res.data);
    });
  }
  this.postData = function(data) {
    $http.post('/api/post/names', data)
    .then((response) => {
      console.log('response', response)
    })
    .catch((err) => {
      console.log('err', err)
    })
  }

})



// service 'test' will handle all get post put deletes for angular.module('stage')
// must make sure testservices.js and app.js are included in index.html
