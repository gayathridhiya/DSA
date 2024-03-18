class Node{
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

    getRoot(){
        return this.root;
    }

    preOrder(root){
        //plr
        if(root===null){
            return 
        }
        console.log(root.val);
        this.preOrder(root.left);
        this.preOrder(root.right);
    }

    levelOrder (root) {
        if(!root){
            return [];
        }
        let q = [];
        q.push(root);
    
        let result=[];
        
        while(q.length){
            let qLen = q.length;
            let currentLevelElements = [];
    
            for(let i=0; i<qLen; i++){
                let poppedEle = q.shift();
                currentLevelElements.push(poppedEle.val);
                if(poppedEle.left !== null){
                    q.push(poppedEle.left);
                }
                if(poppedEle.right !== null){
                    q.push(poppedEle.right);
                }
            }
    
            result.push(currentLevelElements);
            
        }
        return result;
    };

    immediateLevelSuccessor(root, targetNode) {
        if(!root){
            return [];
        }
        let q = [];
        q.push(root);
    
        let result=[];

        let foundtarget = false;
        
        while(q.length){
            let qLen = q.length;
            //let currentLevelElements = [];
    
            for(let i=0; i<qLen; i++){
                let poppedEle = q.shift();
                //currentLevelElements.push(poppedEle.val);

                if(poppedEle.val === targetNode.val){
                    foundtarget = true;   //do  a Lelev order traversal and break when you found target
                    break
                }

                if(poppedEle.left !== null){
                    q.push(poppedEle.left);
                }
                if(poppedEle.right !== null){
                    q.push(poppedEle.right);
                }
                if(foundtarget === true){
                    console.log(poppedEle.val);
                    result.push(poppedEle.val);
                    
                }
            }
    
            //result.push(currentLevelElements);
            
        }
        return result[0];  // return the first successor
    };

    

}

const node1 = new Node(3);
const node2 = new Node(4);
const node3 = new Node(8);
const node4 = new Node(12);
const node5 = new Node(14);
const node6 = new Node(7);
const node7 = new Node(11);

let tree = new Tree(node1);
tree.root.left =node2;
tree.root.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;

//     3
//   4  8
// 12 14 7 11

let root = tree.getRoot();

//tree.preOrder(root);

//console.log(...tree.levelOrder(root));

console.log(tree.immediateLevelSuccessor(root, node3));



