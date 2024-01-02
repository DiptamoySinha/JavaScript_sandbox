class Node
{
    constructor(val)
    {
        this.val = val;
        this.next = null;
    }

    toString() {
        return this.val;
      }
}

const n1 = new Node(10);
const n2 = new Node(10);
const n3 = new Node(10);

n1.next = n2;
n2.next = n3;

const set = new Set();
set.add(n1); 
set.add(n2); 
set.add(n1.next); 

console.log(set)