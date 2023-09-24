function User(name, quote, isLogged)
{
    this.name = name;
    this.quote = quote;
    this.isLogged = isLogged;
}

User.info = "This is user constructor function"

const userOne = new User("Diptamoy",  ["Every Dark Cloud has the silverline"], true)
const userTwo = new User("Mark",  ["Hardwork mean how much I push myself to get the work done"], true)

User.prototype.userid = function() {
    console.log(this)
    return this.name + '1234'
}

console.log(userOne.userid())
console.log(userOne)
console.log(User.info)
