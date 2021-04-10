const core = require("@actions/core");

const firstGreeting = core.getInput("first-greeting");
const secondGreeting = core.getInput("second-greeting");
const thirdGreeting = core.getInput("third-greeting");
const lastOneGreeted = core.setOutput("last-one-greeted");

console.log(`Hello ${firstGreeting}`);
if (secondGreeting) {
    console.log(`Hello ${secondGreeting}`);
    core.setOutput(“last-one-greeted”); 
} else if (thirdGreeting) {
    console.log(`Hello ${thirdGreeting}`);
    core.setOutput(“last-one-greeted”);
}
catch (error) {
  core.setFailed(error.message);
}
