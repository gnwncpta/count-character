const prompt = require('prompt');
prompt.start();


function callback(){
    console.log('Callback was called.')
}

function sayHello(name, callback){
    console.log(`Hi, My Name is ${name}`);
    callback();
}

function onErr(err){
    console.log(err);
    return 1;
}

prompt.get(['name'], function(err, result){
    if(err) {return onErr(err)}
    sayHello(result.name, callback)
})

