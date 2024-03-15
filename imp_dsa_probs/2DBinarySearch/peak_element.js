var findPeakElement = function(nums) {

    if(nums.length === 1){
        return 0;
    }

    let s = 0;
    let e = nums.length -1;
    while(s<=e){
        let mid = Math.floor( (s+e)/2 );

        // arr[m-1] < arr[m] > arr[m+1] - peak
        if((mid !== 0 && mid !== nums.length - 1) && (nums[mid-1] < nums[mid] && nums[mid] > nums[mid+1])){
            return mid;
        }

        // negative inf & arr[0] > arr[1] -> s is peak  _ \
        if(s==0 && (nums[0] > nums[1])){
            return s;
        }

        // arr[e - 1] < arr[e] && infinity  -> e is peak  / _
        if(e==nums.length-1 && (nums[e-1] < nums[e])){
            return e
        }

        //                              /
        // to ignore any of the half  /
        if(nums[mid-1] <= nums[mid] && nums[mid] <= nums[mid+1]){
            s=mid+1;
        }

        else{
            e=mid-1;
        }

    }
    //only case it fails now is like [3,4,3, 2, 1] -> so return s +1
    return s+1;

};




//striver

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.
// Example 2:

// Input: nums = [1,2,1,3,5,6,4]
// Output: 5
// Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.