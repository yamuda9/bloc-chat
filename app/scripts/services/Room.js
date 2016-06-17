(function() {
    function Room($firebaseArray) {
        var firebaseRef = new Firebase("https://bloc-chat-ce46d.firebaseio.com");
        
        var rooms = $firebaseArray(firebaseRef.child('rooms'));
        
        var getRooms = function() {
            return rooms;
        }
        
        return {
            getRooms: getRooms
        };
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
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