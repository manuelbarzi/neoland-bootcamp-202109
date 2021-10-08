function hiFriends(friends) {
    var hello = "Hello ";

    for(var i = 0; i < friends.length; i++) {
        if(friends.length - 1 === i) {
            hello += friends[i];
        } else {
            hello += friends[i] + ", ";
        }
    }
    return hello;

}