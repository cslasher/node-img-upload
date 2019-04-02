const express = require('express');
const bodyParser = require('body-parser');

const upload = require('./services/upload');

const port = process.env.PORT;

const app = express();

app.use(bodyParser.json());

app.post('/upload', (req, res) => {
  const singleUpload = upload.single('image');
  singleUpload(req, res, (err, some) => {
    if (err) {
      return res.status(422).send({
        errors: [{ title: 'Image Upload Error', detail: err.message }]
      });
    }

    return res.json({ imageUrl: req.file.location });
  });
});

app.listen(port, () => {
  console.log(`Starting on port: ${port}`);
});

module.exports = { app };
