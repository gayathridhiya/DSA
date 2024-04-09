// while(i<s.length){
//     temp+=s[s.length-1-i]; i++; }

// let s="12345";
// let l = 0;
// let r = s.length-1;

// while(l<r){
//     // [s[l],s[r]] = [s[r],s[l]];
//     let temp = s[l];
//     s[l] = s[r];
//     s[r] = temp;
//     l++;
//     r--;
// }

// function swap(a,b){
//     let temp = a;
//     a = b;
//     b = temp;
// }

// console.log(s);

//strings are immutable
//convert string to array adn then use destructuring


// let s1="11134";
let s="111345";

let l = 0;
let r = 0;

let m = {};
let res = [];

for(let i=0;i<s.length;i++){
    if(!m[s[i]]){
        m[s[i]] = 1;
        r= i+1;
    }else{
        l=i
        r = i;
    }
    let subString = s.substr(l,r);
    if(!res.includes(subString)) res.push(subString);
}
//res.sort( (a,b) => b.length - a.length)
console.log(res)


