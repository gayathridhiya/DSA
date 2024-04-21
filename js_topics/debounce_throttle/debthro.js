function handleClick(){
    let timer;
    function debounce(fn){
        clearTimeout(timer)
        timer = setTimeout(()=> fn(), 1000)
    }
}

function handleClick(){
    let flag;
    function throttle(fn){
        if(flag){
            fn();
            flag=false;
        }
        setTimeout(()=> {
            flag= true;
        }, 1000)
    }
}