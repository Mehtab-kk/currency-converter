#! /usr/bin/env node

import inquirer from "inquirer";
import { inflateRaw } from "zlib";

const currency :any= {
  USD: 1,
  EUR: 0.91,
  GBP: 0.76,
  INR: 74.57,
  PKR: 280,
};
let user = await inquirer.prompt([
  {
    name: "from",
    message: "Enter from Currency",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"],
  },
  {
    name: "to",
    message: "Enter to Currency",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"],
  },
  {
    name: "amount",
    message: "Enter your amount",
    type: "number",
  },
]);

let fromamount =currency[user.from]
let toamounnt =currency[user.to]
let amount=user.amount
let baseamount =amount / fromamount
                // 15000   /280= dollar 
let bassedamount =baseamount*toamounnt
console.log(bassedamount)

// console.log(fromamount);
// console.log(toamounnt);
// console.log(amount);
