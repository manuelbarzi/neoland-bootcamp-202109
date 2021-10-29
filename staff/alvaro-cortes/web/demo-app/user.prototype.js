function User(name, surname, email, username, password) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.username = username;
    this.password = password;
}
User.prototype.getName = function() {
    return this.name;
}

User.prototype.setName = function(x) {
    this.name = x;
    return this.getName();
}

User.prototype.getSurname = function() {
    return this.username;
}

User.prototype.setSurname = function() {
    this.surname = x;
    return this.getUsername();
}


User.prototype.getEmail = function() {
    return this.email;
}

User.prototype.setEmail = function(x) {
    this.email = x;
    return this.getEmail();
}

User.prototype.getUsername = function() {
    return this.username;
}

User.prototype.setUsername = function(x) {
    this.username = x;
    return this.getAlias();
}

User.prototype.getPassword = function() {
    this.password;
}

User.prototype.setPassword = function(x) {
    this.password = x;
    return this.getPassword();
}