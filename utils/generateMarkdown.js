// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  return `![GitHub](https://img.shields.io/github/license/${data.username}/${data.repo}?style=for-the-badge)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  return `https://github.com/${data.username}/${data.repo}/blob/main/LICENSE`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  return `${renderLicenseBadge(data)}<br>See the [license](${renderLicenseLink(data)}) for more details.`
    }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${data.intro}

## Features

- ${data.features}

## Usage
${data.usage}

## Installation
${data.installation}

## Technologies Used
- ${data.technologies}

## License
 ${renderLicenseSection(data)}
`;
}

module.exports = generateMarkdown;
