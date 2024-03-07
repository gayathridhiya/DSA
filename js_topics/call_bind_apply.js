let obj1 = {
    name: "gayathri",
    age: 25,
    printName: function(val){ 
        console.log("printName " + val)
    }
}

let obj2 = {
    name: "siva",
    age : 28
}
obj1.printName();
obj1.printName.apply(obj2, ["sivaa"]);
obj1.printName.call(obj2, "sivaaaaCalling")

let bindedObj = obj1.printName.bind(obj2, "bnd");
bindedObj();