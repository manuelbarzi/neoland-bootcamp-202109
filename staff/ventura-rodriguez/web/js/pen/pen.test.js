describe("Test constructor Pen");

describe("Case 1");

var penDefault = new Pen;

if (
    penDefault instanceof Pen &&
    penDefault.length === 0
)
    success("Test ok");
else
    fail("Test ko");


describe("Case 2");

var penBic = new Pen("rojo", 30, "plastico", "rojo");

if (
    penBic instanceof Pen &&
    penBic.length === 4 &&
    penBic.color === "rojo" &&
    penBic.size === 30 &&
    penBic.material === "plastico" &&
    penBic.ink === "rojo"
)
    success("Test ok");
else
    fail("Test ko");


describe("Case 3");

var penBlank = new Pen("blanco", 12, "cristal", "dorado");

if (
    penBlank instanceof Pen &&
    penBlank.length === 4 &&
    penBlank.color === "blanco" &&
    penBlank.size === 12 &&
    penBlank.material === "cristal" &&
    penBlank.ink === "dorado"
)
    success("Test ok");
else
    fail("Test ko");


describe("Case 4");

var penNico = new Pen("negro", 8, "cristal", "purpura", "Nico");

if (
    penNico instanceof Pen &&
    penNico.length === 5 &&
    penNico.color === "negro" &&
    penNico.size === 8 &&
    penNico.material === "cristal" &&
    penNico.ink === "purpura" &&
    penNico.personName === "Nico"
)
    success("Test ok");
else
    fail("Test ko");