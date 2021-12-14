const { validateItems, validateChampion, validateId } = require( './helpers/validators' )
const { ConflictError } = require( 'eb-errors' )
const { models: { Build } } = require('eb-data')

function createBuild( items, champion, userId ) {
    validateItems (items) 
    validateChampion( champion )
    validateId( userId )

    return Build.create( { items, champion, userId } )
        .then( () => { } )
        .catch( error => {
            throw error
        } )
}

module.exports = createBuild