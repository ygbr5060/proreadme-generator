function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  [![License: ${data.license}](https://img.shields.io/badge/License-${encodeURIComponent(data.license)}-blue.svg)](https://opensource.org/licenses/${encodeURIComponent(data.license)})

  This application is covered under the ${data.license} license.

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  If you have any questions about this application, you can reach out to me on [GitHub](https://github.com/${data.username}) or contact me via email at ${data.email}.
  `;
}

module.exports = generateMarkdown;
