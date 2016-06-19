(function() {
    function Room($firebaseArray) {
        var firebaseRef = new Firebase("https://bloc-chat-ce46d.firebaseio.com");
        var rooms = $firebaseArray(firebaseRef.child('rooms'));
        
        var getMessages = function(roomId) {
            var messages = firebaseRef.child('messages');
            
            return $firebaseArray(messages.orderByChild("roomId").equalTo(roomId));
        }
        
        return {
            rooms,
            getMessages
        };
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();