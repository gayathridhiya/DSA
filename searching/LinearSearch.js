function linearSearch(arr,target){
    if(arr.length===0) return -1;
    for(let i=0; i<arr.length;i++){
        if(arr[i]===target) return i;}
    return -1
}


//Minimum element in an array - Linear search

function minElementInArrayLS(arr){
    min=arr[0];
    for(let i=1; i< arr.length; i++){
        if(arr[i]<min) 
            min=arr[i];
    }
    return min;
}


//search in a 2D array

function searchIn2DArray(arr, target){
    const r=arr.length;
    for(let i=0; i<r; i++){
        const c= arr[i].length;
        for(let j=0;j<c;j++){
            if(arr[i][j]===target){
                return {i,j};
            }
        }
    }
    return -1
}
//arr=[[1,2,3],[9,18,3],[6,7,14]]
// searchIn2DArray(arr,7)
// {i: 2, j: 1}
// searchIn2DArray(arr,14)
// {i: 2, j: 2}
// searchIn2DArray(arr,13)
// -1



//Math.floor(2.833333333) = 2
//Math.ceil(2.833333333) = 3
//Math.sqrt(4) = 2



//even no of digits
function evenNoOfDigits(arr){ let even=0;
    for(let i=0;i<arr.length;i++){
        if(String(arr[i]).length%2==0){
            even+=1;
        }
    }
    return even
}

//evenNoOfDigits([18,124,9,1764,98,1]) 3 because 18,124,98

//or

var findNumbers = function(nums) {
    return nums.map(x => String(x).length).filter(x => x%2===0).length; //[18,124,9,1764,98,1] => [2,3,1,4,2,1]=> [2,4,2]=>3
};

//Math.floor(Math.log10(number)) + 1;  - find no. of digits in a number 
// (Math.log10(1728)) => 3.2375437381428744 => 3 + 1 => 4


// Richest Customer Wealth

// Example 2:

// Input: accounts = [[1,5],[7,3],[3,5]]
// Output: 10
// Explanation: 
// 1st customer has wealth = 6
// 2nd customer has wealth = 10 
// 3rd customer has wealth = 8
// The 2nd customer is the richest with a wealth of 10.


var maximumWealth = function(accounts) {
    return Math.max(...accounts.map(x => x.reduce((acc,curr) => acc+curr, 0)))
};


// accounts = [[1,2,3],[3,2,1]]
// (2) [Array(3), Array(3)]0: (3) [1, 2, 3]1: (3) [3, 2, 1]length: 2[[Prototype]]: Array(0)
// accounts.map(x => x.reduce((acc,curr) => acc+curr, 0))
// (2) [6, 6]
// Math.max(...accounts.map(x => x.reduce((acc,curr) => acc+curr, 0)))
// 6
