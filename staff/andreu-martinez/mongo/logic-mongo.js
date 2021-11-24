const createUser = (collection, data, callback) => {
    // Collection es la coleción de Mongo y data es el objeto a introducir

    collection.insertOne(data, error => {
        if (error) return callback(error)
        collection.find({}).toArray((error, users) => {
            if (error) return callback(error)
            callback(null, users)
        })
    })
}

const updateUser = (collection, data, callback) => {
}

const findUser = (collection, data, callback) => {

    collection.find({username: {$regex : data.query}} && {name: {$regex : data.query}}).toArray((error, users) => {
        if (error) return callback(error)
        users.forEach(u =>{delete u.password})
        callback(null, users)
    })
}

const deleteUser = (collection, data, callback) => {
    collection.deleteOne({username: data.username, password: data.password}, (error,object) => {
        if(error) return callback(error)
        if(!object.ok) return callback(new Error("Nothing to delete, cerdo."))
    })
    collection.find({}).toArray((error, users) => {
        if (error) return callback(error)
        callback(null, users)
    })
 }

module.exports = {
    createUser,
    updateUser,
    findUser,
    deleteUser
}