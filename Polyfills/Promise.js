function promisePolyfill(executorCallbackFn) {
    let onResolve;
    let onReject;

    let isFulfilled = false;
    let isRejected = false;

    let isCalled = false;
    let value;

    this.then  = function then(callback){  //attach callback on .then
        onResolve = callback;

        if(isFulfilled && !isCalled){
            onResolve(value);
            isCalled = true;
        }

        return this;
    }

    this.catch =  function (callback){
        onReject = callback;

        if(isRejected && !isCalled){
            onReject(value);
            isCalled = true;
        }

        return this;
    }
    
    const resolve = function(value){  
        isFulfilled = true;
        value = value;

        if(typeof onResolve === 'function'){
            onResolve(value);
            isCalled = true;
        }
        
    }

    const reject = function(value){
        isRejected = true;
        value = value;
        if(typeof onReject === 'function'){
            onReject(value);
            isCalled = true;
        }
    }


    try{
        executorCallbackFn(resolve, reject);
    }catch(err){
        reject(err);
    }

}

// const p = new promisePolyfill( (res, rej) => res(1));
// p.then( a => {console.log(a)} ) //p.then(callback)


//Promise All polyfills

Promise.allPolyfill = function (promiseArr) {
    return new Promise( (res, rej) => {
    let opArr = [];
    for(let i=0; i<promiseArr.length; i++){
        if(i===promiseArr.length){
            res(opArr);
        }
        if(promiseArr[i] instanceof Promise){
            promiseArr[i].then( res => {opArr.push(res)})
            .catch( err => reject(err));
        }
    } })
}

const p1 = new Promise( res => res(1));
const p2 = new Promise( res => res(2));
const p3 = new Promise( res => res(3));


console.log("all",Promise.all([p1,p2,p3]));
console.log("allpolyfill",Promise.allPolyfill([p1,p2,p3]));