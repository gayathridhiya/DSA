var isCousins = function(root, x, y) {
    const {levelDict, parent} = getLevelAndParentOfEveryNode(root);
    //console.log(levelDict, parent);
    if(levelDict[x]===levelDict[y] && parent[x]!==parent[y]){
        return true;
    }else{
        return false;
    }
};


var getLevelAndParentOfEveryNode = function(root) {
    if(!root){
        return {};
    }
    let q = [];
    q.push(root);

    let levelDict={};
    let level = 0;

    let parent={};
    
    while(q.length){
        let qLen = q.length;
        level+=1;

        for(let i=0; i<qLen; i++){
            let poppedEle = q.shift();

            levelDict[poppedEle.val]=level;

            if(poppedEle.left !== null){
                q.push(poppedEle.left);
                parent[poppedEle.left.val] = poppedEle.val;
            }

            if(poppedEle.right !== null){
                q.push(poppedEle.right);
                parent[poppedEle.right.val] = poppedEle.val;
            }
        }
        
    }
    //console.log({levelDict,parent})
    return {levelDict,parent};
};


//is same level and has no same parents -> cousins

// Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
// Output: true

// Input: root = [1,2,3,null,4], x = 2, y = 3
// Output: false