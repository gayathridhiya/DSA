function remove_duplicates_inplace(arr){
    //two pointer approach
    let i = 0;
    for(let j=1;j<=arr.length-1;j++){
        if(arr[i]!==arr[j]){
            i=i+1;
            arr[i] = arr[j];
        }
    }
    return arr;
}
arr= [1,1,2,2,2,3,4,5];
console.log(remove_duplicates_inplace(arr))
//arr= [1,1,2,2,2,3,4,5] => [1,2,3,4,5,_,_,_]