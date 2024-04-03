var isValid = function(s) {
    let stack =[];
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    for(let i of s){
        if(i in map){
            stack.push(i);
        }
        else {
            let top = stack.pop(); //(
            if(map[top]!==i){
                return false;
            }
        }
    }
    if(stack.length) {
        return false;
    }else{
        return true;
    }
};