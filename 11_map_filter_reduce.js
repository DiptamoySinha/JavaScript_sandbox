const arr = [10,20,30,40,50]

const arr1 = arr.map(t => t*t);
console.log(`arr1: ${arr1}`);

console.log();

const arr2 = arr.filter( t => t%20!==0)
console.log(`arr2: ${arr2}`);

console.log();

const initial = 0;
const total = arr.reduce((accumulator, currentValue, currentIndex) => {
    console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}, currentIndex: ${currentIndex}`);
    return accumulator + currentValue;
}, initial)

console.log(total);