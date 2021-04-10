const core = require("@actions/core");
const github = require("@actions/github");

const firstGreeting = core.getInput("first-greeting");
const secondGreeting = core.getInput("second-greeting");
const thirdGreeting = core.getInput("third-greeting");
const lastOneGreeted = core.getInput("last-one-greeted");

try {
    console.log(`Hello ${firstGreeting}`);
    console.log(`Hello ${secondGreeting}`);
    console.log(`Hello ${thirdGreeting}`);
    
    core.setOutput(“last-one-greeted”, firstGreeting); 
    core.setOutput(“last-one-greeted”, secondGreeting);
    core.setOutput(“last-one-greeted”, thirdGreeting);    
              
} catch (error) {
  core.setFailed(error.message);
}
