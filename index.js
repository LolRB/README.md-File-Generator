// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What's your Github username?\n",
    name: "username",
  },
  {
    type: "input",
    message: "What's your Github repo?\n",
    name: "repo",
  },
  {
    type: "input",
    message: "What's your project's title?\n",
    name: "title",
  },
  {
    type: "input",
    message: "What's your project's introduction?\n",
    name: "intro",
  },
  {
    type: "input",
    message: "What're your project's features?\n",
    name: "features",
  },
  {
    type: "input",
    message: "Explain how to use your app\n",
    name: "usage",
  },
  {
    type: "input",
    message: "How do you install this app?\n",
    name: "installation",
  },
  {
    type: "checkbox",
    message: "What technologies are involved in the project?\n",
    choices: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "SQL",
      "MongoDB",
      "Node",
      "Java",
      "C#",
      "Python",
    ],
    name: "technologies",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, generateMarkdown(data));
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("./new_Readme_file/README.md", data),
      (err) => (err ? console.error(err) : console.log("Success!"));
  });
}

// Function call to initialize app
init();
