(function() {
    function Room($firebaseArray) {
        var firebaseRef = new Firebase("https://bloc-chat-ce46d.firebaseio.com");
        
        var rooms = $firebaseArray(firebaseRef.child('rooms'));
        
        return {
            rooms
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