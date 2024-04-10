// let s="1211167569076543";

// function findUniqueSubstring(s){
//     let curr="";
//     let longest ="";
//     for(let i=0;i<s.length;i++){
//         if(curr.includes(s[i])){
//             curr = s[i];
//         }else{
//             curr+=s[i];
//             if(curr.length >= longest.length){
//                 longest = curr;
//             }
//         }
//     }
//     return longest;
// }

// console.log(findUniqueSubstring(s))


let s="6543";
// 6 65 654 6543
//     5 54 543
//         4 43
//            3

// s="1211167569076543"

s="12341";

let subStrArr = [];

for(let i=0;i<s.length;i++){
    for(let j=i;j<s.length;j++){
        let substr = s.substring(i, j+1);
        if(!containsDuplicate(substr)){
            subStrArr.push(s.substring(i, j+1))
        }
    }
}

console.log(subStrArr)

function containsDuplicate(str){
    let m ={};
    for(let i of str){
        if(m[s[i]]){
            return true;
        }else{
            m[s[i]] = 1
        }
    }
    return false;
}