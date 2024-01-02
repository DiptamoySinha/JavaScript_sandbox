// // object created from literal is not singleton
// // object created from constructor is singleton


// // literals

const myKey = Symbol("key");

const details = {
    name: "Diptamoy Sinha",
    age: 24,
    "address": "Hyderabad, Telangana",
    height: 5.11,
    eyeSight: 5/6,
    [myKey]: "MyValue",
    greeting: function() {
        return `Hello I am ${this.name}`
    }
}

// console.log(details.name);
// console.log(details.age);
// console.log(details["address"]);
// console.log(details[myKey]);
// console.log(details.eyeSight);
// console.log(details.greeting);
// console.log(details.greeting());
// console.log(details.duplicate);

// details.weight = () =>
// {
//     return this.height * 3;
// }

// console.log();
// console.log(details);

// console.log();
// console.log(Object.keys(details));
// console.log(Object.values(details));


// // destructuring 
// const {name , age} = details;
// console.log(name);
// console.log(age);

function fun({name = "diptamoy"}) {
    console.log(`name: ${name}`)
}

// fun(details)

// const {name='d', a} = {n: 12, age:25}

// console.log(name)

const obj = {
    get name()
    {
        return this._name;
    },

    set name(name)
    {
        this._name = name
    }
}

