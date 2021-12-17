const { validateId, validateChampion } = require( './helpers/validators' )
const { NotFoundError } = require( 'eb-errors' )
const { mongoose: { Types: { ObjectId } }, models: { Build } } = require( 'eb-data' )


function retrieveBuildsByUser( user ) {
    validateId(user)
    
    return ( async () => {
        const builds = await Build.find( { "user": new ObjectId(user) } ).lean()
        if ( !builds ) throw new NotFoundError( 'Wrong ID' )

        return builds
    } )() 
}

module.exports = retrieveBuildsByUser