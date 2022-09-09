# 15-passthrough-late-piping

This is example demonstrates how to create and use PassThrough stream for late
writing into a third-party API accepting content from a streams. This is
implemented here through a web server that can receive files and store them locally.

## Dependencies

Install all necessary dependencies with:

> npm install

## Run

To run the example you have to start the server first

> node server.js

Then, in another terminal window you can run:

> node upload.js <path/to/file/to/upload>
