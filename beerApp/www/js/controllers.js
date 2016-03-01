angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})



.controller('SearchCtrl', function($scope, $state, $http, BeerData) {
  $scope.form = {};                                                       // used to store your form data
  $scope.search = function() 
  {  
    name = "";
    organic = "";
    abv = "";
    ibu = "";
	year = "":
    abv = $scope.form.abv;
    ibu = $scope.form.ibu;
    name = $scope.form.name;
	year = $scope.form.year;
    if ($scope.form.isOrganic == "Y") 
	{
      organic = "Y";
    }
    else if($scope.form.isOrganic == "N")
    {
      organic = "N";
    }

    $http({
      method: 'GET',
      url: 'https://salty-taiga-88147.herokuapp.com/beers',               
      params: {                                                           
        abv: abv,
        isOrganic: organic,
        ibu: ibu,
        name:name,
		year:year
      }
    }).then(function successCallback(response) {
      BeerData.data = response.data; 

      console.log("data--")                                  
      $state.go('app.beer');                                            
    });   
  }
})

.controller('BeerCtrl', function($scope, $stateParams, BeerData) {   
  
  Beer = false;
  var k = 0;
  $scope.beer = BeerData.data.data[0];
  while(Beer == false)
  {
    $scope.beer = BeerData.data.data[i];
    if($scope.beer.id == $stateParams.id)
    {
      break;
    }
    else
    {
      k++;
    }
  }
  console.log("found this beer", $scope.beer);
 });