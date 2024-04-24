
class Solution {
    public int minFlips(String S) {
        char[] chars = S.toCharArray();
        int evenFlip = 0;
        int oddFlip = 0;
        
        for(int i=0;i<chars.length; i++){ //100  
            if(i%2==0){
                if(chars[i]=='1') evenFlip++;
            }else{
                if(chars[i]=='0') evenFlip++;
            }
        }
        
        for(int i=0;i<chars.length; i++){ //100  
            if(i%2==0){
                if(chars[i]=='0') oddFlip++;
            }else{
                if(chars[i]=='1') oddFlip++;
            }
        }
          
        
        return Math.min(evenFlip, oddFlip);
    }
    
}