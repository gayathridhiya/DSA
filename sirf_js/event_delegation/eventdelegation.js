document.addEventListener("DOMContentLoaded", () => {

    let outerBlock = document.getElementById("outerBlock")
    let innerBlock1 = document.getElementById("innerBlock1")
    let innerBlock2 = document.getElementById("innerBlock2")

    // const onClickChild = () => {
    //     console.log("child clicked")
    // }

    // const onClickParent = () =>{
    //     console.log("parent clicked")
    // }

    // const onClickGP = () => {
    //     console.log("gp clicked")
    // }
    //console.log("child", child, document)
    const clickHandler = (event) => {
        console.log(event.target.id)
        if(event.target.id === "innerBlock2"){
            alert("2")
        }
    }
    outerBlock.addEventListener("click", (e) => clickHandler(e));
    
})