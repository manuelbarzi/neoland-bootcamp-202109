const { validateId } = require('./helpers/validators');
const { models: { User } } = require('crowdaids-data');
const { NotFoundError } = require("crowdaids-errors");

function toggleFavBeach(idUser, idBeach) {
    validateId(idUser)
    validateId(idBeach)

    return (async () => {
        const user = await User.findById(idUser)

        if (!user) throw new NotFoundError(`user with id ${idUser} not found`)

        const fav = user.favorites.filter(beach => beach === idBeach)

        if (!fav.length) user.favorites.push(idBeach)

        else {
            const fav1 = user.favorites.filter(beach => beach !== idBeach)

            user.favorites = fav1
        }
        return user.save()

    })()
}

module.exports = toggleFavBeach