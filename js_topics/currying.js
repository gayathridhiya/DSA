function fn(a,b,c){
    return a+b+c;
}

console.log(fn(1,2,3));

function curried_fn(a){
    return function (b){
        return function (c){
            return a+b+c;
        }
    }
}

console.log(curried_fn(1)(2)(4));