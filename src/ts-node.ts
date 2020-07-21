import App from "./app";
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('> ', (str:string) => {
    const result = App.main(str);
    console.log(`result: ${result}`);
    rl.close();
  });