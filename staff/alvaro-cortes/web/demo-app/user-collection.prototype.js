function UsersCollection(arrUsers) {
    // this.collection = (arrUsers !== undefined) ? arrUsers : [];
    this.collection = arrUsers || [];
}

UsersCollection.prototype.getCollection = function() {
    return this.collection;
}

UsersCollection.prototype.setCollection = function (x) {
    this.collection = x;
    return this.getCollection();
}

UsersCollection.prototype.login = function(username) {
    var user = this.collection.find(function(element) {
        return (
            element.user === username.user &&
            element.password === username.password
        )
    })
    return user || {};
}

UsersCollection.prototype.register = function(user) {
    var res;
    var bool = this.collection.some(function(element) {
        return (element.email === user.email);
    })
    if(!bool) {
        this.collection.push(user);
        res = this.collection[this.collection.element - 1];
    } else res = new User();
    return res;
}