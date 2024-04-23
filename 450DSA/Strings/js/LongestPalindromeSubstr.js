function getLongestPalindrome(s, l, r){
    // let flag = 0;
    while( l>=0 && r<s.length && s[l]===s[r]){
        // flag = 1;
        l--;
        r++;
    }
    return r-l-1;
}


var longestPalindrome = function(s) {
    let res = [];
    for(let i=0; i<s.length; i++){
        let oddPalLen = getLongestPalindrome(s, i, i);
        let evenPalLen =  getLongestPalindrome(s, i, i+1);

        let expandLen = Math.max(oddPalLen, evenPalLen);

        let start = i - Math.floor((expandLen-1)/2);
        let end = i + Math.floor(expandLen/2);

        res.push(s.substring(start, end+1))
    }
    return res.sort((a,b) => b.length - a.length)[0];
};

console.log(longestPalindrome("babad"));