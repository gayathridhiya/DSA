function flatArrayOuterScope(arr){

    let op = [];

    function flattenAnArray(arr){
        let temp = [];
        for(let i=0;i<arr.length;i++){
            
            if(arr[i] instanceof Array){
                temp.push(...flattenAnArray(arr[i]))
            }else{
                temp.push(arr[i]);
            }
        }

        op.push(...temp);
        return temp

    }
    let res = flattenAnArray(arr);
    return res;

}


//console.log(flatArrayOuterScope([1,2, [3,4, [5], 6,7],8,9]));
console.log(flatArrayOuterScope([1,2, [3,4, [5, [1,2, [3,4, [5], 6,7],8,9]], 6,7],8,9]));

//iterate throughout the array and if you find an element, add it to your result
//if you find an array, recursively call your method again

//if your itr value==original length (i.e if no elements) of outermost array, then you return
