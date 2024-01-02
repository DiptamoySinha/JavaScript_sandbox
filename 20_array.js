// const myArr = [
//     {name:"X00",price:100 },
//     {name:"X01",price:100 },
//     {name:"X02",price:100 },
//     {name:"X03",price:100 },
//     {name:"X04",price:110 },
//     {name:"X05",price:110 },
//     {name:"X06",price:110 },
//     {name:"X12",price:130 },
//     {name:"X13",price:130 },
//     {name:"X14",price:130 },
//     {name:"X15",price:130 },
//     {name:"X16",price:140 },
//     {name:"X17",price:140 },
//     {name:"X18",price:140 },
//     {name:"X07",price:110 },
//     {name:"X08",price:120 },
//     {name:"X09",price:120 },
//     {name:"X10",price:120 },
//     {name:"X11",price:120 },
//     {name:"X19",price:140 }
//   ];

// const myFunc = (a, b) => {
//     console.log(`log: ${a.name}:${a.price} - ${b.name}:${b.price}`);
//     if(a.price < b.price) return -1;
//     if(a.price > b.price) return 1;
//     return 0
// }

// myArr.sort(myFunc);
// console.log(myArr);

const arr1 = [1,3,null, null, 2]
// const obj = {a: 1}
// arr1[5] = 10

// console.log('length: ', arr1.length)
// console.log(arr1)
// arr1.forEach( e => {
//     console.log(e)
// })

arr1.sort( (a, b) => {
    if(a === null) return 1;
    if(b === null) return -1;
    if(a === b) return 0;
    return a>b?1:-1;
})

console.log(arr1)
