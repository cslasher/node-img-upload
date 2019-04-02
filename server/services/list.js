const aws = require('./aws');

const listObjects = async bucket => {
  const params = {
    Bucket: bucket
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
