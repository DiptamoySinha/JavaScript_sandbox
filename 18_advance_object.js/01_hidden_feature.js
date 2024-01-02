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

Object.defineProperty(chai, 'stall', {
    set(val) {
        this.stallProp = val;
    },

    get() {
        return this.stallProp + `: Jhargram`
    }
} )

chai.price = 900
chai.stall = "cafe chai"
console.log(chai)
console.log(chai.stall)
