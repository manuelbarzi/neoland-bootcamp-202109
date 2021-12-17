const { validateQuery } = require( './helpers/validators' )
const { NotFoundError } = require( 'eb-errors' )
const { mongoose: { models: { Champion } } } = require( 'eb-data' )

function retrieveChampion( query ) {
   
    var regex = new RegExp(`\\b${query}`, 'gi') 
    validateQuery( query )

    return Champion.find( { name: regex } )
        .then( Champions => {
            if ( !Champions ) throw new NotFoundError( 'champions not found' )

            return Champions
        } )
}

module.exports = retrieveChampion