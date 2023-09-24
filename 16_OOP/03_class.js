class Customer {

    constructor(username, email, password)
    {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword()
    {
        let result = ""

        for(let i=0;i<this.password.length;i++)
        {
            let code = this.password[i].charCodeAt(0);
            code += 2;
            result += String.fromCharCode(code);
        }

        return result;
    }

    printMe()
    {
        return `my username is ${this.username}, password is: ${this.encryptPassword()}, email: ${this.email}`
    }
}

const userOne = new Customer('diptamoy', 'diptamoy@gmail.com', 'abcde')
console.log(userOne.printMe());