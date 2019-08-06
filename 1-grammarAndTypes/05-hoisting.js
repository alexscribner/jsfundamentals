//Hoisting
//Hoisting does not exist. It is an illusion. Code doesnt actually get moved.
// JS reads through the code twice 

console.log(scissors);
scissors = 'blue';
console.log(scissors);
var scissors;

//br

b();
console.log(a);
function b(){
    console.log('this is all hoisted!');
}
var a = 'This ia not hoisted';