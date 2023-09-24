const chai = {
    name: "masala chai",
    price: 300,
    isAvailable: true
}

console.log(Object.getOwnPropertyDescriptor(chai, 'name'))

// output:
// {
//     value: 'masala chai',
//     writable: true,
//     enumerable: true,
//     configurable: true
//  }

Object.defineProperty(chai, 'name', {
    writable: false
})

chai.name = "ginger chai"

console.log(chai)
