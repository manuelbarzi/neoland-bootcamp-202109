const { retrieveChampion } = require( 'eb-logics' )
const handleError = require( './helpers/handle-error' )

module.exports = ( req, res ) => {
    const { query: { q } } = req

    try {
        retrieveChampion( q )
            .then( champion => res.json( champion ) )
            .catch( error => handleError( error, res ) )
    } catch ( error ) {
        handleError( error, res )
    }
}