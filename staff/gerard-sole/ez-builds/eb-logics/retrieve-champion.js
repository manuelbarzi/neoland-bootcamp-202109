const { validateName } = require( './helpers/validators' )
const { NotFoundError } = require( 'eb-errors' )
const { mongoose: { models: { Champion } } } = require( 'eb-data' )

function retrieveChampion( name ) {
    validateName( name )

    return Champion.findOne( { name } )
        .then( Champion => {
            if ( !Champion ) throw new NotFoundError( 'Wrong Name' )

            return Champion
        } )
}

module.exports = retrieveChampion