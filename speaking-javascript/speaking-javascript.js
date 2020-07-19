// Invoking Methods on Number Literals
1..toString(); // use double dot
(1).toString(); // wrap around parenthesis
1 .toString(); // space should be there
1.0.toString(); // use floating number

// Switching On Strict Mode at function Level
function sloppyMode() {
    sloppyVar = 123; // global variable will be created
    console.log(sloppyMode);
}

function strictMode() {
    'use strict';
    strictVar = 123; // Reference error will be thrown
    console.log(strictVar);
}

