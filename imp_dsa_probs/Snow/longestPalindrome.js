function checkPalindrom(S){
    if(S===S.split("").reverse().join("")){
        return true;
    }else{
        return false;
    }
}
function longestPalin(S){
  //code here
  let res = [];
  for(let i =0;i<S.length;i++){
      for(let j=i;j<S.length;j++){
          let newString = S.substring(i,j+1);
          //console.log(newString);
          if(checkPalindrom(newString)){
              res.push(newString);
          }
      }
  }
  res.sort( (a,b) => b.length-a.length);
  return res[0];
}

console.log(longestPalin("aaaabbaa"))

//brute force