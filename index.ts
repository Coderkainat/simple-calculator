#!/usr/bin/env node
//called shabang

import inquirer from "inquirer";
const answer = await inquirer.prompt([{
    message: " Enter your First Number", type:"number", name: "firstNumber"
},
{ message: "Enter your second Number" , type: "number", name: "secondNumber"
},
{message:"Enter your operator", type: "list", name:"operator", choices:["Addition", "Subtraction","Division", "Multiplication"]
},
])
if(answer.operator === 'Addition'){
    console.log(answer.firstNumber + answer.secondNumber);
}
else if(answer.operator === 'Subtraction'){
    console.log(answer.firstNumber - answer.secondNumber);
}
else if(answer.operator === 'Multiplication'){
    console.log(answer.firstNumber * answer.secondNumber);
}
else if(answer.operator === 'Division'){
    console.log(answer.firstNumber / answer.secondNumber);
}
else{
    console.log("please select valid operator");
}