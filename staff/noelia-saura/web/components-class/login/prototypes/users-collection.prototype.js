function UsersCollection(arrUsers){
    this.collection =arrUsers || [] // (arrUsers !== undefined)? arrUsers : []
}

UsersCollection.prototype.getCollection =function(){
    return this.collection
}

UsersCollection.prototype.setCollection= function(x){
    this.collection= x;
    return this.getCollection()
}

UsersCollection.prototype.signIn = function(_user){
    var user = this.collection.find(function(element){
        return(
            element.email === _user.email 
            && element.psswd === _user.psswd
                )
    })
    return user || {}
}

UsersCollection.prototype.signUp = function(user){
    var bool= this.collection.some(function(element){
        return(element.email===user.email)
    })
    if(!bool)this.setCollection.push(user);
    return this.collection[this.collection.length -1]
}


// asegurarse que son valores unicos