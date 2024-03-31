#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let pin = await inquirer.prompt([
    {
        name: "pinNumber",
        type: "number",
        message: "Entre Pin Number",
    },
]);
if (myPin === pin.pinNumber) {
    console.log("Successfully logged in!");
    let operation = await inquirer.prompt([
        {
            name: "userOperations",
            type: "list",
            message: "Select any one operation",
            choices: ["Withdraw", "Deposit", "Check balance"],
        },
    ]);
    if (operation.userOperations === "Withdraw") {
        let WithdrawAmount = await inquirer.prompt([
            {
                name: "withdraw",
                type: "number",
                message: "Enter the withdraw amount",
            },
        ]);
        myBalance -= WithdrawAmount.withdraw;
        console.log("Withdraw Successfully!");
        console.log("Your current balance is", myBalance);
    }
    else if (operation.userOperations === "Deposit") {
        let depositAmount = await inquirer.prompt([
            {
                name: "Deposit",
                type: "number",
                message: "Enter the deposit amount",
            },
        ]);
        myBalance += depositAmount.Deposit;
        console.log("deposit Successfully!");
        console.log("Your current balance is", myBalance);
    }
    else if (operation.userOperations === "Check balance") {
        console.log("Your current balance is", myBalance);
    }
}
else {
    console.log("Your pin is incorrect");
}
