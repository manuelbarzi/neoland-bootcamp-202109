const { validateName } = require( './helpers/validators' )
const { NotFoundError } = require( 'eb-errors' )
const { mongoose: { models: { Item } } } = require( 'eb-data' )

function retrieveItem( name ) {
    validateName( name )

    return Item.findOne( { name } )
        .then( Item => {
            if ( !Item ) throw new NotFoundError( 'Wrong Name' )

            return Item
        } )
}

module.exports = retrieveItem