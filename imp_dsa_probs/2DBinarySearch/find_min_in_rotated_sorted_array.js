var findMin = function(arr) {
    let s = 0;
    let e = arr.length -1;
    let min = Number.POSITIVE_INFINITY

    while(s<=e){

        let mid = Math.floor( (s+e)/2 );

        if(arr[s] > arr[mid] && arr[mid] < arr[e]){  //[3,1,2]
            if(min > arr[mid]){
                min = arr[mid]
            }
        }

        if(arr[s] <= arr[mid]){   //if left half is sorted, move to right half but keep track of min in left half
            if(arr[s] <= min){
                min = arr[s]
            }
            s = mid+1;
        }else{
            e= mid -1
        }
        
    }
    return min;
};