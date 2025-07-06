let todo = [];

let req = prompt("Enter you request:")
while(true) {
    if(req == "quit"){
        console.log("Exiting the ToDo App.");
        break; 
    }

    if(req == "list"){
        console.log("------------- ToDo List -------------");
        for(let i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("-------------------------------------");
    } else if(req == "add"){
        let task = prompt("Enter the task you want to add:");
        todo.push(task);
        console.log(`Task "${task}" added to the ToDo list.`);
    }else if(req == "delete"){
        let idx = prompt("Enter the task you want to delete:");
        todo.splice(idx, 1);
        console.log("task deleted successfully.");
    }else{
        console.log("Wrong request! Please enter 'list', 'add', 'delete', or 'quit'.");
    }

    req = prompt("Enter you request:");
}