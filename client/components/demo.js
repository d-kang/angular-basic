angular.module('stage')
.component('demo',{
  controller :'DemoCtrl',
  templateUrl: 'templates/demo.html',
  bindings: {
    'firstName': '<'
  }
})
.controller('DemoCtrl',function(){
  console.log('names: ', this['firstName']);
});
