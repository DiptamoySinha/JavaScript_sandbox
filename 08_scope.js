const val1 = "val1"
let val2 = "val2" // it can be access in blocked scope
var val3 = "val3" // it can be access inside any scope(e.g. forloop, if-else, while)
globalVal = "Global" // declared in a gloabl scope, we can access this variable inside a function as well;
let globalVal2; 
// console.log(globalVa2); // by default we are in strict mode so it will throw error


console.log("----------------------------");
console.log(`val1: ${val1}`);
console.log(`val2: ${val2}`);
console.log(`val3: ${val3}`);
console.log(`globalVal: ${globalVal}`);

console.log("----------------------------");

if(true)
{
    let val2 = "10"
    var val3 = "20"
    globalVal = "10000"
    console.log(`from if val2: ${val2}`);
    console.log(`from if val3: ${val3}`);
    console.log(`globalVal: ${globalVal}`);

}

console.log("----------------------------");

console.log(`val1: ${val1}`);
console.log(`val2: ${val2}`);
console.log(`val3: ${val3}`);
console.log(`globalVal: ${globalVal}`);

console.log("----------------------------");

function demo()
{
    var val3 = "val3 inside function"
    globalVal = "global value inside function"
    globalVal2 = "globalVal2"
}

demo()

console.log(val3);
console.log(globalVal);



