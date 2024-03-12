let obj = {
    name: "gayathri",
    type : "localStore"
}

localStorage.setItem("nmmmsa" , "gayu");
localStorage.setItem("obj", JSON.stringify(obj))

console.log(localStorage.getItem("nmmmsa"));
console.log(JSON.parse(localStorage.getItem("obj")));