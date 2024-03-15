var maxSubArray = function(nums) {
    if(nums.length === 1){
        return nums[0];
    }
    let maxSum = Number.NEGATIVE_INFINITY;
    for(let i =0;i<=nums.length-2;i++){
        let currI = nums[i];
        let itrSum = 0;
        for(let j = i ;j<=nums.length-1;j++){
            itrSum += nums[j];

            if(itrSum > maxSum){   //Iterating through each element, and if the value is greater, incrementing it, 0(N square)
                maxSum = itrSum;
            }
        }
    }
    if(nums[nums.length-1]>maxSum){      //since iteration doesnt cover last element
        maxSum = nums[nums.length - 1]
    }
    return maxSum;
};
//nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.


//Optimised Approach
//Kadane's algorithm


//kadane's algorithm
// max = Number.NEGATIVE_INFINITY
// keep adding curr to sum (sum+=curr)
//if sum > max => update max
// if sum<0 -> reset sum


var maxSubArray = function(nums) {
    let max = Number.NEGATIVE_INFINITY;
    let sum = 0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
        if(sum>max){
            max = sum;
        }

         if(sum<0){
            sum = 0
        }
    }
    return max
 }
