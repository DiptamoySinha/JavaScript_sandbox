let i = 0;
let arr = [10,20,30,40]

while(i<arr.length) {
    ((i) => {
        setTimeout( () => {
        console.log(`index: ${i}, element: ${arr[i]}`);
    }, 3000)})(i)
    i++;
}