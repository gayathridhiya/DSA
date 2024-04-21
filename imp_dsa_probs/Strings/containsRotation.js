str1 = 'ABACD';str2 = 'CDBBA';

function containsRotation(str1, str2){
    if(str1.length != str2.length){
        return false;
    }
    let n = str1.length;
    let firstOccuranceIndex = -1;  

    for(let i=0;i<n ; i++){
        if(str1[0] === str2[i]){
            firstOccuranceIndex = i;
            break
        }
    }

    for(let i =0; i<n; i++){
        if(str1[i] !== str2[(firstOccuranceIndex + i) % n ]){
            return false;
        }
    }
    return true;

}

console.log(containsRotation(str1, str2))


//Optimised

function areRotations( str1,  str2)
    {
        // There lengths must be same and str2 must be 
        // a substring of str1 concatenated with str1.  
        return (str1.length == str2.length) &&
               ((str1 + str1).indexOf(str2) != -1); // imp -> str1 + str1
    }