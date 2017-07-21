'use strict';

angular.module('onlineDairyApp')
  .controller('NewuserController', function ($scope,Registeruser,session,$location) {

    $scope.init = function(){
      if(session.username!=undefined){
        $location.path('/userhomepage');
      }
    }

    $scope.login = function(){
      alert("method hitted");
      var username = $scope.user.username;
      var password = $scope.user.password;
var obj = {

}
      Registeruser.register(
      {"username" : username,
      "password" : password},function(response){
        console.log("method  entered");
        if(response){
          //ok
          alert("Logged In");
          session.username=username;
          alert(session.username);
          $location.path('/userhomepage');
        }
        else{
          //error
          alert("error");
        }
      }
    );


      }
  });
