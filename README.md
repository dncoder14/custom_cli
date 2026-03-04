# Calculator CLI

A command-line calculator application built with TypeScript and Commander.js that provides 10 mathematical operations and 3 API integrations.

## Features

- **Basic Operations**: add, subtract, multiply, divide
- **Advanced Operations**: modulo, power, square root, absolute value, percentage
- **API Integrations**: GitHub user info, Weather data, Random jokes
- **OOP Design**: Built with classes, inheritance, encapsulation, and abstraction

## Installation

```bash
npm install
```

## Usage

```bash
npx ts-node cli.ts <command> <arguments>
```

## Commands

### Calculator Commands

| Command | Description | Example |
|---------|-------------|----------|
| `greet <name>` | Greet a user | `npx ts-node cli.ts greet John` |
| `add <n1> <n2>` | Add two numbers | `npx ts-node cli.ts add 5 3` |
| `subtract <n1> <n2>` | Subtract two numbers | `npx ts-node cli.ts subtract 10 5` |
| `multiply <n1> <n2>` | Multiply two numbers | `npx ts-node cli.ts multiply 4 3` |
| `divide <n1> <n2>` | Divide two numbers | `npx ts-node cli.ts divide 10 2` |
| `modulo <n1> <n2>` | Get remainder of division | `npx ts-node cli.ts modulo 10 3` |
| `power <base> <exp>` | Calculate base raised to exponent | `npx ts-node cli.ts power 2 3` |
| `sqrt <n>` | Calculate square root | `npx ts-node cli.ts sqrt 16` |
| `abs <n>` | Get absolute value | `npx ts-node cli.ts abs -5` |
| `percent <n1> <n2>` | Calculate n1 as percentage of n2 | `npx ts-node cli.ts percent 25 100` |

### API Integration Commands

| Command | Description | Example |
|---------|-------------|----------|
| `joke` | Get a random joke | `npx ts-node cli.ts joke` |
| `github <username>` | Get GitHub user information | `npx ts-node cli.ts github torvalds` |
| `weather <city>` | Get weather for a city | `npx ts-node cli.ts weather London` |

### Utility Commands

```bash
npx ts-node cli.ts --version    # Show version
npx ts-node cli.ts --help       # Show help
```

## OOP Architecture

### Classes

- **Operation (Abstract)**: Base class for all calculator operations
- **Calculator**: Manages all mathematical operations
- **JokeService**: Handles joke API integration
- **GitHubService**: Handles GitHub API integration
- **WeatherService**: Handles weather API integration

### OOP Principles Applied

1. **Abstraction**: Abstract Operation class defines contract
2. **Inheritance**: All operations extend Operation class
3. **Encapsulation**: Private properties and methods
4. **Polymorphism**: Each operation implements execute() differently

## Technologies

- TypeScript
- Commander.js
- Axios
- Node.js

## API Sources

- Jokes: https://geek-jokes.sameerkumar.website
- GitHub: https://api.github.com
- Weather: https://wttr.in

