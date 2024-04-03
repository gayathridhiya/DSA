
//  At every index, The amount of rainwater stored is 
//the difference between the current index height and 
//a minimum of left max height and right max-height.

var trap = function(h) {
    let resultArr = [];
    let l = 0;
    let r = h.length -1; 
    
    let maxLH = 0;
    let maxRH = 0;

    while(l<=r){
    
        if(h[l] <= h[r]){
            maxLH = h[l] > maxLH ? h[l] : maxLH;
            resultArr.push(maxLH - h[l])
            l++;
        }else{
            maxRH = h[r] > maxRH ? h[r] : maxRH;
            resultArr.push(maxRH - h[r])
            r--;
        }
    }
    return resultArr.reduce( (acc,x) => acc+x, 0);
};