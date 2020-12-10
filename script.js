// functions
// returns the location of the new task based on what prioritizing boxes were checked
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

// adds a new task including the check box, line break, event listener
function addTask(inputTask = document.getElementById("task-input").elements[0].value, location = getLocation()) {
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
    newTask.setAttribute("id", index)
    var node = document.createTextNode(" " + inputTask);
    newTask.appendChild(node);

    var newBreak = document.createElement("br");

    var section = document.getElementById(location);
    section.appendChild(newCheck);
    section.appendChild(newTask);
    section.append(newBreak);

    //save task to local storage
    localStorage.setItem(index, inputTask + "$*!" + location);
    newIndex();

    document.getElementById('task').value=''; 
}

// removes a task (connected to the check box listener)
function removeTasks(elmA, elemB, elemC) { //this could be shorter if I had added the task (box, name, br) in a div
    localStorage.removeItem(elemB.id);
    index = elemB.id;
    document.getElementById("submit").disabled = false;
    elmA.remove();
    elemB.remove();
    elemC.remove();
}

// gets the next index for a task to be saved under. Also checks if there are too many tasks and disables the submit button
function newIndex(){
    if (index in localStorage){
        index++;
        if (index > 21){
            index = 0;
        }
        if (localStorage["length"] > 20 && startUp == false){
            alert("That's enough tasks!");
            index = 'exit condition'; 
            document.getElementById("submit").disabled = true;
        }
        newIndex();
    }
}

//main
//setting index as 0 or as its last saved value
var taskCount = document.getElementById("topLeft").childElementCount + document.getElementById("topRight").childElementCount 
+ document.getElementById("bottomLeft").childElementCount + document.getElementById("bottomRight").childElementCount; 
if (taskCount == 0){
    index = 0;
}else{
    index = localStorage.getItem('count');
}

// runs at reload. Adds all saved tasks
var x = 0;
var startUp = true;
while (x < 21){
    oldTask = localStorage.getItem(x);
    if (oldTask != null){
        oldTask = oldTask.split("$*!");
        //localStorage.removeItem(x);
        addTask(oldTask[0], oldTask[1]);
        localStorage.setItem('count', index);
    }
    x++;
    index = x;

}
var startUp = false;

//setting a new index (because it is now 21)
x = 0;
while(x < 21){
    if (localStorage.getItem(x) == null){
        index = x;
        break;
    }
    x++;
}
console.log(index);

// if the page is reloaded with max tasks the submit button is already disabled 
if (localStorage["length"] > 20){
    document.getElementById("submit").disabled = true;
}