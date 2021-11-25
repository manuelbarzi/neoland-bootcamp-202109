const createUser = (collection, data) => {
    // Collection es la colección de Mongo y data es el obejto a introducir
    return new Promise((resolve, reject) => {
        collection.insertOne(data, error => {
            if (error) return reject(error)

            collection.find({}).toArray((error, users) => {
                if (error) return reject(error)

                resolve(users)
            })
        })
    })
}

const updateUser = (collection, username, data) => {

    return new Promise((resolve, reject) => {
        collection.updateOne({ username: username }, { $set: { age: data } }, error => {
            if (error) return reject(error)

            collection.find({}).toArray((error, users) => {
                if (error) return reject(error)

                resolve(users)
            })
        })
    })
}
const findUser = (collection, data) => {

    return new Promise((resolve, reject) => {
        collection.find({ _id: data }).toArray((error, user) => {
            if (error) return reject(error)

            resolve(user)
        })
    })
}
const deleteUser = (collection, data) => {

    return new Promise((resolve, reject) => {
        collection.deleteOne({ _id: data }, error => {
            if (error) return rejecterror(error)

            collection.find({}).toArray((error, users) => {
                if (error) return reject(error)

                resolve(users)
            })
        })
    })
}

module.exports = {
    createUser,
    updateUser,
    findUser,
    deleteUser
}