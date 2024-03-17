// Binary Tree Level Order Traversal
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var levelOrder = function(root) {
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


//TC: O(N) - We are visiting every node only once, SC: O(N/2)=> O(N)  ->In a balanced BT , all leaf nodes will be full and whats the no of LNodes? N/2 