describe("TEST repeat")

// CASE 1 //

var res = repeat("Bootcamp 2021", 2)

if (typeof res === "string"
    && res.length === 26
    && res[0] === "B"
    && res[1] === "o"
    && res[2] === "o"
    && res[3] === "t"
    && res[4] === "c"
    && res[5] === "a"
    && res[6] === "m"
    && res[7] === "p"
    && res[8] === " "
    && res[9] === "2"
    && res[10] === "0"
    && res[11] === "2"
    && res[12] === "1"
    && res[13] === "B"
    && res[14] === "o"
    && res[15] === "o"
    && res[16] === "t"
    && res[17] === "c"
    && res[18] === "a"
    && res[19] === "m"
    && res[20] === "p"
    && res[21] === " "
    && res[22] === "2"
    && res[23] === "0"
    && res[24] === "2"
    && res[25] === "1")
        success("Test correct")
    else
        fail("Test failed")

// CASE 2 //

var res = repeat("Verano", 3)

if (typeof res === "string"
&& res.length === 18
&& res[0] === "V"
&& res[1] === "e"
&& res[2] === "r"
&& res[3] === "a"
&& res[4] === "n"
&& res[5] === "o"
&& res[6] === "V"
&& res[7] === "e"
&& res[8] === "r"
&& res[9] === "a"
&& res[10] === "n"
&& res[11] === "o"
&& res[12] === "V"
&& res[13] === "e"
&& res[14] === "r"
&& res[15] === "a"
&& res[16] === "n"
&& res[17] === "o"
)
    success("Test correct")
else
    fail("Test failed")

// CASE 3 //

var res = repeat("Verano", 0)

if (typeof res === "string"
&& res.length === 0)
    success("Test correct")
else
    fail("Test failed")

// CASE 4 //

var res = repeat("Verano", 1)

if (typeof res === "string"
&& res.length === 6
&& res[0] === "V"
&& res[1] === "e"
&& res[2] === "r"
&& res[3] === "a"
&& res[4] === "n"
&& res[5] === "o"
)
    success("Test correct")
else
    fail("Test failed")
    
