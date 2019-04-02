require('../config/config');

const aws = require('aws-sdk');

aws.config.update({
  accessKeyId: process.env['accessKeyId'],
  region: process.env['region'],
  secretAccessKey: process.env['secretAccessKey']
});

module.exports = aws;
