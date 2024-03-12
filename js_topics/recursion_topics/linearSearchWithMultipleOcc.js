// linearSearchOnMultipleOccurance([11, 17, 88, 17, 99, 5,5 ,17], 17)
// [17]
function linearSearchOnMultipleOccurance(arr, target, itr =0, ans=[]){
    if(itr===arr.length){
        return ans;
    }
    if(arr[itr]==target){
        ans.push(target);
        //if i put return here, one occurance is returned
    }
    return linearSearchOnMultipleOccurance(arr, target, itr+1, ans);
}
// undefined
// linearSearchOnMultipleOccurance([11, 17, 88, 17, 99, 5,5 ,17], 17)
// (3) [17, 17, 17]