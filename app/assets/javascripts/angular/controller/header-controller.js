app.controller('HeaderCtrl', ['$scope', '$http', '$routeParams', 'UserServices', function($scope, $http, $routeParams, UserServices){
  
  $scope.getUserDetails = function() {
    $http.get("/user/get.json").success(function(response,status){
      console.log("the user services response is ", response);
      UserServices.signedIn = response.signedIn;
      UserServices.id = response.id;
      UserServices.username = response.username;
      UserServices.email = response.email;
      console.log("in get user details ", UserServices);
    });
  }
  $scope.getUserDetails();

  $scope.userSignIn = function() {
    var url = "/users/sign_in";
    var data = {
      'user': {
        'email': $scope.signinEmail,
        'password': $scope.signinPassword,
        'password_confirmation': $scope.signinPassword
      },
      'commit': "Sign In"
    };
    $http.post(url, data).success(function(response, status, xhr){
      console.log("SUCCESSFUL signin response ", response);
      UserServices.signedIn = true;
      $location.path("/user");
    }).error(function(response) {
      console.log("problem!! - " + response);
      UserServices.signedIn = false;
    });
  }

  $scope.userSignUp = function() {
    var url = "/users";
    var data = {
      'user': {
        'email': $scope.signupEmail,
        'username': $scope.signupUsername,
        'password': $scope.signupPassword,
        'password_confirmation': $scope.signupPassword
      },
      'commit': "Sign Up"
    };
    console.log("this is the data", data);
    $http.post(url, data).success(function(response, status, xhr){
      UserServices.signedIn = true;
      console.log("SUCCESSFUL response ", response);
      console.log(status);
      $scope.getUserDetails();
      console.log("USER SIGNUP current user ", UserServices);
      // $location.path("/user");
    }).error(function(response) {
      console.log("problem!! - " + response);
      UserServices.signedIn = false;
    });
  }

  $scope.userSignOut = function(){
    // var data = UserServices.id;
    var data = "?id=12";
    console.log(data);
    console.log("about to logout");
    $http.delete("/users/sign_out.json").success(function(response,status){
      console.log(response);
      UserServices.signedIn = false;
      $location.path("/");
    }).error(function(response,status){
      console.log("ERROR in signout");
      console.log(response);
      console.log(status);
    });
  };



}])