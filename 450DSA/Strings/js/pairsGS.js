function pairs(arr){
    let m = {};
    for(let [s,e] of arr){
        // if(m[e]) m[e].push([s,e])
        // else{
            m[e] = [s,e]
        // }
    }
    console.log(m);

    let res = [];

    let [s,e] = arr[0];

    while(m[e]){
        res.push(m[e]);
        e=res[res.length-1][1];
    }

    console.log(res)
}

let arr = [[5,1],[4,5],[9,4],[11,9],[9,4]];
pairs(arr);