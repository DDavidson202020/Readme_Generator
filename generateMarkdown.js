
function generateMarkdown(data) {
    return `
![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)

# ${data.title}

## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Contributing
${data.contributing}
## Questions
<p>If you have any question, contact me.</p>

## Test
${data.test}

![](${data.image})
`;
}
  
  module.exports = generateMarkdown;