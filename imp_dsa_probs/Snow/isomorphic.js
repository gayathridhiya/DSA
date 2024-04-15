function areIsomorphic(str1, str2)
    {   
        let m1 =  {};
        let m2 = {};
        
        if(str1.length!=str2.length) return 0;
        for(let i=0; i<str1.length;i++){
            let char1=str1[i];
            let char2=str2[i];
            if((m1[char1] && m1[char1]!==char2) || (m2[char2] && m2[char2] !==char1)){
               return false;
            }
                m1[char1] = char2;
                m2[char2] = char1;
            
        }
        return 1;
        
    }