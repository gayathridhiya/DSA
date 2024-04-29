document.addEventListener("DOMContentLoaded", ()=>{
    let input = document.getElementById("todoInput");
    let button = document.getElementById("todoSubmit");

    let mainDiv = document.getElementById("toDo");
    let ulTodoMainList = document.getElementById("todoItems");

    let editMode = false;
    let editItem = null;

    button.addEventListener("click", (event) => {

        event.preventDefault();

        let value = input.value.trim();

        if(!value){ //error handling
            alert("Enter some value")
        }else{

            editMode ? updateToDoItem(editItem) : addToDoItem(value);

            input.value = "";
        }

        
    })

    function addToDoItem (value) {
        let list = document.createElement('li');
            // list.innerHTML = `List item</li>`;
        list.innerHTML = `<span>${value}</span>`;

        let editButton = document.createElement('button');
        editButton.innerText = `✏️`;

        let removeButton = document.createElement('button');
        removeButton.innerText = `❌`;

        list.appendChild(editButton);
        list.appendChild(removeButton);

        ulTodoMainList.appendChild(list);

    }

    function updateToDoItem (element) {
        
        element.firstChild.textContent = input.value;
        button.innerText = "Submit";

        editItem = null;
        editMode = false;

    }


    //event delegation - instead of creating multiple events

    ulTodoMainList.addEventListener("click", (event) => {
        const target = event.target;
        if(target.tagName === 'BUTTON' && target.innerText === '❌'){
            target.parentNode.remove();
        }
        if(target.tagName === 'BUTTON' && target.innerText === '✏️'){
            editMode = true;
            button.innerText = "Edit To Do";
            editItem = target.parentNode;
            input.value = target.parentNode.firstChild.textContent;
        }
    })



})