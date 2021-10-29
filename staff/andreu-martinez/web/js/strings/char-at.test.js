describe('TEST charAt')

//CASE 1

var res = charAt('murcielago',1)

if(typeof res === 'string'
&& res === 'u')
success('test ok')
else fail('test failed')

//CASE 2

var res = charAt('murcielago',33)

if(typeof res === 'string'
&& res === '')
success('test ok')
else fail('test failed')

//CASE 3

var res = charAt('murcielago',-1)

if(typeof res === 'string'
&& res === '')
success('test ok')
else fail('test failed')