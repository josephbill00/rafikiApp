function Appctrl ($scope,$http){


       console.log("Hello world from controller")

$http.get('/register').success(function(response){
 console.log("i got the data i requested");
 $scope.register = response;

});

$scope.Register = function(){
  console.log($scope.student); 
  $htt

};



  


}