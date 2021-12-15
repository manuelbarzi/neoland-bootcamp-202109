require( 'dotenv' ).config()

const { expect } = require( 'chai' )
const createBuild = require( './create-build.js' )
const { mongoose, models: { Build, User } } = require( 'eb-data' )
const { ConflictError, FormatError } = require( 'eb-errors' )

const { env: { MONGO_URL } } = process
describe( 'createBuild', () => {

    before( () => mongoose.connect( MONGO_URL ) )

    beforeEach( () => Build.deleteMany() )
    beforeEach( () => User.deleteMany() )

    let build, user, userId

    beforeEach( () => {
        user = {
            name: 'Wendy Pan',
            username: 'wendypan',
            password: '123123123'
        }

        return User.create( user )
            .then( user => userId = user.id )
    } )

    it( 'Should succeed with new build', () => {
        const items = ['61b872fc9bb30b33dbf65c87', '61b872fc9bb30b33dbf65c88', '61b872fc9bb30b33dbf65c89', '61b872fc9bb30b33dbf65c8a', '61b872fc9bb30b33dbf65c8d', '61b872fc9bb30b33dbf65c99']
        const champion = '61b872fc9bb30b33dbf65b4c'

        return createBuild( items, champion, userId )
            .then( () => Build.findOne( { build } ) )
            .then( Build => {
                const { champion, items, userId } = Build
                expect( Build ).to.exist
                expect( champion ).to.deep.equal( champion )
                expect( items ).to.deep.equal( items )
                expect( userId ).to.deep.equal( userId )
            } )
    } )
    after( () =>
        User.deleteMany(),
        Build.deleteMany()
            .then( () => mongoose.disconnect() ) )
} )