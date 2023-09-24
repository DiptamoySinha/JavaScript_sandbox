// const Human = {
//     leg: 2,
//     hand: 2,
//     mouth: 1
// }

// const baby = {
//     weight: "1.5kg"
// }

// Object.setPrototypeOf(baby, Human);

// console.log(baby)

// console.log(baby.weight)
// console.log(baby.hand)
function Human(hand, leg)
{
    this.hand = hand
    this.leg = leg
}

function Baby(weight)
{
    this.weight = weight
}


Baby.__proto__ = Human

const b1 = new Baby("1.5kg");
const h1 = new Human(2,2);

b1.__proto__ = h1
console.log(b1)
