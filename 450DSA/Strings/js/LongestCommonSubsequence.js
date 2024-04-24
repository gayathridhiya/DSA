function longestCommonSubsequence(s1, s2){
    let dp = Array.from({length: s1.length}, () => Array.from({length: s2.length}, () => 0));
    // console.log(dp);

    function lcs(idx1, idx2){
        if(idx1 < 0 || idx2 < 0) return 0;
        if(s1[idx1]===s2[idx2]){
            return (dp[idx1][idx2] = 1 + lcs(idx1-1, idx2-1));
        }else{
            return (dp[idx1][idx2] = 0 + Math.max( lcs(idx1, idx2-1), lcs(idx1-1, idx2) ));
        }
    }

    lcs(s1.length-1, s2.length-1)

    console.log(dp);

}

longestCommonSubsequence("abc", "adc");


// https://takeuforward.org/data-structure/longest-common-subsequence-dp-25/