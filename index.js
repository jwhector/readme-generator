// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = async () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'project',
            message: 'What is your project name?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Briefly describe your project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide usage instructions.',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please provide contribution guidelines.',
        },
        {
           type: 'input',
           name: 'test',
           message: 'Please provide test instructions.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select a license.',
            choices: ['MIT']
        },
    ]);
}

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
async function init() {
    const response = await questions();
    require('./utils/generateMarkdown')(response);
}

// Function call to initialize app
init();
