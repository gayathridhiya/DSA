// function printAllSubsequences(str){
//     let res = [];
//     for(let i=0;i<str.length;i++){
//         for(let j=i;j<str.length;j++){
//             res.push(str.substring(i,j+1));
//         }
//     }
//     return res;
// }

// console.log(printAllSubsequences("abc"))
// ['a', 'ab', 'abc', 'b', 'bc', 'c'] -> this is substring
//we want op like Output : a, b, c, ab, bc, ac, abc


function fn(str, op){
    if(str.length===0){
        console.log(op); return;
    }
    let char = str[0];
    let remainingHalf = str.substring(1);
    fn(remainingHalf,op+char);
    fn(remainingHalf,op);
}

fn("abcd","")