var lowestCommonAncestor = function(root, p, q) {
    let stack1 = findPathOfATargetNode(root,p.val);
    let stack2 = findPathOfATargetNode(root,q.val);
    //console.log(stack1, stack2)
    // if(stack1.length >= stack2.length){
    //     while(stack1.length){
    //         let poppedEle = stack1.pop();
    //         if(stack2.includes(poppedEle)){
    //             return poppedEle.val;
    //         }
    //     }
    // }else{
    //     while(stack2.length){
    //         let poppedEle = stack2.pop();
    //         if(stack1.includes(poppedEle)){
    //             return poppedEle.val;
    //         }
    //     }
    // }

    let ansNode = null;
    while(stack1.length && stack2.length){
            let poppedEle1 = stack1.shift();
            let poppedEle2 = stack2.shift();
            if(poppedEle1.val === poppedEle2.val){
                ansNode = poppedEle1;
            }
    }

    return ansNode; 
};
function findPathOfATargetNode(root, target){
    let stack =[];
    //console.log(stack);
    findPath(root, target, stack);
    
    function findPath(root, target,stack){
        if(!root) { return 0}
        if(root.val===target) {stack.push(root); return 1;}
        stack.push(root);
        let existsInLeft = findPath(root.left, target,stack);
        let existsInRight = findPath(root.right, target,stack);
        if(!existsInLeft && !existsInRight){
            //console.log(stack, target)
            stack.pop(); 
        }
        return existsInLeft || existsInRight;
    }


//console.log(stack);
    return stack;

}