const core = require("@actions/core");
const github = require("@actions/github");

const firstGreeting = core.getInput("first-greeting");
const secondGreeting = core.getInput("second-greeting");
const thirdGreeting = core.getInput("third-greeting");

console.log(`Hello ${firstGreeting}`);
try {
    if (firstGreeting) {
        console.log(`Hello ${firstGreeting}`);
        core.setOutput(“last-one-greeted”, firstGreeting); 
    } else if (secondGreeting) {
        console.log(`Hello ${secondGreeting}`);
        core.setOutput(“last-one-greeted”, secondGreeting);
    } else if (thirdGreeting) {
        console.log(`Hello ${thirdGreeting}`);
        core.setOutput(“last-one-greeted”, thirdGreeting);
} catch (error) {
  core.setFailed(error.message);
}
