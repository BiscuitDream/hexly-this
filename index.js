import readlineSync from 'readline-sync';

const calculator = {
  read() {
    this.num1 = Number(readlineSync.question('Input num1: '));
    this.num2 = Number(readlineSync.question('Input num2: '));
  },
  sum() {
    return this.num1 + this.num2;
  },
  mul() {
    return this.num1 * this.num2;
  }
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());