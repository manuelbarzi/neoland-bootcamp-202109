const { retrieveBuildsByChampion, retrieveBuildsByUser } = require( 'eb-logics' )
const {handleError, validateAuthorizationAndExtractPayload} = require( './helpers' )

module.exports = ( req, res ) => {
    const { headers: { authorization }, query: { champion: championId } } = req

    try {
        const { sub: userId } = validateAuthorizationAndExtractPayload( authorization )
        debugger
        if ( championId ) {
            retrieveBuildsByChampion( championId )
                .then( builds => res.json( builds ) )
                .catch( error => handleError( error, res ) )
        } else {
            retrieveBuildsByUser( userId )
                .then( builds => res.json( builds ) )
                .catch( error => handleError( error, res ) )
        }
    } catch ( error ) {
        handleError( error, res )
    }
}