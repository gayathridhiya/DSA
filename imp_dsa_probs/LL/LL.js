class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LL{
    constructor(node){
        this.root = node;
    }
    getRoot(){
        return this.root;
    }

    printLL(root){
        let current = root;

        while(current){
            console.log(current.val);
            current = current.next;
        }
    }

    lengthOfLL(root){
        let current = root;

        let count = 0;

        while(current){
            count++;
            current = current.next;
        }

        console.log(count);
    }

    reverseLL(root){
        let current = root;
        let prev = null;
        let next = null;

        while(current){

            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        
        root = prev;

        this.printLL(root);
    }
}

let node1 = new Node(10);
let node2 = new Node(20);
let node3 = new Node(30);
let node4 = new Node(40);
let node5 = new Node(50);

let ll = new LL(node1);
root = ll.getRoot();
root.next = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

ll.printLL(root);

ll.lengthOfLL(root);

ll.reverseLL(root);

