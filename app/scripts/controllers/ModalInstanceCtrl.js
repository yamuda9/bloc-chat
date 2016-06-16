(function() {
    function ModalInstanceCtrl($scope, $uibModalInstance, Room, rooms) {
        $scope.rooms = rooms.all;
        
        $scope.create = function() {
            $uibModalInstance.close($scope.Room.addRoom);
        };
        
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    }
    
    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', 'Room', 'rooms', ModalInstanceCtrl]);
})();