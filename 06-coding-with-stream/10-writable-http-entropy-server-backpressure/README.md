# 10-writable-http-entropy-server-back-pressure

This example show how to write into a writable stream, specifically an HTTP response by a server also taking back-pressure into account.

## Dependencies

Install all necessary dependencies with:

> npm install

## Run with

To run the server

> node entropy-server.js

Make request to the server by pointing the browser to [http://localhost:8080] or with curl as follows:

> curl -i -vvv http://localhost:8080/