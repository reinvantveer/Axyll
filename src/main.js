/* eslint no-console: "off" */
const permitRequester = require('./requestPermit');

function main() {
  return permitRequester('http://tizen.org/privilege/healthinfo')
    .then(() => permitRequester('http://developer.samsung.com/privilege/healthinfo'))
    .then(() => permitRequester('http://developer.samsung.com/privilege/medicalinfo'))
    .then(() => displayHeartRate())
    .catch(err => console.log(err));
}

window.onload = main();

