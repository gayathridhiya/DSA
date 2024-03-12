function handleButtonEvent(){
    console.log("button clicked")
}

function throttle(cb, limit){
    let flag = true;
    function throttledbuttonClick(){
        if(flag) {cb.call(); flag=false;}
        setTimeout(() => {
            flag = true
        }, limit);
    }
    return throttledbuttonClick;
}

const enhancedFunctionCall = throttle(handleButtonEvent, 3000.)

// function debounce(cb, delay){
//     let timer;
//     function debouncedFn(){
//         clearTimeout(timer);
//         timer = setTimeout(()=> { cb()} , delay)
//     }
//     return debouncedFn
// }