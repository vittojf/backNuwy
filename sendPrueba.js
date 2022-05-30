const fs = require('fs');
const path = require('path');
const sendMail = require('./gmail');

const main = async () => {


  const options = {
    to: 'vittodeveloper@gmail.com',
    subject: 'Hello Amit 🚀',
    text: 'This email is sent from the command line',
    html: `<p>🙋🏻‍♀️  &mdash; This is a <b>test email</b> from <a href="https://digitalinspiration.com">Digital Inspiration</a>.</p>`,
  };

  const messageId = await sendMail(options);
  return messageId;
};

main()
  .then((messageId) => console.log('Message sent successfully:', messageId))
  .catch((err) => console.error(err));