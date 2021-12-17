const { validateQuery } = require( './helpers/validators' )
const { NotFoundError } = require( 'eb-errors' )
const { mongoose: { models: { Item } } } = require( 'eb-data' )

function retrieveItem( query ) {
    validateQuery( query )
    const regex = new RegExp( query, 'i' )

    return Item.find( { name: regex } ).lean()
        .then( item => {
            if ( !item ) throw new NotFoundError( 'Wrong Name' )

            return item
        } )
}

module.exports = retrieveItem