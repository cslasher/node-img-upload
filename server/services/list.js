const aws = require('./aws');

require('../config/config');

const listObjects = async () => {
  const params = {
    Bucket: process.env['bucketName']
  };

  const s3 = new aws.S3();

  var keys = [];
  for (;;) {
    var data = await s3.listObjects(params).promise();

    data.Contents.forEach(elem => {
      keys = keys.concat(elem.Key);
    });

    if (!data.IsTruncated) {
      break;
    }
    params.Marker = data.NextMarker;
  }

  return keys;
};

module.exports = listObjects;
