const ul = document.querySelector('ul');
const li = document.querySelector('li#girl');

ul.addEventListener('click', (e) => {
    console.log(e.target.tagName);
    console.log("cliked on ul")
}, true) // true mean event will triggered from parent to child
// false mean it will be event bubbling. event will be troggered from child to parent 

li.addEventListener('click', (e) => {
    console.log(e.target);
    e.target.style.height='300px';
    e.target.style.width='200px';
    // e.stopPropagation();
}, true)





