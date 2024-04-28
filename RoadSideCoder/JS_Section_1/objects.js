const user = {
    name: "gayathri",
    age: 24
}

delete user.age;

console.log(user)


//--------------------

const func = (function (a){
    delete a; //acts on nothing, as it will only delete object properties
    return a;
})(5);

//--------------------

const property = "abc";
const value = "abcVAl";

let user2 ={
    [property] : value
}

console.log(user2)

//--------------------

let nums = {
    a : 100,
    b : 200,
    title : "my num"
}

//write a function to multiply numeric properties by 2
  
for(let i in nums){
    if(typeof(nums[i])==='number'){
        nums[i] *= 2;
    }
}

console.log(nums)

const a = {};
const b = { key : "b"}
const c = { key : "c"}

a[b] = 100;
a[c] = 200;

console.log(a)


let e = JSON.stringify(b)

console.log(e, typeof e);

console.log(JSON.parse(e), typeof JSON.parse(e))