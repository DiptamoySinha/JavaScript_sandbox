const chai = {
    name: "masala chai",
    price: 300,
    isAvailable: true
}

// console.log(Object.getOwnPropertyDescriptor(chai, 'name'))
// output:
// {
//     value: 'masala chai',
//     writable: true,
//     enumerable: true,
//     configurable: true
//  } c c x

Object.defineProperty(chai, 'price', {
    writable: false
})

chai.price = 900
console.log(chai)
