
function generateMarkdown(data) {
    return `
<img src = "https://img.shields.io/static/v1?label=<LABEL>&message=badge&color=blue">

# ${data.title}

# Description
${data.description}
# Installation
${data.installation}
# Usage
${data.usage}
# License
${data.license}
# Contributing
${data.contributing}
# Questions
<p>If you have any question, contact me.</p>

# Test
${data.test}

![](${data.image})
`;
}
  
  module.exports = generateMarkdown;