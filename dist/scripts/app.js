(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            });
    }
    
    /* function FirebaseCtrl($scope, $firebaseObject) {
        var ref = new Firebase("https://bloc-chat-ce46d.firebaseio.com");
  
        $scope.data = $firebaseObject(ref);
    }
    */
    angular
        .module('blocChat', ['ui.router'])
        // .controller('FirebaseCtrl', ['$scope', '$firebaseObject', FirebaseCtrl])
        .config(config);
})();