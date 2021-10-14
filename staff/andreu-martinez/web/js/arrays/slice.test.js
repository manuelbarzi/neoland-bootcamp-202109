describe("TEST slice")

//CASE 1

var array = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']
var res = slice(array,1,2)

if (res instanceof Array
&& res.length === 2
&& res[0] === 'Pedro'
&& res[1] === 'Miguel')
success('test ok')
else
fail('test failed')

//CASE 2

var array = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']
var res = slice(array,1,7)

if (res instanceof Array
&& res.length === 4
&& res[0] === 'Pedro'
&& res[1] === 'Miguel'
&& res[2] === 'Ana'
&& res[3] === 'Vanesa')
success('test ok')
else
fail('test failed')