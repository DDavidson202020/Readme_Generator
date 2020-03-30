const axios = require('axios').default;
const fs = require("fs");
const api = {
    getUser(username) {
      if(username == null) {
        console.log("Please enter your Github's username!")
      } else {
        axios.get("https://api.github.com/users/" + username)
              .then(function(response) {
                //console.log(response);
                console.log(response.data.avatar_url);
                console.log(response.data.email)
                fs.appendFile('newReadme.md', "![](" + response.data.avatar_url+ ")", (err) => {
                  if (err) throw err;
                  console.log('Success');
                });
              })
              .catch(function (error) {
                // handle error
                console.log(error);
              })

      }
    }
  };
  
  module.exports = api;