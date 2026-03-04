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
npm run build
sudo npm link
```

## Usage

### Using mycli command (after npm link):
```bash
mycli <command> <arguments>
```

### Using npx ts-node:
```bash
npx ts-node cli.ts <command> <arguments>
```

## Commands

### Calculator Commands

| Command | Description | Example |
|---------|-------------|----------|
| `greet <name>` | Greet a user | `mycli greet John` |
| `add <n1> <n2>` | Add two numbers | `mycli add 5 3` |
| `subtract <n1> <n2>` | Subtract two numbers | `mycli subtract 10 5` |
| `multiply <n1> <n2>` | Multiply two numbers | `mycli multiply 4 3` |
| `divide <n1> <n2>` | Divide two numbers | `mycli divide 10 2` |
| `modulo <n1> <n2>` | Get remainder of division | `mycli modulo 10 3` |
| `power <base> <exp>` | Calculate base raised to exponent | `mycli power 2 3` |
| `sqrt <n>` | Calculate square root | `mycli sqrt 16` |
| `abs <n>` | Get absolute value | `mycli abs -5` |
| `percent <n1> <n2>` | Calculate n1 as percentage of n2 | `mycli percent 25 100` |

### API Integration Commands

| Command | Description | Example |
|---------|-------------|----------|
| `joke` | Get a random joke | `mycli joke` |
| `github <username>` | Get GitHub user information | `mycli github torvalds` |
| `weather <city>` | Get weather for a city | `mycli weather London` |

### Utility Commands

```bash
mycli --version    # Show version
mycli --help       # Show help
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

