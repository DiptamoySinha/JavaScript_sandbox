const date1 = new Date("09-25-2023Z"); // "MM-dd-YYYY"
const date2 = new Date("10-26-2023Z"); // "MM-dd-YYYY"

console.log(date1);
console.log(date1.getDate());
console.log(date1.getFullYear());
console.log(date1.getDay());
console.log();
console.log(date2);
console.log(date2.getDate());
console.log(date2.getFullYear());
console.log(date2.getDay());

const t1 = date1.getTime();
const t2 = date2.getTime();

const diff = Math.abs(t1 - t2) / (1000 * 60 * 60 * 24)

console.log(diff);



