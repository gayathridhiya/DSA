var diameterOfBinaryTree = function(root) {
    let max = 0;
    let heightOfTree = height(root);
    return max;
    
    function height(root){
        if(!root) return 0;
        let leftHeight = height(root.left);
        let rightHeight = height(root.right);
        max = Math.max(max, leftHeight + rightHeight);
        return Math.max(leftHeight, rightHeight) + 1;
    }
};