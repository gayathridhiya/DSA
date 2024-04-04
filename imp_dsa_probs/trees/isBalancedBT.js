var isBalanced = function(root) {
    let height_diff;
    let diff = maxDepth(root);
    if(diff === -1){
        return false;
    }else{
        return true;
    }

    function maxDepth(root) {
        if(!root) return 0;
        let lh = maxDepth(root.left);
        let rh = maxDepth(root.right);
        if(lh === -1 || rh === -1) return -1;
        height_diff = Math.abs(lh-rh);
        if(height_diff > 1) return -1;
        return Math.max(lh,rh) + 1;
    };
};