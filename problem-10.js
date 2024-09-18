const addTask = function(){
    const inputTask = document.getElementById('inpTask');
    const taskInputValue = inputTask.value;
    
    if(taskInputValue !== ""){
        const taskUl = document.getElementById('taskUl');
        const li = document.createElement('li');
        li.innerHTML = '<input type="checkbox"> ' + taskInputValue + ' <button onclick = "deleteTask(this)">Delete</button>'
        taskUl.appendChild(li);
        inputTask.value = "";
    }
    else{
        alert('Please Enter a valid text')
    }
}

const deleteTask = function(btn){
    const li = btn.parentNode;
    li.parentNode.removeChild(li)
}

const deleteAllChecked = function(){
    const taskUl = document.getElementById('taskList');
    const checkBoxes = document.querySelectorAll('input[type = "checkbox"]:checked');
    
    checkBoxes.forEach(checkbox => {
        const parentCheckbox = checkbox.parentNode;
        parentCheckbox.parentNode.removeChild(parentCheckbox);
    });
}