#! /usr/bin/env node

import inquirer from "inquirer";

let toDoList: string[] = [];
let condition = true;

    while (condition) {
    let toDoAns = await inquirer.prompt([{
        name: "toDoAction",
        type: "list",
        message: "What would you like to do?",
        choices: ["Add an Item or Task", "View List", "Exit"]
}]);
    if (toDoAns.toDoAction === "Add an Item or Task"){
    let addItemAns = await inquirer.prompt([{
        name: "addItem",
        type: "input",
        message: "Enter your List:"
}]);
        toDoList.push(addItemAns.addItem);
} 

    else if (toDoAns.toDoAction === "View List"){
        console.log("Your List:");
        toDoList.forEach((addItem) => {
        console.log(addItem);
});
} 
    else if (toDoAns.toDoAction === "Exit") {
        condition = false;
        console.log("Exiting...");
}
}