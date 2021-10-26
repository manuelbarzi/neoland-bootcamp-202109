describe( 'TEST includes' )

describe( 'CASE 1' )

var str = 'The quick brown fox jumps over the lazy dog.'
var search = 'fox'
var res = includes( str, search );

if ( typeof res === 'boolean'
    && res === true )
    success( 'test ok' )
else
    fail( 'test failed' )

describe( 'CASE 2' )

var str = 'The quick brown fox jumps over the lazy dog.'
var search = 'The'
var res = includes( str, search, 5 );

if ( typeof res === 'boolean'
    && res === false )
    success( 'test ok' )
else
    fail( 'test failed' )

describe( 'CASE 3' )

var str = 'The quick brown fox jumps over the lazy dog.'
var search = 'he'
var res = includes( str, search, 5 );

if ( typeof res === 'boolean'
    && res === true )
    success( 'test ok' )
else
    fail( 'test failed' )

describe( 'CASE 4' )

var str = 'The quick brown fox jumps over the lazy dog.'
var search = 'foxju'
var res = includes( str, search, 5 );

if ( typeof res === 'boolean'
    && res === false )
    success( 'test ok' )
else
    fail( 'test failed' )