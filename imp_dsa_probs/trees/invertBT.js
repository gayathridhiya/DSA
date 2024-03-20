var invertTree = function(root) {
    if(!root) return root;
    return postOrderInvert(root);
};

function postOrderInvert(root){
    if(!root) return root;
    let rootLeft = postOrderInvert(root.left);
    let rootRight = postOrderInvert(root.right);
    let temp = rootLeft;
    rootLeft = rootRight;
    rootRight = temp;

    //console.log(rootLeft, rootRight);

    root.left = rootLeft;
    root.right = rootRight;
    return root;
}


//do postorder and then swap