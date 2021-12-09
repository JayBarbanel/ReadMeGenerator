// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "none") {
        return ""
    } else {
        return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/)

        `
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# Project Title: ${data.title}
${renderLicenseBadge(data.license)}
## Table of contents:
* [description](#description)
* [installation](#installation)
* [usage](#usage)
* [tests](#tests)
* [questions](#questions)
## Description:
${data.description}
## Installation Instructions:
${data.installation}
## Usage:
${data.usage}
## How to contribute:
${data.contribution}
## To Test:
${data.tests}
## Questions:
If you have any questions, you can reach me at ${data.githubUsername} or email me at 
${data.email}
`;
}

module.exports = generateMarkdown;