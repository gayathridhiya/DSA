document.addEventListener("DOMContentLoaded", () => {

    let child = document.getElementById("child")
    let parent = document.getElementById("parent")
    let grandparent = document.getElementById("grandparent")

    const onClickChild = () => {
        console.log("child clicked")
    }

    const onClickParent = () =>{
        console.log("parent clicked")
    }

    const onClickGP = () => {
        console.log("gp clicked")
    }
    //console.log("child", child, document)
    child && child.addEventListener("click", () => onClickChild(), captureEvents = true); //c
    parent && parent.addEventListener("click", () => onClickParent(), captureEvents = false); //b
    grandparent && grandparent.addEventListener("click", () => onClickGP(), captureEvents = true); //c 
})