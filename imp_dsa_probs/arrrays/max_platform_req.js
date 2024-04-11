// Sort the arrival and departure times of trains.
// Create two pointers i=1, and j=0, and a variable to store ans and current count plat
// Run a loop while i<n and j<n and compare the ith element of arrival array and jth element of departure array.
// If the arrival time is less than or equal to departure then one more platform is needed so increase the count, i.e., plat++ and increment i
// Else if the arrival time is greater than departure then one less platform is needed to decrease the count, i.e., plat– and increment j
// Update the ans, i.e. ans = max(ans, plat).

// let arr = new Array(900, 940, 950, 1100, 1500, 1800);
//     let dep = new Array(910, 1200, 1120, 1130, 1900, 2000);

function maxPlatformReq(arr, dep){
    arr = arr.sort();
    dep = dep.sort();
    let count=1;
    let max=1;
    let n = arr.length;
    let i=1;
    let j=0;

    while(i<n && j <n){
        if(arr[i]<=dep[j]){  //if next arrival greater than current dep => plat ++ and check for next arr
            count++; i++;
        }else if(arr[i]>dep[j]){ //else, dec plat (use the same) and look for next departure 
            count--; j++;
        }

        if(count > max){
            max = count;
        }
    }
    return max;
}

// function maxPlatformReq(arr, dep,n)
// {
     
//     // Sort arrival and 
//     // departure arrays
//     arr = arr.sort((a,b) => a-b)
//     dep = dep.sort((a,b) => a-b);
     
//     // plat_needed indicates
//     // number of platforms
//     // needed at a time
//     let plat_needed = 1; 
//     let result = 1;
//     let i = 1;
//     let j = 0;
     
//     // Similar to merge in
//     // merge sort to process 
//     // all events in sorted order
//     while (i < n && j < n)
//     {
         
//         // If next event in sorted 
//         // order is arrival, increment
//         // count of platforms needed
//         if (arr[i] <= dep[j])
//         {
//             plat_needed++;
//             i++;
//         }
     
//         // Else decrement count 
//         // of platforms needed
//         else if (arr[i] > dep[j])
//         {
//             plat_needed--;
//             j++;
//         }
 
//         // Update result if needed 
//         if (plat_needed > result) 
//             result = plat_needed;
//     }
     
//     return result;
// }

let arr = new Array(900, 940, 950, 1100, 1500, 1800);
let dep = new Array(910, 1200, 1120, 1130, 1900, 2000);

console.log(maxPlatformReq(arr,dep));



//brute force

function findPlatform( arr, dep, n) 
{ 
  
    // plat_needed indicates number of platforms 
    // needed at a time 
    var plat_needed = 1, result = 1; 
    var i = 1, j = 0; 
  
    // run a nested loop to find overlap 
    for (var i = 0; i < n; i++) { 
        // minimum platform 
        plat_needed = 1; 
  
        for (var j = 0; j < n; j++) { 
            // check for overlap 
            if(i != j) 
              if(arr[i] >= arr[j] && dep[j] >= arr[i]) 
                  plat_needed++; 
        } 
  
        // update result 
        result = max(result, plat_needed); 
    } 
  
    return result; 
} 
  