describe('TEST startsWith')

// CASE 1

var string = 'Hola mundo';
var value = "mundo";

var res = startsWith(string, value)

if (
    typeof res === 'boolean' &&
    res === false
)
    success('test ok');
else
    fail('test ko');


// CASE 2

var string = 'Hola mundo';
var value = "mundo";

var res = startsWith(string, value, 5)

if (
    typeof res === 'boolean' &&
    res === true
)
    success('test ok');
else
    fail('test ko');


// CASE 3

var string = 'Hola mundo';
var value = "Hola";

var res = startsWith(string, value)

if (
    typeof res === 'boolean' &&
    res === true
)
    success('test ok');
else
    fail('test ko');


// CASE 4

var string = 'Hola mundo';
var value = "H";

var res = startsWith(string, value)

if (
    typeof res === 'boolean' &&
    res === true
)
    success('test ok');
else
    fail('test ko');


// CASE 5

var string = 'Hola mundo';
var value = "t";

var res = startsWith(string, value)

if (
    typeof res === 'boolean' &&
    res === false
)
    success('test ok');
else
    fail('test ko');


// CASE 2

var string = 'Hola mundo';
var value = "mundo";

var res = startsWith(string, value, 4)

if (
    typeof res === 'boolean' &&
    res === false
)
    success('test ok');
else
    fail('test ko');