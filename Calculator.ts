abstract class Operation {
    abstract execute(...args: number[]): number;
    
    protected validateDivision(divisor: number): void {
        if (divisor === 0) throw new Error("Cannot divide by 0");
    }
}

class Addition extends Operation {
    execute(n1: number, n2: number): number {
        return n1 + n2;
    }
}

class Subtraction extends Operation {
    execute(n1: number, n2: number): number {
        return n1 - n2;
    }
}

class Multiplication extends Operation {
    execute(n1: number, n2: number): number {
        return n1 * n2;
    }
}

class Division extends Operation {
    execute(n1: number, n2: number): number {
        this.validateDivision(n2);
        return n1 / n2;
    }
}

class Modulo extends Operation {
    execute(n1: number, n2: number): number {
        this.validateDivision(n2);
        return n1 % n2;
    }
}

class Power extends Operation {
    execute(base: number, exponent: number): number {
        return Math.pow(base, exponent);
    }
}

class SquareRoot extends Operation {
    execute(n: number): number {
        if (n < 0) throw new Error("Cannot calculate square root of negative number");
        return Math.sqrt(n);
    }
}

class AbsoluteValue extends Operation {
    execute(n: number): number {
        return Math.abs(n);
    }
}

class Percentage extends Operation {
    execute(n1: number, n2: number): number {
        this.validateDivision(n2);
        return (n1 / n2) * 100;
    }
}

export class Calculator {
    private operations: Map<string, Operation>;

    constructor() {
        this.operations = new Map([
            ['add', new Addition()],
            ['subtract', new Subtraction()],
            ['multiply', new Multiplication()],
            ['divide', new Division()],
            ['modulo', new Modulo()],
            ['power', new Power()],
            ['sqrt', new SquareRoot()],
            ['abs', new AbsoluteValue()],
            ['percent', new Percentage()]
        ]);
    }

    calculate(operation: string, ...args: number[]): number {
        const op = this.operations.get(operation);
        if (!op) throw new Error(`Unknown operation: ${operation}`);
        return op.execute(...args);
    }
}
