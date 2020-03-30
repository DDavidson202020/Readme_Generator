const inquirer = require('inquirer');
const api = require("./api");
const generateMarkdown = require("./generateMarkdown");


inquirer
  .prompt([
    {
      type: "input",
      message: "What is your Github's username?",
      name: "username"
    },
    {
      type: "input",
      message: "What is your project title?",
      name: "title"
    },
    {
      type: "input",
      message: "What's the description of your project?",
      name: "description"
    },
    {
      type: "input",
      message: "What are the steps required to install your project?",
      name: "installation",
      
    },
    {
      type: "input",
      message: "What are the instructions and examples for use?",
      name: "usage",
    },
    {
      type: "input",
      message: "What is the license for this project?",
      name: "license",
    },
    {
      type: "input",
      message: "What are your guidelines for contributing to the project?",
      name: "contributing",
    },
    {
      type: "input",
      message: "If you have tests for your application, provide examples on how to run them?",
      name: "test",
    }
    
  ])
  .then(function(response) {
      //console.log(response.username)
      generateMarkdown(response.title)
      generateMarkdown(response.description)
      generateMarkdown(response.installation)
      generateMarkdown(response.usage)
      generateMarkdown(response.license)
      generateMarkdown(response.contributing)
      generateMarkdown(response.test)
      api.getUser(response.username)
    
    
  });

function init() {
    
    // Logic for this app shoud be here. You can create more functions if you like. This is just a template for you to start your Homework but it is not required for you to use it.
    
}
    
init();