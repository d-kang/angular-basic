angular.module('stage')
.component('demoe',{
  controller :'DemoeCtrl',
  templateUrl: 'templates/demoe.html',
  bindings: {
    'name': '<'
  }
})
.controller('DemoeCtrl',function(){
});
