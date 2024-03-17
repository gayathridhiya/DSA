// 'hello'
function rev(s){
    if(s===""){
        return "";
    }else{
        return  rev(s.slice(1)) + s.charAt(0) ;
    }}

// rev(s)
// 'olleh'