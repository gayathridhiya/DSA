var threeSum = function(arr) {
    if(arr.length < 3) return [];

    let res = [];
    arr.sort();
    let targetSum = 0;

    for(let i = 0; i<arr.length; i++){
        let firstEle = arr[i];
        let l = i+1;
        let r = arr.length-1;
        while(l<r){
            let sum = firstEle + arr[l] + arr[r];
            if(sum===targetSum){
                console.log([firstEle , arr[l] , arr[r]])
                res.push([firstEle , arr[l] , arr[r]]);
                l++; r--;
            }
            else if(sum >= targetSum){
                r--;
            }else{
                l++;
            }
        }
    }
    console.log(res)
    return res;
};

console.log(threeSum([-1,0,1,2,-1,-4]))