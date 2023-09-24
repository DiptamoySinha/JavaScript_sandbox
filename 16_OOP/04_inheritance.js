class Human {
    constructor(height, weight, leg, hand)
    {
        this.height = height;
        this.weight = weight;
        this.leg = leg;
        this.hand = hand;
    }

    static eat()
    {
        console.log("I am eating")
    }
}

class Male extends Human {
    constructor(height, weight, leg, hand, gender)
    {
        super(height, weight, leg, hand);
        this.gender = gender
    }
}

const h1 = new Human(6.5, 80, 2,2, 'male')
console.log(Human.eat())
// console.log(h1.eat()) // can't use the static method via instance of a class

