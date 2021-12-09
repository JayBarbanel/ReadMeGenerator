// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Description of your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'How do you install the program?',
        name: 'installation',

    },
    {
        type: 'input',
        message: 'How do you use the program?',
        name: 'usage',

    },
    {
        type: "list",
        message: "What is the license?",
        name: "license",
        choices: ["MIT", "GPL_3.0", "none"]

    },
    {
        type: 'input',
        message: 'What tests did you run on your application?',
        name: 'tests',

    },
    {
        type: 'input',
        message: 'Please specify contribution guidelines.',
        name: 'contribution',

    },
    {
        type: 'input',
        message: 'Please let me know if you have any questions..',
        name: 'questions',

    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
                console.log(response)
                let README = generateMarkdown(response)
                writeToFile("README.md", README)
            }

        );
}

// Function call to initialize app
init();