// number => 2^53
// bigint
// string
// boolean
// null => standalone value
// undefined => value is not assigned yet
// symbol => unique

// object

let a;
let b=null;

console.log(typeof a); // undefined
console.log(typeof b); // object

const obj = {
    a: 10,
    b: 20,
    add: function() {
        return this.a + this.b;
    }
}

const f = function(a, b) {
    this.add = a+b;
    return this.add
}

console.log(typeof f)
console.log(f.constructor);

// console.log(obj.add())

