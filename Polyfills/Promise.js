

//p.then() or p.catch()

// (res, rej) => { either returns res or rej}

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

const p = new promisePolyfill( (res, rej) => res(1));
p.then( a => {console.log(a)} ) //p.then(callback)

