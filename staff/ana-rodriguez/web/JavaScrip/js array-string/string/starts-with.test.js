describe('TEST startsWith')

describe('CASO 1')


var string= 'Saturday night plans';
var res = startsWith(string,'Sat',0 )

if(typeof res === "boolean"
   && res===true)

   success ('test ok')

   else 
   fail('test fail')

describe('CASO 2')

var string= 'Saturday night plans';
var res = startsWith(string,'night',9 )

if(typeof res === "boolean"
   && res===true)

   success ('test ok')

   else 
   fail('test fail')

describe ('CASO 3')

var string= '1,2,3,4,5,6'
var res = startsWith(string,'4',6 )

if(typeof res === "boolean"
   && res===true)

   success ('test ok')

   else 
   fail('test fail')


