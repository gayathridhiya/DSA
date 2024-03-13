function print2largest(arr,n){
    let first = arr[0];
    let second = Number.NEGATIVE_INFINITY;
    for(let i = 1; i<n-1;i++){
        let current = arr[i];
        if(current>first){
            second=first;
            first=current;
        }else if(current!==first && current>second){
            second=current;
        }
    }
    return second;
}

console.log(print2largest([12,35,1,10,34,1],6))