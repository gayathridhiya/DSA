var searchMatrix = function(matrix, target) {
    let r = matrix.length;
    let c = matrix[0].length;
    let m = 0;
    let n = c;
    for(let i =m;i<r;i++){
        for(let j=c-1;j>=0;j--){
            if(matrix[i][j] > target){
                n =n -1 ; 
            }
            if(matrix[i][j] == target){
                return true
            }
            if(matrix[i][j] < target){
                m =m + 1 ; 
            }
        }
    }
    return false;
};