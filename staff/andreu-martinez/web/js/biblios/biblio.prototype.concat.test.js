describe("Test concat")

// CASE 1

var group1 = new Biblio('hola','adios')
var group2 = new Biblio(1,2,3)
var res = group1.concat(group2)

if (res instanceof Biblio
    && res.length === 5
    && res[0] === group1[0])

    success('test ok')
else
    fail('test failed')


//     // CASE 2

// var group1 = [1, 2, 3]
// var group2 = ['hola','adios']
// var array3 = ['mundo','cruel']
// var res = concat(group1, group2, array3)

// if (res instanceof Array
//     && res.length === 3
//     && JSON.stringify(group1) === JSON.stringify([1,2,3])
//     && JSON.stringify(group2) === JSON.stringify(['hola','adios'])
//     && JSON.stringify(array3) === JSON.stringify(['mundo','cruel']))
//     success('test ok')
// else
//     fail('test failed')