function User(alias,email,psswd){
    this.alias = alias;
    this.email =email;
    this.psswd=psswd;
}

User.prototype.getAlias=function(){
    return this.alias
}
User.prototype.setAlias=function(){
    this.alias=x
    return this.getAlias()
}

User.prototype.getEmail=function(){
    return this.email
}

User.prototype.setEmail=function(){
    this.email=x
    return this.getEmail
}

User.prototype.getpsswd=function(){
    return this.psswd
}

User.prototype.setPsswd=function(){
    this.psswd=x
    return this.getPsswd
}