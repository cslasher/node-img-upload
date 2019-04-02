const express = require('express');
const bodyParser = require('body-parser');

const upload = require('./services/upload');
const listObjects = require('./services/list');
const deleteObject = require('./services/delete');

const port = process.env.PORT;

const app = express();

app.use(bodyParser.json());

app.post('/upload', (req, res) => {
  const singleUpload = upload.single('image');
  singleUpload(req, res, (err, some) => {
    if (err) {
      return res.status(422).send({
        errors: [{ title: 'Image Uploading Error', detail: err.message }]
      });
    }

    return res.json({
      status: 'success',
      message: { imageUrl: req.file.location }
    });
  });
});

app.get('/uploads', (req, res) => {
  listObjects()
    .then(images => {
      res.json({ status: 'success', message: { images: images } });
    })
    .catch(err => {
      res.status(422).send({
        errors: [{ title: 'Images Listing Error', detail: err.message }]
      });
    });
});

app.delete('/upload', (req, res) => {
  deleteObject(req.params.imageId)
    .then(() => {
      res.json({ status: 'success' });
    })
    .catch(err => {
      res.status(422).send({
        errors: [{ title: 'Image Deletion Error', detail: err.message }]
      });
    });
});

app.listen(port, () => {
  console.log(`Starting on port: ${port}`);
});

module.exports = { app };
