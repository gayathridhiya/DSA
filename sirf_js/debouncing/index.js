
count =0;
const getData = function (timerId) {
    console.log("getting data" + ":" + count++ + "timerID" + timerId)
}



//enhanced

const debouncedFunction = function ( callbackFn, delay) {
    let timer;  // initially undefined, later it will store timer id
    function innerFunction(){
        let context = this;
        let args = arguments;
        //console.log(args)
        clearTimeout(timer);
        timer = setTimeout( () => callbackFn.apply(context, args), delay);
    }
    return innerFunction;
}

let finalFunc = debouncedFunction( getData, 1000);