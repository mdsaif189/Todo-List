let input = document.querySelector("#input");
let btn = document.querySelector("#addBtn");
let todo = document.querySelector("#todoList");


btn.addEventListener("click", function(){
    let value = input.value;
    let li = document.createElement("li");
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    li.textContent = value;
    if(input.value !== ""){
         todo.appendChild(li);
    li.appendChild(deleteBtn);
    }

   
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.style.backgroundColor = " grey";
    deleteBtn.style.color = "white";
    deleteBtn.style.alignItems = "center";
    deleteBtn.style.padding = "2px ";
    deleteBtn.style.float = "right";
    deleteBtn.style.cursor = "pointer";
    deleteBtn.addEventListener("click", function(){
        todo.removeChild(li);
    });
    input.value = "";
});