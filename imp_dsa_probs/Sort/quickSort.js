let arr = [5,3,7,2,8,4,1]

function quickSort(arr){
    let n = arr.length;

    //base
    if(n<=1) return arr;

    let mid = Math.floor(n/2);
    let pivot = arr[mid];
    let left = [];
    let right = [];

    for(let i =0;i<n;i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }else if (arr[i] > pivot){
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

//take pivot element
//arrange (add in left, if less than pivot, else right)
//recursion on left half & pivot & rec on right half
//join



console.log(quickSort(arr))

// tc -> o(nlogn)
// sc -> o(n)

// merge sort -> divide & sort