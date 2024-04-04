class TreeNode{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class Tree{
    constructor(node){
        this.root = node;
    }

    getRootNode(){
        return this.root;
    }

    inorder(root){ //LPR
        if(!root) return;
        this.inorder(root.left);
        console.log(root.val);
        this.inorder(root.right);
    }

    maxHeight(root){
        if(!root) return 0;
        let lh = this.maxHeight(root.left);
        let rh = this.maxHeight(root.right);
        return Math.max(lh,rh)+1;
    }

    diameterOfBT(){
        let max = 0;
        diameter(root);
        function diameter(root){
            if(!root) return 0;
            let lh = diameter(root.left);
            let rh = diameter(root.right);
            max = max> (lh+rh) ? max : (lh+rh);
            return Math.max(lh,rh)+1;
        }
        return max;
    }

    isSameTree(self,other){
        if(!self && !other){
            return true;
        }
        return self.val === other.val && this.isSameTree(self.left, other.left) && this.isSameTree(self.right, other.right);
    }
}

let rootNode = new TreeNode(10);
let node1 = new TreeNode(20);
let node2 = new TreeNode(30);


let tree = new Tree(rootNode);
let root = tree.getRootNode();
root.left = node1;
root.right =  node2;
node1.right= new TreeNode(50);


tree.inorder(root);
let height = tree.maxHeight(root);
console.log(height)

console.log(tree.diameterOfBT(root))
