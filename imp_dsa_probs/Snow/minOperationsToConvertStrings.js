let operationCount = 0;

function minOperationReqForConv(str1, str2){
    if(str1.length !== str2.length){
        operationCount = -1;
        return;
    }
    let i = 0;
    while(i>=0 && i<str1.length){
        if(str1===str2){
            break;
        }
        if(str1[i]===str2[i]){
            i++;
            continue;
        }
        let char = str2[i]; //b
        let idx = str1.indexOf(char); //0
        let newStr = str1[idx] + str1.substring(0, idx) + str1.substring(idx+1);
        console.log(newStr);
        str1 = newStr;
        i--;
        operationCount++;
    }
}


// let str1 ="ABD", str2 = "BAD";

// let str1 ="EACBD", str2 = "EABCD";

let str1 ="milk", str2 = "beer";
minOperationReqForConv(str1, str2);
console.log(operationCount);