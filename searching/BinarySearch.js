var binarySearch = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
    let mid;
    while(left<=right){
        mid = Math.floor((left + right)/2);
        if(nums[mid]===target){
            return mid;
        }
        else if(target > nums[mid]){
            left = mid + 1;
            
        }else{
            right = mid - 1;
        }
    }
    return -1
};

//TC: O(logn)