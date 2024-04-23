// Minimum characters to be added at front to make string palindrome

//approach - pick and add char from end to the front of string and check if palindrome
// keep doing till your last idx > 0


function minChar(str)
{
    let count = 0;
    let maxLen = str.length*2;
    let lastIdx = str.length -1 ;
    function isPalindrome(s){
        return s.split('').reverse().join('')===s;
    }
    let s = str;
    while(lastIdx > 0){
        if(isPalindrome(s)){
            return count;
        }
        s = str[lastIdx] + s;
        lastIdx--;
        count++;
        //console.log(s)
    }
    return count;
}


//two pointer

minChar(str)
{
    let count = 0;
    let start = 0;
    let end = str.length -1;
    while(start <=end){
        if(str[start]===str[end]){
            start++;
            end--;
        }else{
            count++;
            start = 0;
            end = (str.length - 1) - count

            
        }
    }
    return count;
   
}