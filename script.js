numTasks = 0;

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

function addTask(inputTask = document.getElementById("task-input").elements[0].value, location = getLocation()) {
    //var inputTask = document.getElementById("task-input").elements[0].value;

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

function removeTasks(elmA, elemB, elemC) { //this could be shorter if I had added the task (box, name, br) in a div
    localStorage.removeItem(elemB.id);
    index = elemB.id;
    document.getElementById("submit").disabled = false;
    elmA.remove();
    elemB.remove();
    elemC.remove();
}


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


//setting index as 0 or as its last saved value
var taskCount = document.getElementById("topLeft").childElementCount + document.getElementById("topRight").childElementCount 
+ document.getElementById("bottomLeft").childElementCount + document.getElementById("bottomRight").childElementCount; 
if (taskCount == 0){
    index = 0;
}else{
    index = localStorage.getItem('count');
}
// console.log(localStorage["length"]);


// localStorage.removeItem(0);
// localStorage.removeItem(1);
// localStorage.removeItem(2);
// localStorage.removeItem(3);
// localStorage.removeItem(4);
// localStorage.removeItem(5);
// localStorage.removeItem(6);
// localStorage.removeItem(7);
// localStorage.removeItem(8);
// localStorage.removeItem(9);
// localStorage.removeItem(10);
// localStorage.removeItem(11);
// localStorage.removeItem(12);
// localStorage.removeItem(13);
// localStorage.removeItem(14);
// localStorage.removeItem(15);
// localStorage.removeItem(16);
// localStorage.removeItem(17);
// localStorage.removeItem(18);
// localStorage.removeItem(19);
// localStorage.removeItem(20);
// localStorage.removeItem(21);
// localStorage.removeItem("exit condition");

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

if (localStorage["length"] > 20){
    document.getElementById("submit").disabled = true;
}