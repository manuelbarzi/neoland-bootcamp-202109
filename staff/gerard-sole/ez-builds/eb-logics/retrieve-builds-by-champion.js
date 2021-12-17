// const { validateId, validateChampion } = require('./helpers/validators')
// const { NotFoundError } = require('eb-errors')
// const { mongoose: { ObjectId }, models: { Build } } = require('eb-data')

// function retrieveBuild(champion) {
//     validateChampion(champion)

//     return Build.find({champion})
//         .then(builds => {
//             if (!builds) throw new NotFoundError('Wrong ID')
//             builds.forEach(build => {
//             delete build._id

//             delete build._v
//             })
//             return builds
//         })
// }

// module.exports = retrieveBuild

const { validateId, validateChampion } = require( './helpers/validators' )
const { NotFoundError } = require( 'eb-errors' )
const { mongoose: { Types: { ObjectId } }, models: { Build } } = require( 'eb-data' )


function retrieveBuildsByChampion( championId ) {
    validateId( championId )

    return ( async () => {
        debugger
        const builds = await Build.find( { champion: new ObjectId(championId) } ).lean()
        if ( !builds ) throw new NotFoundError( 'Wrong ID' )

        return builds
    } )()
}

module.exports = retrieveBuildsByChampion