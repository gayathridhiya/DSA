import java.util.HashMap;

public class minOpsToConvertAToB {

    public int minops(String s1,String s2){

        if(s1.length() != s2.length()) return -1;

        HashMap<Character, Integer> hmHashMap1 = new HashMap<>();
        HashMap<Character, Integer> hmHashMap2 = new HashMap<>();

        for(char i : s1.toCharArray()){
            hmHashMap1.put(i, hmHashMap1.getOrDefault(i, 0)+1);
        }

        for(char i : s2.toCharArray()){
            hmHashMap2.put(i, hmHashMap2.getOrDefault(i, 0)+1);
        }

        System.out.println(hmHashMap1);
        System.out.println(hmHashMap2);
        System.out.println(hmHashMap1.equals(hmHashMap2));

        if(!hmHashMap1.equals(hmHashMap2)){
            return -1;
        }

        Integer i = s1.length()-1;
        Integer j = s2.length()-1; 
        Integer res = 0;
        while (i>=0 && j>=0) {
            if (s1.charAt(i)==s2.charAt(j)) {
                i--;
                j--;
            }else{
                res++;
                i--;
            }
        }
        return res;
    }
    public static void main(String[] args) {
        minOpsToConvertAToB minOpsToConvertAToB = new minOpsToConvertAToB();
        Integer result = minOpsToConvertAToB.minops("badcc", "abdcc");
        System.out.println(result);
    }
}
