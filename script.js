function getLocation(){
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
    newCheck.addEventListener('change', function() {
        if (this.checked) {
          removeTasks(newCheck, newTask, newBreak);
        } else {
          console.log("error removing item");
        }
      });

    var newTask = document.createElement("label");
    var node = document.createTextNode(" " + inputTask);
    newTask.appendChild(node);

    var newBreak = document.createElement("br");

    var section = document.getElementById(getLocation());
    section.appendChild(newCheck);
    section.appendChild(newTask);
    section.append(newBreak);
}

function removeTasks(elmA, elemB, elemC) { //this could be shorter if I had added the task (box, name, br) in a div
    elmA.remove();
    elemB.remove();
    elemC.remove();
}



