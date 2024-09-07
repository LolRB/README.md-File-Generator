// TODO: Create a function that returns a license badge based on the license passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license === "None") {
    return ""; // No badge if no license
  }
  return `![GitHub](https://img.shields.io/github/license/${data.username}/${data.repo}?style=for-the-badge)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.license === "None") {
    return ""; // No link if no license
  }
  return `https://github.com/${data.username}/${data.repo}/blob/main/LICENSE`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.license === "None") {
    return ""; // No section if no license
  }
  return `${renderLicenseBadge(data)}<br>See the [license](${renderLicenseLink(
    data
  )}) for more details.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${data.intro}

## Table of Contents

- [Features](#features)
- [Usage](#usage)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Features

- ${data.features}

## Usage

${data.usage}

## Installation

${data.installation}

## Technologies Used

- ${data.technologies.join(", ")}

## Contributing

${data.contributing}

## Tests

${data.tests}

## License

${renderLicenseSection(data)}

## Questions
For any questions or inquiries, please reach out to me via email at: ${
    data.email
  }.  
You can also find me on GitHub: [${data.username}](https://github.com/${
    data.username
  }).
`;
}

module.exports = generateMarkdown;
