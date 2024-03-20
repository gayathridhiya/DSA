var isSymmetric = function(root) {
    
    if(!root) return false;

    return isMirror(root.left, root.right);
};

function isMirror(rootLeft, rootRight){
    if(!rootLeft && !rootRight) return true;

    if((rootLeft && rootRight) && (rootLeft.val === rootRight.val)){
        return isMirror(rootLeft.left, rootRight.right) && isMirror(rootLeft.right, rootRight.left);
    }
    else{
        return false
    }
}