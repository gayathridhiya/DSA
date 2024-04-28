
// document.addEventListener("DOMContentLoaded" , () => {
//     let fn = clickHandler();
// })

    function clickHandler(){
       
        let headerEle = document.getElementById('headerh2');
       
        function updateText(text){
            headerEle.textContent = text;
        }
        return updateText;
    }
    
    let fn = clickHandler();
    
// })


