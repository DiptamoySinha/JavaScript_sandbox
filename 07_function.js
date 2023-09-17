function f()
{
    console.log("THis is from function f");
}

f()

let fun = function()
{
    console.log(`this is from function fun `);
    console.log(this);
}

fun();

let func = () => {
    console.log(`This is from function func`);
    console.log(this);
}

func();

const addNum = (...nums) => ({nums});

console.log(addNum(1,2,3,4,5));

const one = () => {
    console.log("parent function parent")
    var nameCourse = `changed from parent`
    console.log(nameCourse, val);
    let glob = 40;
    function child() {
        console.log();
        console.log("child function");
        console.log(glob);
        var chi = "hello";
        nameCourse = `changed from child`
        console.log(nameCourse)
    }
    // console.log(chi); // not accessable 
    child();
}

var nameCourse = "Javascript"
let val = 10
var chi = "chi"
one();
console.log("outside: ")
console.log(nameCourse, val)
console.log(chi)

