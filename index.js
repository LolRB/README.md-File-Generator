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
  {
    type: "input",
    message: "How can others contribute to your project?\n",
    name: "contributing",
  },
  {
    type: "input",
    message: "How do you run tests for your project?\n",
    name: "tests",
  },
  {
    type: "input",
    message: "What's your email address for support inquiries?\n",
    name: "email",
  },
  {
    type: "list", // Ask if the user wants to include a license
    message: "Choose a license for your project (or leave blank for none):\n",
    choices: ["MIT", "GPLv3", "Apache 2.0", "None"],
    name: "license",
  },
];

// TODO: Create a function to write README file with error handling
function writeToFile(fileName, data) {
  try {
    fs.writeFileSync(fileName, generateMarkdown(data));
    console.log("README file generated successfully!");
  } catch (error) {
    console.error("Error writing file:", error.message);
  }
}

// TODO: Create a function to initialize app
function init() {
  // Prompt the user and handle errors if writing fails
  inquirer
    .prompt(questions)
    .then((data) => {
      writeToFile("./new_Readme_file/README.md", data);
    })
    .catch((error) => {
      console.error("Error during inquirer prompt:", error.message);
    });
}

// Function call to initialize app
init();
