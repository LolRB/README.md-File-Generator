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
    message: "What's your project's title?\n",
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

// Function call to initialize app
init();
