// sum(1)(2) 3
//sum(1)(2)(3)....(n) sum


//sum(1)(2)()
function sum(a){
    return function (b){
        return a + b;
    }
}

//sum(1)(2)(3)(4)(5)()
function sum(a){
    return function (b){
        return function (c){
            return function (d){
                return function (e){
                    return a + b + c + d + e;  //a + b + c + d + e is returned if there exist no more arguments
                }
            }
        }
    }
}

// sum(1)(2)(3)(4)
// ƒ (e){
//                     return a + b + c + d + e;  //a + b + c + d + e is returned if there exist no more arguments
//                 }

function sum(a){
    return function(b){
        if(b){
            return sum(a+b)
        }else{
            return a
        }
    }
}

sum(1)(2)(3)(4)()

