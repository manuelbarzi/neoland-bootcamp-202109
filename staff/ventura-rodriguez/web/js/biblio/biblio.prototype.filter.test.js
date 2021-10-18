describe("Tes method filter") // Método es una función asociada a un objeto

describe("Case 1");

var words = new Biblio("Spray", "Limit", "Elite", "Exuberant", "Destruction", "Present");
var items = new Biblio;
var res = words.filter(function(element, index) {
    items[index] = element;
    items.length++;
    return element.length > 6;
})

if(
    res instanceof Biblio &&
    res.length === 3 &&
    res[0] === words[3] &&
    res[1] === words[4] &&
    res[2] === words[5] &&
    words.length === 6 &&
    words[0] === "Spray" &&
    words[1] === "Limit" &&
    words[2] === "Elite" &&
    words[3] === "Exuberant" &&
    words[4] === "Destruction" &&
    words[5] === "Present" &&
    items.length === 6 &&
    items[0] === "Spray" &&
    items[1] === "Limit" &&
    items[2] === "Elite" &&
    items[3] === "Exuberant" &&
    items[4] === "Destruction" &&
    items[5] === "Present" &&
    items.length === words.length &&
    words[0] === items[0] &&
    words[1] === items[1] &&
    words[2] === items[2] &&
    words[3] === items[3] &&
    words[4] === items[4] &&
    words[5] === items[5]
)
    success('test ok');
else
    fail('test ko');


























































// describe("Test method filter");

// var biblio = new Biblio(1, 2, 3, 4, 5);
// var items = new Biblio;

// var res = biblio.filter(function(element, index) {
//     items[index] = element;
//     items.length++;
//     return element > 3;
// });

// if (
//     res instanceof Biblio &&
//     res.length === 2 &&
//     res[0] === biblio[3] &&
//     res[1] === biblio[4] &&
//     items.length === biblio.length &&
//     items[0] === biblio[0] &&
//     items[1] === biblio[1] &&
//     items[2] === biblio[2] &&
//     items[3] === biblio[3] &&
//     items[4] === biblio[4]
// )
//     success('test ok');
// else
//     fail('test ko');