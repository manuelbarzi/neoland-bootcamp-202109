describe ('Test startWith')

describe ('Case 1')

var string = 'hola paola'
var res = startWith(string, 'pa')

if (typeof res === "boolean"
&& res === false)
success ('test ok')
else fail ('test fail')

describe ('Case 2')

var string = 'hola paola'
var res = startWith(string, 'hola')

if (typeof res === "boolean"
&& res === true)
success ('test ok')
else fail ('test fail')

describe ('Case 3')

var string = 'hola paola'
var res = startWith(string, 'hola pa')

if (typeof res === "boolean"
&& res === true)
success ('test ok')
else fail ('test fail')

describe ('Case 4')

var string = 'hola paola'
var res = startWith(string, 'hola Pa')

if (typeof res === "boolean"
&& res === false)
success ('test ok')
else fail ('test fail')

describe ('Case 5')

var string = 'hola paola'
var res = startWith(string, 'ola', 7)

if (typeof res === "boolean"
&& res === true)
success ('test ok')
else fail ('test fail')

