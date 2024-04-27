//First class functions 

function square(nums){
    return nums*nums;
}

function parent( cb, nums ){
    return cb(nums)
}

console.log(parent(square, 5));

//IIFE
(function iife(){
    console.log("Hi")
})();

//op based qn

(function fn(x){
    return (function (y){
        console.log(x);
    })(2);
})(1);

//op - 1


var num = 10;
function xyz(){
    var num = 30;
    console.log(num)
}
xyz(); // when the function ends, EC (scope) for that function will be deleted, thats why no 30, nly 10
console.log(num)


//Function scope - op based qns

for(let i=0;i<5;i++){
    setTimeout( () => { console.log(i); }, i*1000);
}

for(var i=0;i<5;i++){
    setTimeout( () => { console.log(i); }, i*1000);
}

//Function Hoisting - op based Qn
 var x = 21;

 var fun = function () {
    console.log(x); //undefined
    var x = 20;
 }

 fun();

 //Params vs arguments

 function fn(parameter1, parameter2){  //paramters
    console.log(arguments)
 }

 fn(1, [23,45]); //arguments

 //spread operator vs rest operator

 function show(...arr){ //here when we use -> rest operator
    console.log(arr); //[1,2]
 }

 show(...[1,2]) //here when we use -> spread operator

 //op based qn

// const f = (a, ...numbers, x, y) => {
//     console.log(x,y)
// };

//Rest operator should be at the last only

const f = (a, b,  ...numbers) => {
    console.log(numbers)
};

f(1,2,6,3,9,10);

//Callback function
//arrow functions vs regular functions

let user = {
    username : "abc",

    rc1 : () => { console.log(this.username)},  //undefined

    rc2 : function fn () { console.log(this.username); }, //abc
} 

user.rc1();
user.rc2();

