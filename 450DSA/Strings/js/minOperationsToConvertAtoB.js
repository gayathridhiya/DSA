function minOperationsToConvertAtoB(s1,s2){
    let i = s1.length-1;
    let j = s2.length-1;
    let res = 0;
    while(i >= 0){
        if(s1[i]==s2[j]){
            i--;
            j--;
        }else{
            i--;
            res++;
        }
    }
    return res;
}

// let s1 = "abd";
// let s2 = "bad";

// let s1 = "abd";
// let s2 = "abd";

let s1 = "eacbd";
let s2 = "eabcd";
console.log(minOperationsToConvertAtoB(s1,s2))