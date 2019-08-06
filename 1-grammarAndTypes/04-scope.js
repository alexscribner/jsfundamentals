/*
Scope - refers to where a variable is defined and accessible.
    - JavaScript has function scope: each function creates a new scope
    -Scope determines the visibility of these varibales
    - Variables defined inside a function are not visible from outside the function
    local scope- Indianapolis
    global scope- The World
*/

var x = 12;
function scope() {
    var x = 33;
    console.log('inside function', x);
}
scope();
console.log('outside function', x);

//br

var y = 12;
function scopeY() {
    y = 33;
    console.log(y);
}
scopeY();
console.log(y);

// var vs. let
 
var x = 12;
function varTest() {
    var x = 33;
    if (1==1) {         //if (1==2), then statement cancels out and value = 33
        var x = 45;
        console.log(x);
    }
    console.log(x)
};
varTest();
console.log(x);

//br

var x = 12;
function letTest() {
    var x = 33;
    if (true) {
        let x = 45;
        console.log(x);        //output = 45, 33, 12
    }
    console.log(x);
}
letTest();
console.log(x);

//br

function constTest() {
    const scope = 1;
    if (true) {
        const scope = 2;       //output = 1,2
        console.log(scope);
    }
    console.log(scope);
}
constTest();