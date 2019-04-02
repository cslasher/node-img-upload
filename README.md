# Node Image Upload APIs

A set of restful APIs for uploading images to AWS S3

## Getting Started

Installation

```bash
npm install
```

## Configuration

Configurating ./config/config.json for development/test environment.
Set environment for productions.

Sample config.json:

```json
{
  "test": {
    "accessKeyId": "xxxxxxxxxxxxxxxxxxxxx",
    "region": "xxxxxxxxxxxxxxxxxxxxx",
    "secretAccessKey": "xxxxxxxxxxxxxxxxxxxxx",
    "bucketName": "xxxxxxxxxxxxxxxxxxxxx",
    "PORT": 3000
  },
  "development": {
    "accessKeyId": "xxxxxxxxxxxxxxxxxxxxx",
    "region": "xxxxxxxxxxxxxxxxxxxxx",
    "secretAccessKey": "xxxxxxxxxxxxxxxxxxxxx",
    "bucketName": "xxxxxxxxxxxxxxxxxxxxx",
    "PORT": 3000
  }
}
```

### Starting Server

```bash
npm start
```

### Watch Mode

```bash
npm run watch
```

## Running the tests

```bash
npm run 'test-watch'
```

## Features

### Upload Image

POST /upload/ HTTP/1.1

Content-Disposition: form-data; name="image"; filename=

### List Images

GET /uploads/ HTTP/1.1

### Delete Image

DELETE /upload/imageKey HTTP/1.1

### Note
