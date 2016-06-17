(function() {
    function RoomCtrl($scope, $uibModal, Room) {
        $scope.rooms = Room.all;
        
        $scope.open = function() {
            $uibModal.open({
                templateUrl: 'roomsModal.html',
                controller: 'ModalInstanceCtrl'
            })
        };
    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['$scope', '$uibModal', 'Room', RoomCtrl]);
})();