//sum(2)(6)(1)

function sum(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

console.log(sum(2)(6)(1));


// evaluate("sum")(4)(2) =>6
// evaluate("diff")(4)(2) =>2

function evaluate(op, a, b){
    if(op=="sum"){
        return a+b
    }
    if(op=="diff"){
        return a-b
    }
}

function evaluate(op, a, b){
    if(op=="sum"){
        return function(a){
            return function(b){
                return a+b;
            }
        }
    }
    if(op=="diff"){
        return function(a){
            return function(b){
                return a-b;
            }
        }
    }
}

console.log(evaluate("sum")(1)(2))

//enhanced

function evaluate_enh(op){
        
            return function(a){
                return function(b){
                    if(op=="sum"){
                        return a+b;
                    }else{
                        return a-b;
                    }
                }
             
        }
   
}
console.log(evaluate_enh("sum")(11)(12))


//Infinite currying

//sum(1)(2) //3
//sum(1)(2)(3) //6, on any n no of params, it should give result

function sum(a) {
    //console.log(arguments.length)
    function sum2(b){
        if(!b){
            return a;
        }else{
            return sum(a+b)
        }
    }
    return sum2;
}

//sum(1)() => fn()
//sum(1)(2) => fn(2)

console.log("curried", sum(1)(2)())
console.log("curried", sum(1)(2)(3)())
