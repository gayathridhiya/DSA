/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if(nums.length === 1){
        return nums[0]
    }

    let max = Number.NEGATIVE_INFINITY;
    // let itrPro = 1;
    for(let i=0;i<nums.length;i++){
        let itrPro = 1;
        for(let j = i; j< nums.length; j++){
            itrPro*=nums[j]
            if(itrPro > max){
                max = itrPro;
            }
        }
    }
    return max;
};

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

//Optimal solution - striver - can either be max of so far max & max of (prefix product or suffic product), if 0 encounter - reset

var maxProduct = function(nums) {

    let max = Number.NEGATIVE_INFINITY;
    let prefixProduct = 1;
    let suffixProduct = 1;

    let n = nums.length;

    for(let i=0, j=n-1; i<n, j>=0; i++, j--) {
        prefixProduct*=nums[i];
        suffixProduct*=nums[j];

        max = Math.max(max, Math.max(prefixProduct, suffixProduct));

        if(prefixProduct === 0){
            prefixProduct = 1;
        }

        if(suffixProduct === 0){
            suffixProduct = 1;
        }
        
    }
    return max;
};