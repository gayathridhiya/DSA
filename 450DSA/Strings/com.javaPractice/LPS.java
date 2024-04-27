
import java.util.ArrayList;
import java.util.Collections;

class Solution1 {

    public int getPalindromeLen(String S, Integer l, Integer r){
        // char[] charArr = S.toCharArray();
        while(l>=0 && r<S.length() && S.charAt(l)==S.charAt(r)){
            l--;
            r++;
        }
        return r-l-1;

    }
    public String longestPalindrome(String S) { 
        char[] charArr = S.toCharArray();
        ArrayList<String> res = new ArrayList<String>();
        for(int i=0;i<charArr.length; i++){
            int evenLen = getPalindromeLen(S, i, i+1);
            int oddLen = getPalindromeLen(S, i-1, i+1);
            int max = Math.max(evenLen, oddLen);
            int start = i - (max-1)/2;
            int end = i + (max/2);
            res.add(S.substring(start, end +1));
            //System.out.println(res);
        }
        Collections.sort(res, (a,b) -> b.length()-a.length());
        return res.get(0);
    }
}