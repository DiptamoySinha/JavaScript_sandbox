class Student
{

    constructor()
    {
        this.name = ''
        this.age = -1
    }

    get name()
    {
        return this._name.toUpperCase();
    }

    set name(val)
    {
        this._name = val;
    }
}

function Teacher(email, subject)
{
    // this.email = email
    // this._subject = subject

    Object.defineProperty(this, 'email', {
        get: function() {
            return this._email;
        },
        set: function(val) {
            this._email = val;
        }
    })

    Object.defineProperty(this, 'password', {
        get: function() {
            return this._password;
        },
        set: function(val) {
            this._password = val;
        }
    })
}

const t1 = new Teacher()
t1.email = "asds"
t1.password = "popo"
console.log(t1)

// const s1 = new Student();
// // s1.name = 'mark';
// console.log(s1)