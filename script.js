function checkBoxes(){
    const cbImportant = document.getElementById('Important');
    const cbUrgent = document.getElementById('Urgent');
    if (cbImportant.checked && cbUrgent.checked){
        return "topLeft";
    }else if(cbImportant.checked && !cbUrgent.checked){
        return "topRight";
    }else if(!cbImportant.checked && cbUrgent.checked){
        return "bottomLeft";
    }else{
        return "bottomRight";
    }
}

function addTask() {
    var inputTask = document.getElementById("task-input").elements[0].value;

    //add task with a check box (and a br)
    var newCheck = document.createElement("input");
    newCheck.setAttribute("type", "checkbox")
    newCheck.setAttribute("value", "finished")

    var newTask = document.createElement("label");
    var node = document.createTextNode(" " + inputTask);
    newTask.appendChild(node);

    var newBreak = document.createElement("br");

    var section = checkBoxes();
    var element = document.getElementById(section);
    element.appendChild(newCheck);
    element.appendChild(newTask);
    element.append(newBreak);
}


const cb = document.getElementById('Important');
console.log(cb.checked);



