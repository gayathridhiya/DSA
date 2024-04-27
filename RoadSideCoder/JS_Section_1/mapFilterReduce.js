//map filter and reduce

let arr=[1,2,3,4];

//Map - returns new arr, applies opn on each ele
let arr1= arr.map( (curr, idx, arr) => curr+1);

console.log("map inbuilt" , arr1);


//Polyfill for map
Array.prototype.customMap = function customMap(callbackFn, context) {
    if(context===undefined){
        context = this;
    }
    let arr = context;

    let resultArr = [];

    for(let i=0; i<arr.length; i++){
        resultArr.push(callbackFn(arr[i], i, context));
    }
    return resultArr;
}

let arr1_1= arr.customMap( (curr, idx, arr) => curr+1);

console.log("map polyfill" , arr1_1);




//Filter - applies a filter logic and returns only ele that passes the condition

let arr2 = arr.filter( (curr, idx, arr) => curr >3);

console.log("filter", arr2);

//Polyfill for filter
Array.prototype.customFilter = function customFilter(callbackFn, context) {
    if(context===undefined){
        context = this;
    }
    let arr = context;

    let resultArr = [];

    for(let i=0; i<arr.length; i++){
        let res = callbackFn(arr[i], i, context)
        if(res) resultArr.push(arr[i]);
    }
    return resultArr;
}

let arr2_2 = arr.customFilter( (curr, idx, arr) => curr >3);

console.log("cutom filter", arr2_2);



//Reduce - reduces an arr of values down to one value

let sum = arr.reduce( (curr, acc, idx, arr) => { acc =curr + acc; return acc}, 0);

console.log("reduce" , sum); 

//Polyfill for reduce

Array.prototype.customReduce = function customReduce( cb, initialValue){
    // let context = this;
    // let arr = this;

    let accumulator = initialValue;

    for(let i=0;i<this.length;i++){
        accumulator = cb(accumulator, this[i], this);
    }

    return accumulator;
}

let sum3_1 = arr.customReduce( (curr, acc, idx, arr) => { acc = curr + acc; return acc}, 0);

console.log("reduce polyfill" , sum3_1);



