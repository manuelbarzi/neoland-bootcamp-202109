const createUser = (collection, data, callback) => {

    collection.insertOne(data, error => {
        if (error) return callback(error)
        collection.find({}).toArray((error, users) => {
            if (error) return callback(error)
            callback(null, users)
        })
    })
}

const updateUser = (collection, username, data, callback) => {
    collection.updateOne({ username: username }, { $set: { age: data } }, error => {
        if (error) return console.error(error)

        collection.find({}).toArray((error, users) => {
            if (error) return callback(error)
            callback(null, users)
        })
    })

}

const findUser = (collection, data, callback) => {
    collection.findOne({ _id: data }, error => {
        if (error) return console.error(error)

        collection.find({ _id: data }).toArray((error, user) => {
            if (error) return callback(error)
            callback(null, user)
        })
    })

}

const deleteUser = (collection, data, callback) => {
    collection.deleteOne({ _id: data }, error => {
        if (error) return console.error(error)

        collection.find({}).toArray((error, users) => {
            if (error) return callback (error)

            callback(null, users)
        })
    })

}

module.exports = {
    createUser,
    updateUser,
    findUser,
    deleteUser
}