var searchMatrix = function(matrix, target) {
    for(let i=0;i<matrix.length; i++){
        let s = 0; // 0
        let e = matrix[i].length;  // [1,3,5,7] //4
        let found = false;
        while(s<=e){
            let mid= Math.floor((s+e)/2);
            if(matrix[i][mid]===target){
                found = true;
                break;
            }else if(matrix[i][mid] > target){
                e = mid - 1;
            }else{
                s = mid + 1;
            }
        }
    
    if(found===true){
        return true
    }
    }
    return false;
};

// matrix =
// [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
// target =
// 3
// Output
// true


// Efficient solution:

var searchMatrix = function(matrix, target) {
    if(!matrix.length && !matrix[0].length) return false;
    let m = matrix.length;
    let n = matrix[0].length;
    let r = 0;
    let c = n-1; // search from right
    while(r<m && c>=0){
        if(matrix[r][c]===target) return true;
        else if(matrix[r][c] > target) c = c - 1;
        else r = r + 1
    }
    return false;
};


// matrix =
// [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
// target =
// 3
// Output
// true