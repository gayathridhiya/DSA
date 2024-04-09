let s="111345611298704";

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

    if(s.length <= 1) return res; //edge case

    let m = {};
    let left = 0;
    let right = left+1;

    let i = 0;

    while(i<s.length){
        if(m[s[i]]){ //char already in m
            left = i;
            right = i+1;
        }else{
            m[s[i]] = 1;
            right+=1;
            res.push(s.substring(left, right+1));
        }
        i++;
    }
    return res;
}

console.log(findUniqueSubstring(s).sort((a,b) => b.length - a.length)[0])
