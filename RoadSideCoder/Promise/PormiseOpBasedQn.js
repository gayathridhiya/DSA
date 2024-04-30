const firstPromise = (param) => new Promise( (res, rej) => res("p1" + param));

const secondPromise = new Promise( res => res("text2"));


secondPromise.then( res => {
    console.log(res);
    return firstPromise(res)
}).then(res => {
    console.log(res)
})

//resolve promise recursively

const p1 = new Promise( (resolve, reject) => { setTimeout( () =>  resolve("p1"), 300)})

const p2 = new Promise( (resolve, reject) => { setTimeout( () =>  resolve("p2"), 200)})

const p3 = new Promise( (resolve, reject) => { setTimeout( () =>  resolve("p3"), 500)})


// function promRecurse(promArr){ //[p1,p2,p3]
    
//     promArr.map( p => resolvepromise(p));

//     function resolvepromise(p){
//         if(p instanceof Promise){
//             p.then(res => {console.log(res)})
//             .catch(err => {console.log(err)})
//         }
//     }
// }

function promRecurse(promArr, i=0){ //[p1,p2,p3]
    
    if(i> promArr.length) return;
    resolvepromise(promArr[i]);
    promRecurse(promArr, i+1);

    function resolvepromise(p){
        if(p instanceof Promise){
            p.then(res => {console.log(res)})
            .catch(err => {console.log(err)})
        }
    }
}
promRecurse([p1,p2,p3]);