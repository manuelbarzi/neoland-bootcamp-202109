describe("Test instance Biblio");

describe("Case 1");

var biblio = new Biblio;

if (
    biblio instanceof Biblio
)
    success("Test ok");
else
    fail("Test ko");


describe("Case 2");

var biblio = new Biblio;

if (
    biblio instanceof Biblio &&
    biblio.length === 0
)
    success("Test ok");
else
    fail("Test ko");


describe("Case 3");

var biblio = new Biblio(1, 2, 3, 4, 5);

if (
    biblio instanceof Biblio &&
    biblio.length === 5 &&
    biblio[0] === 1 &&
    biblio[1] === 2 &&
    biblio[2] === 3 &&
    biblio[3] === 4 &&
    biblio[4] === 5
)
    success("Test ok");
else
    fail("Test ko");