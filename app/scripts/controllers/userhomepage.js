'use strict';

angular.module('onlineDairyApp')
  .controller('UserCtrl', function ($scope, ViewSpecificMemory, SaveMemory, UpdateMemory,session, $location) {
var username = session.username;
$scope.show_memory_panel = false;
$scope.existingmemory = false;

$scope.init = function(){
  if(session.username===undefined){
    $location.path('/');
  }
}

$scope.search = function(){
    alert(session.username);
  var date = $scope.date;
  ViewSpecificMemory.query(
    {
      "username":session.username,
      "date" : date
    }, function(response) {
    if (response) {
      console.log(response);
      $scope.existingmemory = true;
      $scope.show_memory_panel = true;
      $scope.memory = response.memory;
      alert("Existing memory: "+ $scope.existingmemory);
    } else {
      $scope.show_memory_panel = true;
      $scope.memory ="";
      $scope.existingmemory = false;
    }
  },function(error){
      $scope.show_memory_panel = true;
      $scope.memory ="";
      $scope.existingmemory = false;
  }
  );
}


$scope.save= function(){
  var date = $scope.date;
  var memory = $scope.memory;

  if(!$scope.existingmemory){
    SaveMemory.save(
      {"username" : username,
      "date" : date,
      "memory": memory},function(response){
        if(response){
          //ok
          alert("Inserted");
          $scope.show_memory_panel=false;
          $scope.memory = "";
          $scope.existingmemory = false;
        }
        else{
          //error
          $scope.show_memory_panel=false;
          $scope.memory = "";
          $scope.existingmemory = false;
        }
      }
    );
  }
  else{
    UpdateMemory.update(
      {  "username" : username,
        "date" : date,
        "memory": memory},function(response){
        if(response){
          //ok
          alert("updated: "+ memory);
          $scope.show_memory_panel=false;
          $scope.memory = "";
          $scope.existingmemory = false;
        }
        else{
          //error
          $scope.memory = "";
          $scope.show_memory_panel=false;
          $scope.existingmemory = false;
        }
      }
    );
  }

}




      });
