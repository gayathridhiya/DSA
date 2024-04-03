//Takes an elemnt and places in its correct position

function InsertionSort(arr){
    for(let i=0;i<arr.length;i++){

        let j = i;
        while(j>0 && arr[j-1]>arr[j]){
            //swap
            temp = arr[j];
            arr[j]=arr[j-1];
            arr[j-1]=temp; 
            
            j-=1;
        }
    }
    return arr;
}

// TC 0(N2)