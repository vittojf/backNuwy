
const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');
const credentials = require('./client_secret_92188948326-fn572s4i982psngp2rit0tsn3e1lu5nj.apps.googleusercontent.com.json');
//http://localhost/?code=4/0AX4XfWiz8eDb2qfHO4XArySaSBXxtjrzFtaDGDAFHi1ETsDsiXOZRUu-e8QNVCz7lW2dng&scope=https://www.googleapis.com/auth/gmail.send
// Replace with the code you received from Google
const code = '4/0AX4XfWiz8eDb2qfHO4XArySaSBXxtjrzFtaDGDAFHi1ETsDsiXOZRUu-e8QNVCz7lW2dng'
const { client_secret, client_id, redirect_uris } = credentials.installed;
const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

oAuth2Client.getToken(code).then(({ tokens }) => {
  const tokenPath = path.join(__dirname, 'tokens.json');
  fs.writeFileSync(tokenPath, JSON.stringify(tokens));
  console.log('Access token and refresh token stored to token.json');
});