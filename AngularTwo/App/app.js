angular.module('app', []);

angular.module('app').controller('MainCtrl',function($scope){

    $scope.message = 'Micardo SosCardo';

    $scope.updateMessage = function(message){
        $scope.message = message;
    };

});