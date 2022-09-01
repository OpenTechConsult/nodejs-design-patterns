# 09-writable-http-entropy-server

This example shows how to write into a writable stream, specifically an HTTP response sent by the server.

## Dependencies

Install all the necessary dependencies with:

> npm install

## Run

To run the server:

> node entropy-server.js

or

> npm start

Now you can make requests to the server by pointing your browser to [http://localhost:8080] or with curl as follows:

> curl -i -vvv http://localhost:8080/