const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter project title:'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter project description:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information:'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter contribution guidelines:'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your application:',
    choices: [
      'MIT',
      'Apache 2.0',
      'GNU GPL v3'
    ]
  },
  {
    type: 'input',
    name: 'username',
    message: 'Enter your GitHub username:'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:'
  }
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('README file generated successfully!');
    }
  });
}

// function to initialize program
function init() {
  // Prompt user for input
  inquirer.prompt(questions)
    .then((answers) => {
      // Generate markdown
      const markdown = generateMarkdown(answers);

      // Write README file
      writeToFile('README.md', markdown);
    });
}

// function call to initialise program
init();
