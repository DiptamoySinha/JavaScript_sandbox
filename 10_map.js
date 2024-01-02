const map = new Map();
map.set('IN', 'India');
map.set('USA', 'United State of America');
map.set('FR', 'France');

const myObj = {
    "r": "red",
    "b": "blue",
    "w": "white"
}

// for (const iterator of map) {
//     console.log(iterator)
// }
// output -> 
// [ 'IN', 'India' ]
// [ 'USA', 'United State of America' ]
// [ 'FR', 'France' ]


// for in -> is not gonna work because map is uniteratable
// for (const key in map) {
//    console.log(key);
// }


// for in -> it is gonna give me the keys of the object
// for (const key in myObj) {
//     console.log(key);
// }

// const str = "Diptamoy"
// for (const key in str) {
//     console.log(` ${key} : ${str[key]}`);
// }


// map.forEach( k => {
//     console.log(k);
// })


console.log(typeof (() => {return 'a'})())