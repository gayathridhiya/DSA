var rotate = function(nums, k) {
    let newArr = Array.from({length:nums.length});
    for(let i=0;i<nums.length;i++){
         newArr[(i+k)% nums.length]=nums[i];   ///Imp
    }
    Object.assign(nums, newArr);
    return newArr;
 };

//  Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

//if i were to do this operation in the same array, then ==> after k, reverse the array half and insert at the start

//[1,2,3,4,5,6,7] => reverse to [7,6,5,4,3,2,1] => [5,6,7,4,3,2,1] => [5,6,7,1,2,3,4] (split the array by k and reverse)
