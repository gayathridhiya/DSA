/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {

    if(!root){
        return []
    }
    
    let q = [];
    let result = [];

    q.push(root);

    while(q.length){

        let qLen = q.length;

        for(let i=0;i<qLen;i++){
            let poppedEle = q.shift();
            if(poppedEle.left){
                q.push(poppedEle.left)
            }
            if(poppedEle.right){
                q.push(poppedEle.right)
            }
            if(i==qLen-1){
                result.push(poppedEle.val)
            }
        }

    }
    return result;
};