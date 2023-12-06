const fs = require('fs');
const inquirer = require('inquirer');

// Function to generate the README content based on user input
function generateReadme(userInput) {
  return `
# ${userInput.title}

## Description
${userInput.description}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation
${userInput.installation}

## Usage
${userInput.usage}

## License
This project is licensed under ${userInput.license}.

## Contributing
${userInput.contributing}

## Tests
${userInput.tests}

## Questions
If you have any questions, feel free to reach out to me at ${userInput.email}.

GitHub: [${userInput.github}](https://github.com/${userInput.github})
`;
}

// Function to prompt the user for input
async function promptUser() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of your project:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a short description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Explain the installation process:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'Apache', 'GPL', 'None'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Explain how others can contribute to your project:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide examples of tests and how to run them:',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
  ]);
}

// Main function to run the application
async function init() {
  try {
    // Prompt the user for input
    const userInput = await promptUser();

    // Generate the README content
    const readmeContent = generateReadme(userInput);

    // Write the README.md file
    fs.writeFileSync('README.md', readmeContent);

    console.log('README.md successfully generated!');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Run the application
init();
