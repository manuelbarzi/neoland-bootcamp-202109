describe('TEST semaphore');

describe('CASE 1')

var res = semaphore("cross", "green", "pass");

if (
    typeof res === "boolean"
    && res === true
    )
    success('test ok')
else
    fail('test failed')


describe('CASE 2')

var res = semaphore("cross", "red", "pass");

if (
    typeof res === "boolean"
    && res === true
    )
    success('test ok')
else
    fail('test failed')


describe('CASE 3')

var res = semaphore("cross", "red", "wait");

if (
    typeof res === "boolean"
    && res === false
    )
    success('test ok')
else
    fail('test failed')


describe('CASE 4')

var res = semaphore("stop", "green", "pass");

if (
    typeof res === "boolean"
    && res === false
    )
    success('test ok')
else
    fail('test failed')