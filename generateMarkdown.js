const fs = require("fs");
function generateMarkdown(data) {
    let heading = `
    #${data}
    `;
    

    fs.appendFile('newReadme.md', heading, (err) => {
      if (err) throw err;
      console.log('markdownSuccess');
    });

    

  
}
  
  module.exports = generateMarkdown;