let score = 33

console.log(typeof score);
console.log(Number(score));


// "33" => 33
// "33abc" => NaN ( not a number)
// null => 0
// undefined => NaN
// true => 1
// false => 0

// let a = true;
// console.log(typeof String(a));


console.log(parseInt(345/10, 2))

console.log("2" > "true");
console.log(String(true));
console.log();
console.log(null == false);
console.log(Boolean(undefined));

//ascii value:
let str1 = "abcde"
let str2 = "ABCDE"

for(let i=0;i<str1.length;i++)
{
    console.log(str1.charCodeAt(i));
    console.log(str2.charCodeAt(i));
    console.log();
}

let arr = []
for(let i=0;i<=25;i++)
{
    arr.push(String.fromCharCode(i+97));
}
console.log(arr);
arr = []
for(let i=0;i<=25;i++)
{
    arr.push(String.fromCharCode(i+65));
}
console.log(arr);


console.log(2 + 2);