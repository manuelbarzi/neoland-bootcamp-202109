describe("TEST search")

//CASE 1

text = 'hola que tal estas'
res = search(text,'que')

if(typeof res === 'number'
&& res === 5) success('test ok')
else fail('test failed')

//CASE 2

text = 'hola que tal estas'
res = search(text,'adios')

if(typeof res === 'number'
&& res === -1) success('test ok')
else fail('test failed')

//CASE 3

text = 'hola que tal estas'
res = search(text,'tale')

if(typeof res === 'number'
&& res === -1) success('test ok')
else fail('test failed')

//CASE 3

text = 'hola que tal estas'
res = search(text,'a')

if(typeof res === 'number'
&& res === 3) success('test ok')
else fail('test failed')