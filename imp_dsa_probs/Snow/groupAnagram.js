strs = ["eat","tea","tan","ate","nat","bat"]

function groupAnagram(strs){
    let res = {};
    for(let s of strs){
        let key = s.split("").sort().join("");
        if(!res[key]){
            res[key] = [s];
        }else{
            res[key].push(s);
            res[key] = res[key];
        }
    }
    return res;
}
console.log(groupAnagram(strs))

//[["eat","tea","ate"],["tan","nat"],["bat"]] Object values