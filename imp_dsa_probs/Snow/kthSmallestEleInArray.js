let arr = [3,2,1,5,6,4]

function kthLargetElementInArray(arr){
    let k = 2;
    let max = Number.NEGATIVE_INFINITY;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i];
            arr[i] = Number.NEGATIVE_INFINITY
        }
    }
    return max;
}


console.log(kthLargetElementInArray(arr), arr)