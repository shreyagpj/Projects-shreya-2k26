let toDo = [];
console.log("Hello ! Welcome to the toDo app by Shreya :)))");
let activity = prompt("Please select what you wish to do= 1. List all tasks 2. add a task 3. delete a task 4. quit the app");

while (1) {
    if (activity == 4) break;
    else if (activity == 2) {
        let temp = prompt("Enter Task: ");
        toDo.push(temp);
        console.log("...task added")
    }
    else if (activity == 1) {
        for (temp of toDo) {
            console.log(temp);
        }
    }
    else if (activity == 3) {
        for (temp of toDo) {
            console.log(temp);
        }
        let idx = prompt("Please enter index of task to be removed: ");
        if (idx >= toDo.length) {
            idx = prompt("Please enter valid index: ");
        }
        if(idx>= toDo.length) {
            activity = prompt("Please select what you wish to do= 1. List all tasks 2. add a task 3. delete a task 4. exit the app");
            continue;
        }
        console.log("...task deleted")
        toDo.splice(idx, 1);
    }
    else {
        console.log("Oh this option isnt there in the menu :( Please try again");
    }
    activity = prompt("Please select what you wish to do= 1. List all tasks 2. add a task 3. delete a task 4. exit the app");
}
