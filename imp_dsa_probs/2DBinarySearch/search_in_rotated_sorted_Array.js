var search = function(nums, target) {
    let s=0;
    let e = nums.length -1;
    while(s<=e){
        let mid = Math.floor((s+e)/2);
        if(target === nums[mid]){
            return mid
        }
        if(nums[s]<= nums[mid]){
            if(nums[s] <= target && target<=nums[mid]){
                e = mid-1;
            }else{
                s= mid+1;
            }
        }else{
            if(nums[mid] <= target && target<=nums[e]){
                s= mid+1
            }else{
                e=  mid-1
            }
        }
    }
    return -1;
};



// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
// Example 3:

// Input: nums = [1], target = 0
// Output: -1