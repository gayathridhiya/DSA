
var longestPalindrome = function(s) {
    let longest = '';
    
    const findLongestPalindrome = (str, i, j) => {
        while(i >= 0 && j < str.length && str[i] === str[j]) {
            i -= 1;
            j += 1;
        }
        // slice the qualified substring from the second last iteration
        return str.slice(i + 1, j);
    }
    
    for (let i = 0; i < s.length; i++) {
        // palindrome can center around 1 or 2 letters
        const odd = findLongestPalindrome(s, i, i);
        const even = findLongestPalindrome(s, i, i + 1);
        const longerPalindrome = odd.length > even.length ? odd : even;
        
        if (longerPalindrome.length > longest.length) {
            longest = longerPalindrome;
        } 
    }
    return longest;
};