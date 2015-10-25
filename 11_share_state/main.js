var app = angular.module('myApp', []);

app.controller('ProfileListController', function ($scope) {
	$scope.profiles = [
    {
      name: "Twin PanichSombat",
      birthdate: new Date(1975, 3, 3),
    },
    {
      name: "Salah Chalermthai",
      birthdate: new Date(1981, 2, 23),
    },
    {
      name: "Steven Gerrad",
      birthdate: new Date(1980, 4, 30),
    },
    {
      name: "Michael Owen",
      birthdate: new Date(1979, 11, 14),
    },
    {
      name: "Luis Suárez",
      birthdate: new Date(1987, 0, 24),
    },
  ]
});

app.controller('ProfileDetailController', function ($scope) {
	
});
