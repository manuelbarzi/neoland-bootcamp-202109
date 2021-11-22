const createUser = (collection, data, callback) => {

    collection.insertOne(data, err => {
        if (err) callback(err)
        else {
            collection.find({}).toArray((err, users) => {
                if (err) callback(err)
                else callback(null, users)
            })
        }
    })
}

const updateUser = (collection, search, data, callback) => {
    collection.updateOne(search, {$set: data}, err => {
        if(err) callback(err)
        else {
            collection.find({}).toArray((err, users) => {
                if (err) return callback(err)
                else callback(null, users)
            })
        }
    })
}

const findUser = (collection, search, callback) => {
    collection.find(search).toArray((err, users) => {
        if(err) callback(err)
        else callback(null, users)
    })
}

const deleteUser = (collection, search, callback) => {
    collection.deleteOne(search, err => {
        if(err) callback(err)
        else {
            collection.find({}).toArray((err, users) => {
                if (err) callback(err)
                else callback(null, users)
            })
        }
    })
}

module.exports = {
    createUser,
    updateUser,
    findUser,
    deleteUser
}