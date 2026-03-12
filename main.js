function addtask() {
    let todo = document.getElementById('todo-input')
let result = todo.value.trim();


let listiteam = document.createElement('li')
listiteam.textContent = result



 if (result === "") {
        alert("Please enter a task!");
        return;
    }

let deletebtn = document.createElement('button');
deletebtn.textContent = 'remove'
deletebtn.onclick = function () {
    listiteam.remove()
}
deletebtn.classList.add("delete-btn"); 
deletebtn.style.background = 'pink'
deletebtn.style.padding = '8px 12px';
deletebtn.style.border = 'none';
deletebtn.style.borderRadius = '20px'



if (deletebtn.classList.contains("delete-btn")) {
    console.log("✅ 'delete-btn' class added successfully!");
} else {
    console.log("❌ 'delete-btn' class not added.");
}





document.getElementById('list').appendChild(listiteam);
listiteam.appendChild(deletebtn)


todo.value = ''
}