// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Mozilla Public License 2.0':
      return `\n[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    case 'Apache License 2.0':
      return `\n[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case 'MIT License':
      return `\n[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Mozilla Public License 2.0':
      return 'https://choosealicense.com/licenses/mpl-2.0/';
    case 'Apache License 2.0':
      return 'https://choosealicense.com/licenses/apache-2.0/';
    case 'MIT License':
      return 'https://choosealicense.com/licenses/mit/';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') return '';

  return `
  ## License

  [${license}](${renderLicenseLink(license)})`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { username, email, project, description, installation, usage, contribution, test, license } = data;

  return `# ${project}
  ${renderLicenseBadge(license)}

  ## Description

  ${description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)
  - [Contribution](#contribution)
  - [Questions](#questions)
  - [License](#license)

  ## Installation

  ${installation}

  ## Usage

  ${usage}

  ## Testing

  ${test}

  ## Contribution

  ${contribution}

  ## Questions

  [My GitHub](https://github.com/${username})

  For further inquiry, contact me at: ${email}
  ${renderLicenseSection(license)}`
}

module.exports = generateMarkdown;
