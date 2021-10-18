describe("Test method Pen");

describe("Case 1");

var pen = new Pen("rojo", 15, "plastico", "verde", "Ana");

// describe("Testing instance");

// if (
//     pen instanceof Pen &&
//     pen.length === 5 &&
//     pen.color === "rojo" &&
//     pen.size === 15 &&
//     pen.material === "plastico" &&
//     pen.ink === "verde" &&
//     pen.personName === "Ana"
// )
//     success("Test ok");
// else
//     fail("Test ko");

// describe("Testing method");

var res = pen.describe();

if (
    typeof res === "string"
)
    success("Test ok");
else
    fail("Test ko");