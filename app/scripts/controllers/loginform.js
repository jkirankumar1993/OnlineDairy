'use strict';

angular.module('onlineDairyApp')
  .controller('LoginCtrl', function ($scope,Loginuser,session,$location) {

    $scope.init = function(){
      if(session.username!=undefined){
        $location.path('/userhomepage');
      }
    }
    
    $scope.login = function(){

      var username = $scope.login.username;
      var password = $scope.login.password;

      Loginuser.login(
      {  "username" : username,
        "password" : password},function(response){
        if(response){
          //ok
          console.log(response);
          session.username=username;
            alert(session.username);
          $location.path('/userhomepage');
        }
        else{
          //error
          alert("not ok");
        }
      },function(error){
        alert("not ok");
      }
    );


      }
    });
