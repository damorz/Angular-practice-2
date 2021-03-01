(function () {
  "use strict";
  angular
    .module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ["$scope"];
  function LunchCheckController($scope) {
    $scope.lunch = "";
    $scope.message = "";
    $scope.colorState = "";
    $scope.borderState = "";
    $scope.checkIfTooMuch = function () {
      let splitLunch = $scope.lunch.split(",");
      console.log(splitLunch);
      if (splitLunch.length === 1 && splitLunch[0] === "") {
        $scope.colorState = { color: "red" };
        $scope.borderState = { border: "3px solid red" };
        $scope.message = "Please enter data first";
      } else if (splitLunch.length <= 3) {
        $scope.colorState = { color: "green" };
        $scope.borderState = { border: "3px solid green" };
        $scope.message = "Enjoy!";
      } else {
        $scope.colorState = { color: "green" };
        $scope.borderState = { border: "3px solid green" };
        $scope.message = "Too much!";
      }
    };
  }
})();
