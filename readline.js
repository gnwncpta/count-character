const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name ? ", function(name){
    console.log(`Your name is ${name}`);
    rl.close();
})

rl.on("close", function(){
    console.log("BYE BYE");
    process.exit(0);
})