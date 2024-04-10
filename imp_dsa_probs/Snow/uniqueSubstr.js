//let s="123444567891";
//let s="1";
let s="12111675679076543";

//11134563
// 1: 3, 3: 2, 4 : 1, 5:1, 6: 1, 3:1

//length = 4

// 1 1 1 3 4 5 6 3
// | |
//   | |            if char already found so far => l=i,r=i+1, push str in dict
//     | |          if not => r++ & add in dict
//     |   |
//     |       |    and r!=str.length


function findUniqueSubstring(s){

    let res = [];

    // if(!s.length) return s;

    if(s.length <= 1) return res; //edge case

    let m = {};
    let left = 0;
    let right = left + 1;

    let i = 0;
    let max = 0;
   // let s="123444567891";
    while(i<s.length){
       
        if(m[s[i]]){ //char already in m
            console.log(m, res, max, 'in', i,left, right, m);
            if(right-left > max){
                max = right-left;
                res = [];
                res.push(s.substring(left, right));
                m = {};
                m[s[i]] = 1;
            }
            left = i;
            right = i + 1;
            //i--;
        }else{
            m[s[i]] = 1;
            right+=1;
            // if(right-left+1 > max){
            //     max = right-left+1;
            // }
        }
        console.log(m, res, max, 'i',i, left, right, m)
        i++;
    }
    if(right-left > max){
         max = right-left;
         res = [];
         res.push(s.substring(left, right));
     }
     console.log(res, max )
    return res;
}

console.log(findUniqueSubstring(s), s.length)
