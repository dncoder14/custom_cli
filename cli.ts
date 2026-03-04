#!/usr/bin/env node
const {Command} = require("commander");
const axios =  require("axios");

const program = new Command();

program
.command("greet <name>")
.action((name: string)=>{console.log(`Hello ${name}`)})

program
.command("add <n1> <n2>")
.description("Add two numbers")
.action((n1: string ,n2: string)=>{console.log(Number(n1)+Number(n2))})

program
.command("subtract <n1> <n2>")
.description("Subtract two numbers")
.action((n1: string ,n2: string)=>{console.log(Number(n1)-Number(n2))})

program
.command("multiply <n1> <n2>")
.description("Multiply two numbers")
.action((n1: string ,n2: string)=>{console.log(Number(n1)*Number(n2))})

program
.command("divide <n1> <n2>")
.description("Divide two numbers")
.action((n1: string ,n2: string)=>{
    if(n2 === "0") console.log("Cannot be divisible by 0")
    else console.log(Number(n1)/Number(n2))
})

program
.command("modulo <n1> <n2>")
.description("Get remainder of division")
.action((n1: string, n2: string)=>{
    if(n2 === "0") console.log("Cannot divide by 0")
    else console.log(Number(n1) % Number(n2))
})

program
.command("power <base> <exponent>")
.description("Calculate base raised to exponent")
.action((base: string, exponent: string)=>{console.log(Math.pow(Number(base), Number(exponent)))})

program
.command("sqrt <n>")
.description("Calculate square root")
.action((n: string)=>{
    if(Number(n) < 0) console.log("Cannot calculate square root of negative number")
    else console.log(Math.sqrt(Number(n)))
})

program
.command("abs <n>")
.description("Get absolute value")
.action((n: string)=>{console.log(Math.abs(Number(n)))})

program
.command("percent <n1> <n2>")
.description("Calculate n1 as percentage of n2")
.action((n1: string, n2: string)=>{
    if(n2 === "0") console.log("Cannot divide by 0")
    else console.log((Number(n1) / Number(n2)) * 100)
})

program
.command("joke")
.description("Get to read a Joke")
.action(async()=>{
    try {
    const joke = await axios.get("https://geek-jokes.sameerkumar.website/api?format=json");
    console.log(joke.data.joke)
    }catch(err){
        console.log(`Error: ${err}`)
    }
})

program.parse()
