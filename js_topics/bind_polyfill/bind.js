
let obj = {
    name: "ahdka",
    age: 23,
    
}
var name = "gayu";
function printName(passedArgs, sec){
        console.log("name" +  this.name + passedArgs + sec)
    }
printName();
console.log(this);

let bindedFn = printName.bind(obj); //returns a function // can take objects/context to be binded and arguments as parameter
bindedFn(); 

//--------------
let obj2 = {
    name: "hckacba",
    age: 23,
    
}

function customBindFunction(context, ...args){
    let fn = this; //printName
    return function(...args2){
         fn.apply(context,[...args, ...args2])
    }
}

Function.prototype.customBindFunction = customBindFunction;

let customBindFunctionRes = printName.customBindFunction(obj2, "hiiii2");
customBindFunctionRes("hello");