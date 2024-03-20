#!/usr/bin/env node
import inquirer from "inquirer";

 
let answer = await inquirer.prompt([{
  message: "Enter your first number:",
  type :"number",
  name: "firstNumber",
},
{
  message: "Enter your second number:",
  type: "number",
  name: "secondNumber",
},
{
  message: "Choose one of the operator for result",
  type: "list",
  name: "operator",
  choices: ["addition","substrication","multiplication","division"]
}])

if(answer.operator === "addition"){
  console.log(answer.firstNumber + answer.secondNumber);
}else if(answer.operator === "substrication"){
  console.log(answer.firstNumber - answer.secondNumber)
}else if(answer.operator === "multiplication"){
  console.log(answer.firstNumber * answer.secondNumber)
}else if(answer.operator === "division"){
  console.log(answer.firstNumber / answer.secondNumber)
}else{
  console.log("enter valid operator ")
}