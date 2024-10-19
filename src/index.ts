import { fibonacci } from "./fibonacci";


const args = process.argv.slice(2);
const number = parseInt(args[0], 10);

if (isNaN(number)) {
  console.error('Por favor, forneça um número válido como argumento.');
  process.exit(1);
}

try {
  const result = fibonacci(number);
  console.log(`Fibonacci(${number}) = ${result}`);
} catch (error: any) {
  console.error(error.message);
  process.exit(1);
}
