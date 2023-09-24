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

const s1 = new Student()
s1.name = "diptamoy"
console.log(s1.name)