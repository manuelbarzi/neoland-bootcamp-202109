describe('TEST search');

describe('CASO 1');

var string = 'El perro de San Roque no tiene rabo';
var res = search(string,'Roque');

if(typeof res === 'number'
    && res === 16){
    success('test ok');
} else {
    fail('test fail');
}

describe('CASO 2');

var string = 'El perro de San Roque no tiene rabo';
var res = search(string,'porque');

if(typeof res === 'number'
    && res === -1){
    success('test ok');
} else {
    fail('test fail');
}

