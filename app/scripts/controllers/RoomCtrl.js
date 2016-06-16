(function() {
    function RoomCtrl($scope, $uibModal, rooms) {
        $scope.rooms = rooms.all;
        
        $scope.openModal = function() {
            $uibModal.open({
                templateUrl: 'roomsModal.html',
                controller: 'ModalInstanceCtrl'
            })
        };
    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['$scope', '$uibModal', 'rooms', RoomCtrl]);
})();