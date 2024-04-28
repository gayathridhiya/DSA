//convert fn(a,b,c) => fn(a)(b)(c)

//eg curried(sum(1,2,3)) => fn => sum(1)(2)(3)

function sum(a,b,c){
    return a+b+c;
}


let curriedSum = curried(sum);

let res = curriedSum(1)(2)(3) // op should be = sum(1,2,3)

console.log(res)

// function curried(sum){
//     return function(a){
//         return function(b){
//             return function(c){
//                 return sum(a,b,c)
//             }
//         }
//     } 
// }

//more generic

//accept callback

//if you have arguments, then keep appending the arguments

// finally at the point when you dont have arguments, you call that callback function


function curried(callbackFn){
    //console.log(callbackFn)
    let prevArgs = [];   //keep track of previous arguments
    return function curry(...args){
        prevArgs = [...args, ...prevArgs];   // append previous arguments with that of current argumentrs  //[1] [1,2] [1,2,3]
        if(callbackFn.length <= prevArgs.length){
            return callbackFn(...prevArgs);
        }else{ 
            return curry;
        }
    } 
}

//------------------------------------------------------------

//once (cb) - lodash - doesnt matter how many times you call cb, it will execute only once


let onceSum = once(sum);

console.log(onceSum(1,2,3));

console.log(onceSum(1,2,3));

console.log(onceSum(1,2,3));

function once(callback){
    let ranOnce = false;
    function once_inner(){
        if(!ranOnce){
            ranOnce = true
            return callback(...arguments, this);
        }else{
            return null;
        }
    }
    return once_inner;
    
}


//------------------------------------------------------------

//memoized function

//usecase
function fn(a,b){
    for(let i=0;i<100000;i++){

    }
    return a+b;
}
let prevTime = Date.now();
// fn(1,2);
// console.log("time ", Date.now() - prevTime)

//memoized function

function memoizedFn(cb){
    return function(...args){
        if(m[args]) {
            return m[args]
        }else{
            m[JSON.stringify(args)] = cb(...args);
            return m[JSON.stringify(args)];
        }
    }
}


let m = memoizedFn(fn);
console.log(m(1,2));
console.log("time ", Date.now() - prevTime);
let nextTime = Date.now()
m(1,2);
console.log("time ", Date.now() - nextTime);