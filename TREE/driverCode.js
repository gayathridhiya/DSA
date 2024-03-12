class Node{
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;
    }
}
class BST{
    constructor(){
        this.root = null;
    }

    insertNode(node){
        if(this.root !== null){
            temp = this.root;
            if(temp.val < node.val){
                
            }
        }else{
            this.root = node;
        }
    }
}