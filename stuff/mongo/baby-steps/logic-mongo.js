
const createUser = (collection, data) => {// Collection es la colección de Mongo y data es el objeto a introducir

    return new Promise((resolve, reject) => {
        collection.insertOne(data, error => {
            if (error) reject(error)
            collection.find({}).toArray((error, users) => {
                if (error) reject(error)
                else resolve(users)
            })
        })
    })
}

const updateUser = (collection, find, data) => {
    return new Promise((resolve, reject) => {
        collection.updateOne(find, { $set: data }, error => {
            if (error) reject(error)
            collection.find({}).toArray((error, users) => {
                if (error) reject(error)
                else resolve(users)
            })
        })
    })
}

const findUser = (collection, search) => {
    return new Promise((resolve, reject) => {
        collection.find(search).toArray((error, users) => {
            if (error) reject(error)
            else resolve(users)
        })
    })
}


const deleteUser = (collection, data) => {
    new Promise((resolve,reject)=>{
        collection.deleteOne(data, error => {
            if (error) reject(error)
            collection.find({}).toArray((error, users) => {
                if (error) reject(error)
                else resolve(users)
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