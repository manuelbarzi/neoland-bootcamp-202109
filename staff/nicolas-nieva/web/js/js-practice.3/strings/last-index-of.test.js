describe ('Test lastIndexof')

describe ('Case 1')

var string = 'pedro pala y pedro'
var value = 'pedro'
var res = lastIndexof (string,value)
if (typeof res === 'number'
&& res === 14 )
success ('test ok')
else
fail ('test ko')

describe ('Case 2')

var string = 'pedro pala y pedro'
var value = 'pedro'
var res = lastIndexof (string,value, 9)
if (typeof res === 'number'
&& res === 1 )
success ('test ok')
else
fail ('test ko')