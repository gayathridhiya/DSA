//max repeating char


let s = "hello lloooo";
m ={};
for(let i of s){
    console.log(i);
    if(i in m){ m[i] +=1} else {m[i] = 1}
}
console.log(m)

let maxCount = 0;
let maxele="";
for(let i in m){
    if(m[i]>=maxCount){maxCount=m[i]; maxele = i;}
}
console.log(maxCount, maxele)