globalVal = "1000";

// Imediately Invoke Function Expression
((name) => {
    console.log(`Hello, ${name}. Good Morning!`)
    globalVal = 2000;
    console.log(globalVal)
})("Diptamoy");

console.log(globalVal);

// function chai(name) {
//     console.log(`Hello, ${name}. Good Morning!`)
//     console.log(globalVal)
// }
// chai("Diptamoy")

let num1 = 10
let num2 = 20;

!function (a, b) {
    num1 = b
    num2 = a
}(num1, num2)

console.log(`num1: ${num1}, num2: ${num2}`)
