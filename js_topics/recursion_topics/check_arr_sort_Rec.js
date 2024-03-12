function arrsortrec(arr, itr=0){ 
    console.log(itr);
    if(itr===arr.length) return true;
    if(arr[itr]>arr[itr+1]) return false;
    return arrsortrec(arr, itr+1);
}

//     console.log(arrsortrec([1,2,14,7,9,12]))
// VM9153:1 0
// VM9153:1 1
// VM9153:1 2
// VM9161:1 false
// undefined
// console.log(arrsortrec([1,2,4,7,9,12]))
// VM9153:1 0
// VM9153:1 1
// VM9153:1 2
// VM9153:1 3
// VM9153:1 4
// VM9153:1 5
// VM9153:1 6
// VM9175:1 true
// undefined