#!/usr/bin/env node
const {Command} = require("commander");
import { Calculator } from './Calculator';
import { JokeService } from './JokeService';
import { GitHubService } from './GitHubService';
import { WeatherService } from './WeatherService';

const program = new Command();
const calculator = new Calculator();
const jokeService = new JokeService();
const githubService = new GitHubService();
const weatherService = new WeatherService();

program
.name('mycli')
.version('1.0.0')
.description('A CLI calculator with API integrations');

program
.command("greet <name>")
.description("Greet a user")
.action((name: string)=>{console.log(`Hello ${name}`)})

program
.command("add <n1> <n2>")
.description("Add two numbers")
.action((n1: string, n2: string)=>{
    try {
        console.log(calculator.calculate('add', Number(n1), Number(n2)));
    } catch(err: any) {
        console.log(err.message);
    }
})

program
.command("subtract <n1> <n2>")
.description("Subtract two numbers")
.action((n1: string, n2: string)=>{
    try {
        console.log(calculator.calculate('subtract', Number(n1), Number(n2)));
    } catch(err: any) {
        console.log(err.message);
    }
})

program
.command("multiply <n1> <n2>")
.description("Multiply two numbers")
.action((n1: string, n2: string)=>{
    try {
        console.log(calculator.calculate('multiply', Number(n1), Number(n2)));
    } catch(err: any) {
        console.log(err.message);
    }
})

program
.command("divide <n1> <n2>")
.description("Divide two numbers")
.action((n1: string, n2: string)=>{
    try {
        console.log(calculator.calculate('divide', Number(n1), Number(n2)));
    } catch(err: any) {
        console.log(err.message);
    }
})

program
.command("modulo <n1> <n2>")
.description("Get remainder of division")
.action((n1: string, n2: string)=>{
    try {
        console.log(calculator.calculate('modulo', Number(n1), Number(n2)));
    } catch(err: any) {
        console.log(err.message);
    }
})

program
.command("power <base> <exponent>")
.description("Calculate base raised to exponent")
.action((base: string, exponent: string)=>{
    try {
        console.log(calculator.calculate('power', Number(base), Number(exponent)));
    } catch(err: any) {
        console.log(err.message);
    }
})

program
.command("sqrt <n>")
.description("Calculate square root")
.action((n: string)=>{
    try {
        console.log(calculator.calculate('sqrt', Number(n)));
    } catch(err: any) {
        console.log(err.message);
    }
})

program
.command("abs <n>")
.description("Get absolute value")
.action((n: string)=>{
    try {
        console.log(calculator.calculate('abs', Number(n)));
    } catch(err: any) {
        console.log(err.message);
    }
})

program
.command("percent <n1> <n2>")
.description("Calculate n1 as percentage of n2")
.action((n1: string, n2: string)=>{
    try {
        console.log(calculator.calculate('percent', Number(n1), Number(n2)));
    } catch(err: any) {
        console.log(err.message);
    }
})

program
.command("joke")
.description("Get a random joke")
.action(async()=>{
    try {
        const joke = await jokeService.fetchJoke();
        console.log(joke);
    } catch(err: any) {
        console.log(err.message);
    }
})

program
.command("github <username>")
.description("Get GitHub user information")
.action(async(username: string)=>{
    try {
        const user = await githubService.getUserInfo(username);
        console.log(`\nName: ${user.name}`);
        console.log(`Bio: ${user.bio}`);
        console.log(`Location: ${user.location}`);
        console.log(`Followers: ${user.followers}`);
        console.log(`Following: ${user.following}`);
        console.log(`Public Repos: ${user.repos}`);
    } catch(err: any) {
        console.log(err.message);
    }
})

program
.command("weather <city>")
.description("Get weather information for a city")
.action(async(city: string)=>{
    try {
        const weather = await weatherService.getWeather(city);
        console.log(weather);
    } catch(err: any) {
        console.log(err.message);
    }
})

program.parse()
