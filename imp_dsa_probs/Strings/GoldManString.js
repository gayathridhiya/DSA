s="a12b13c1a100"
function countNoOFOccurance(s){

    let m ={};

    for(let i=0; i<s.length; i++){
        let char = s[i];
        let ascii = s[i+1].charCodeAt(0);
        let temp = "";
      
        while(ascii >=48 && ascii <=57 && i<s.length-1){ //0 to 9
            temp += s[i+1];
            i+=1;
            if(i!==s.length-1){
                let nextchar = s[i+1];
                ascii = nextchar.charCodeAt(0)
            }
        }
        //temp 12
        console.log(temp);

        if(m[char]) m[char]+=parseInt(temp);
        else{
            m[char]=parseInt(temp)
        }
    }
    return m;
}
console.log(countNoOFOccurance(s))