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

    // findPathOfATargetNode(root, target, stack=[]){
    //     if(!root) { return 0}
    //     if(root.val===target) {stack.push(root.val); return 1;}
    //     stack.push(root.val);
    //     let existsInLeft = this.findPathOfATargetNode(root.left, target, stack);
    //     let existsInRight = this.findPathOfATargetNode(root.right, target, stack);
    //     if(!existsInLeft && !existsInRight){
    //         stack.pop();
    //     }
    //     // if(existsInLeft || existsInRight){
    //     //     return stack;
    //     // }
    //     return existsInLeft || existsInRight;
    // }

    lowestCommonAncestor = function(root, p, q) {
        let stack1 = this.findPathOfATargetNode(root,p);
        let stack2 = this.findPathOfATargetNode(root,q);
        //console.log(stack1, stack2)
        let ans;
        while(stack1.length && stack2.length){
            let poppedEle1 = stack1.pop();
            let poppedEle2 = stack1.pop();
            if(poppedEle1 === poppedEle2){
                ans = poppedEle1;
            }
        }
        return ans;
        
    };
    findPathOfATargetNode(root, target){

        const stack =[];
    
        function findPath(root, target){
            if(!root) { return 0}
            if(root.val===target) {stack.push(root.val); return 1;}
            stack.push(root.val);
            let existsInLeft = findPath(root.left, target);
            let existsInRight = findPath(root.right, target);
            if(!existsInLeft && !existsInRight){
                stack.pop(); 
            }
            // if(existsInLeft || existsInRight){
            //     return stack;
            // }
            return existsInLeft || existsInRight;
        }
    
        //console.log(stack);
        findPath(root, target);
        return stack;
    }

}

let rootNode = new TreeNode(10);
let node1 = new TreeNode(20);
let node2 = new TreeNode(30);
let node3 = new TreeNode(40);
let node4 = new TreeNode(50);
//let node5 = new TreeNode(60);


//       10
//   20      30
// 40  50   

let tree = new Tree(rootNode);
let root = tree.getRootNode();
root.left = node1;
root.right =  node2;
node1.left= node3;
node1.right = node4;



// tree.inorder(root);
// let height = tree.maxHeight(root);
// console.log(height)

// console.log(tree.diameterOfBT(root))

console.log(tree.findPathOfATargetNode(root, 40))
