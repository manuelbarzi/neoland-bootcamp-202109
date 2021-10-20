describe('TEST concat')

describe('Case 1')

var bibl1 = new Biblio("a", "b", "c");
var bibl2 = new Biblio("d", "e");
var res = bibl1.concat(bibl2);

if (res instanceof Biblio
    && res.length === bibl1.length + bibl2.length
    && bibl1[0] === "a"
    && bibl1[1] === "b"
    && bibl1[2] === "c"
    && bibl1.length === 3
    && bibl2[0] === "d"
    && bibl2[1] === "e"
    && bibl2.length === 2
    )
    success("Test correct")
else
    fail("Test failed")

describe('Case 2')

