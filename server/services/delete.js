const aws = require('./aws');

require('../config/config');

const s3 = new aws.S3();

const deleteObject = async keyId => {
  const params = {
    Bucket: process.env['bucketName'],
    Key: keyId
  };

  return await s3.deleteObject(params).promise();
};

module.exports = deleteObject;
