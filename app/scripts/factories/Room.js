(function() {
    function Room($scope, $firebaseArray) {
        var firebaseRef = new Firebase("https://bloc-chat-ce46d.firebaseio.com");
        
        var rooms = $firebaseArray(firebaseRef.child('rooms'));
        
        $scope.addRoom = function(newRoomName) {
            $scope.rooms.$add({
                name: $scope.newRoomName
            });
        };
        
        return {
            all: rooms
        };
    }

    angular
        .module('blocChat')
        .factory('Room', ['$scope', '$firebaseArray', Room]);
})();

//[
//    HFKUDBFDSJBF (room id): {
//        name: name,
//        messages: [
//            text: text,
//            createdAt: timestamp,
//            author: author
//        ]
//    },
//    BFHKDBFSKHD: {}
//    
//    
//    
//]