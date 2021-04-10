const core = require("@actions/core");
const github = require("@actions/github");

const firstGreeting = core.getInput("first-greeting");
const secondGreeting = core.getInput("second-greeting");
const thirdGreeting = core.getInput("third-greeting");
const lastOneGreeted = core.getInput("last-one-greeted");

try {
    if (firstGreeting) {
        console.log(`The last one greeted was ${firstGreeting}!`);
        core.setOutput("last-one-greeted", firstGreeting); 
    } else if (secondGreeting) {
        console.log(`The last one greeted was ${secondGreeting}!`);
        core.setOutput("last-one-greeted", secondGreeting);
    } else if (thirdGreeting) {
        console.log(`The last one greeted was ${thirdGreeting}!`);
        core.setOutput("last-one-greeted", thirdGreeting);
} catch (error) {
  core.setFailed(error.message);
}


//try {
    //console.log(`Hello ${firstGreeting}`);
    //console.log(`Hello ${secondGreeting}`);
    //console.log(`Hello ${thirdGreeting}`);
    
    //core.setOutput("first-greeting", firstGreeting); 
    //core.setOutput("second-greeting", secondGreeting);
    //core.setOutput("third-greeting", thirdGreeting);
    //core.setOutput("last-one-greeted", lastOneGreeted);
              
//} catch (error) {
  //core.setFailed(error.message);
//}
