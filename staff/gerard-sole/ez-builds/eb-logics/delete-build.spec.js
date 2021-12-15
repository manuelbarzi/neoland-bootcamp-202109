require( 'dotenv' ).config()

const { expect } = require( 'chai' )
const deleteBuild = require( './delete-build' )
const { mongoose, models: { User, Build } } = require( 'eb-data' )
const { Types: { ObjectId } } = mongoose
const { NotFoundError, FormatError } = require( 'eb-errors' )

const { env: { MONGO_URL } } = process

describe( 'deleteBuid', () => {

    before( () => mongoose.connect( MONGO_URL ) )

    beforeEach( () => User.deleteMany() )

    beforeEach( () => Build.deleteMany() )

    let user, userId, build, buildId

    beforeEach( () => {
        user = {
            name: 'Wendy Pan',
            username: 'wendypan',
            password: '123123123'
        }

        return User.create( user )
            .then( user => userId = user.id )
    } )

    beforeEach( () => {
        build = {
            items: ['61b872fc9bb30b33dbf65c87', '61b872fc9bb30b33dbf65c88', '61b872fc9bb30b33dbf65c89', '61b872fc9bb30b33dbf65c8a', '61b872fc9bb30b33dbf65c8d', '61b872fc9bb30b33dbf65c99'],
            champion: '61b872fc9bb30b33dbf65b4c',
            userId
        }

        return Build.create( build )
            .then( build => buildId = build.id )
    } )



    describe( 'When the build already exists', () => {

        it( 'Should succeed when the build is deleted from data base', () => {
            return deleteBuild( buildId )
                .then( response => {
                    expect( response ).to.equal( 'Build deleted succesfully' )
                } )
                .catch( () => { throw new NotFoundError( 'build not found' ) } )
        } )

        it( 'Should fail with wrong id', () => {

            return deleteBuild( '61b872fc9bb30b33dbf65c87' )
                .then( () => { throw new Error( 'Should not reach this point.' ) } )
                .catch( error => {
                    expect( error ).to.exist
                    expect( error ).to.be.instanceOf( NotFoundError )
                    expect( error.message ).to.equal( 'build not found' )
                } )
        } )

        describe( 'When parameters are note valid', () => {
            describe( 'When id is not valid', () => {
                it( 'should fail when id is not a string', () => {
                    expect( () => deleteBuild( true, {}, () => { } ) ).to.throw( TypeError, 'id is not a string' )

                    expect( () => deleteBuild( 123, {}, () => { } ) ).to.throw( TypeError, 'id is not a string' )

                    expect( () => deleteBuild( {}, {}, () => { } ) ).to.throw( TypeError, 'id is not a string' )

                    expect( () => deleteBuild( () => { }, {}, () => { } ) ).to.throw( TypeError, 'id is not a string' )

                    expect( () => deleteBuild( [], {}, () => { } ) ).to.throw( TypeError, 'id is not a string' )
                } )

                it( 'should fail when id is empty or blank', () => {
                    expect( () => deleteBuild( '', {}, () => { } ) ).to.throw( FormatError, 'id is empty or blank' )

                    expect( () => deleteBuild( '   ', {}, () => { } ) ).to.throw( FormatError, 'id is empty or blank' )
                } )

                it( 'should fail when id has spaces', () => {
                    expect( () => deleteBuild( ' abcd1234abcd1234abcd1234 ', {}, () => { } ) ).to.throw( FormatError, 'blank spaces around id' )

                    expect( () => deleteBuild( 'abcd 1234abc d1234abc d1234', {}, () => { } ) ).to.throw( FormatError, 'blank spaces around id' )
                } )

                it( 'should fail when id length is different from 24 characters', () => {
                    expect( () => deleteBuild( 'abc', {}, () => { } ) ).to.throw( FormatError, 'id has less than 24 characters' )
                } )
            } )
        } )
    } )
    after( () =>
        User.deleteMany(),
        Build.deleteMany()
            .then( () => mongoose.disconnet ) )
} )