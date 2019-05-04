const Promise = require('bluebird');

function requestPermit(uri) {
  return new Promise((resolve, reject) => {
    tizen.ppm.requestPermission(uri,
      (success) => { resolve(success); },
      (error) => { reject(error); });
  });
}

exports = requestPermit;
