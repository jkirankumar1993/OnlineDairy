'use strict';

  // Api call to view specific memory
var apiService = angular.module('onlineDairyApp');
apiService.factory("ViewSpecificMemory", function($resource) {
	var _url = "http://localhost:8080/onlinedairy/services/v1/users/getmemory";
	//var _url = "/static-json/static-lists/view-static-list-response.json";

	return $resource(_url, {}, {
		"query" : {
			method : "POST",
			headers : {
				'Content-Type' : 'application/json'
			}
		}
	});
});

//api call to login user
apiService.factory("Loginuser", function($resource) {
var _url = "http://localhost:8080/onlinedairy/services/v1/users/loginuser";
//var _url = "/static-json/static-lists/view-static-list-response.json";

return $resource(_url, {}, {
  "login" : {
    method : "POST",
    headers : {
      'Content-Type' : 'application/json'
    }
  }
});
});

//api call to register user
apiService.factory("Registeruser", function($resource) {
var _url = "http://localhost:8080/onlinedairy/services/v1/users/newuser";
//var _url = "/static-json/static-lists/view-static-list-response.json";

return $resource(_url, {}, {
  "register" : {
    method : "POST",
    headers : {
      'Content-Type' : 'application/json'
    }
  }
});
});

//api call to save memory
apiService.factory("SaveMemory", function($resource) {
var _url = "http://localhost:8080/onlinedairy/services/v1/users/addmemory";
//var _url = "/static-json/static-lists/view-static-list-response.json";

return $resource(_url, {}, {
  "save" : {
    method : "POST",
    headers : {
      'Content-Type' : 'application/json'
    }
  }
});
});

//api call to update memory
apiService.factory("UpdateMemory", function($resource) {
var _url = "http://localhost:8080/onlinedairy/services/v1/users/updatememory";
//var _url = "/static-json/static-lists/view-static-list-response.json";

return $resource(_url, {}, {
  "update" : {
    method : "POST",
    headers : {
      'Content-Type' : 'application/json'
    }
  }
});
});

apiService.factory("session",function(){
      username = "";
});
