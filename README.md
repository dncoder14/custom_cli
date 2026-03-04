# Calculator CLI

A command-line calculator application built with TypeScript and Commander.js that provides 10 mathematical operations directly from your terminal.

## Features

- **Basic Operations**: add, subtract, multiply, divide
- **Advanced Operations**: modulo, power, square root, absolute value, percentage
- **Bonus**: greet command and random joke fetcher

## Usage

```bash
node cli.ts <command> <arguments>
```

## Commands

| Command | Description | Example |
|---------|-------------|----------|
| `add <n1> <n2>` | Add two numbers | `node cli.ts add 5 3` |
| `subtract <n1> <n2>` | Subtract two numbers | `node cli.ts subtract 10 5` |
| `multiply <n1> <n2>` | Multiply two numbers | `node cli.ts multiply 4 3` |
| `divide <n1> <n2>` | Divide two numbers | `node cli.ts divide 10 2` |
| `modulo <n1> <n2>` | Get remainder of division | `node cli.ts modulo 10 3` |
| `power <base> <exp>` | Calculate base raised to exponent | `node cli.ts power 2 3` |
| `sqrt <n>` | Calculate square root | `node cli.ts sqrt 16` |
| `abs <n>` | Get absolute value | `node cli.ts abs -5` |
| `percent <n1> <n2>` | Calculate n1 as percentage of n2 | `node cli.ts percent 25 100` |
| `joke` | Get a random joke | `node cli.ts joke` |

## Installation

```bash
npm install
```

## Technologies

- TypeScript
- Commander.js
- Axios

