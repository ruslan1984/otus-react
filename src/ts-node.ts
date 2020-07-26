import App from "./app";
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('> ', (str:string) => {
    try{
    const result = App.main(str);
    console.log(`result: ${result}`);
    } catch (e) {
      console.log(e);
    }finally{
      rl.close();
    }
  });