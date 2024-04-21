function f(s){
    let i =0; //'a12b13c1a100'
    let m = {};
    while(i<s.length-1){
        let char = s[i]; //a
        let num = 0;
        let nextChar = s[i+1];
        while(nextChar && nextChar.charCodeAt(0)>=48 && nextChar.charCodeAt(0)<=57){
            num+=nextChar;
            i++;
            nextChar = s[i+1]
        }
        m[char] = parseInt(num);
        i++;
    }
    console.log(m);
}

f("a12b13c1a100")
