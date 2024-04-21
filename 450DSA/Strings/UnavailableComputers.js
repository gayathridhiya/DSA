function unAvaialbleComputers(n, s){
    // s=“ABBAJJKZKZ”
    let arr = [];
    let unAvailableArr = [];
    let unAvailableCount = 0;
    for(let i of s){
        if(arr.includes(i)){
            arr.splice(arr.indexOf(i), 1);
        }else{
            if(arr.length < n){
                arr.push(i);
            }else{
                if(unAvailableArr.includes(i)){
                    unAvailableArr.splice(unAvailableArr.indexOf(i),1);
                }else{
                    unAvailableArr.push(i);
                    unAvailableCount++;
                }
            }
        }
    }
    return unAvailableCount;
}

console.log(unAvaialbleComputers(2, "ABBAJJKZKZ"));
console.log(unAvaialbleComputers(3, "GACCBDDBAGEE"));
console.log(unAvaialbleComputers(3, "GACCBGDDBAEE"));
console.log(unAvaialbleComputers(1, "ABCBCA"));
console.log(unAvaialbleComputers(1, "ABCBCADEED"));

// Time complexity of above solution is O(n) and extra space required is O(CHAR_MAX) 
// where CHAR_MAX is total number of possible characters in given sequence.