# Testing JSON Placeholder API

The goal of this exercise is to test the functionality of the `posts` path of the [JSON Placeholder API](https://github.com/typicode/jsonplaceholder), particularly:

GET /posts/1
GET /posts/1/comments

The criteria for the tests were that they must be automated. Further criteria - such as particular techniques or frameworks to use, parameters under test or acceptance criteria etc. - were not supplied. The tests were undertaken under black box conditions.

While platforms/tools such as Postman and SoapUI seem to be the popular method for testing APIs, I opted to build my tests using the following stack:

- [Node.js](https://nodejs.org/en/)
- [node-fetch](https://www.npmjs.com/package/node-fetch) npm package
- [Mocha](https://mochajs.org/) testing framework
- [Chai](https://www.chaijs.com/) assertion library
- [SuperTest](https://github.com/visionmedia/supertest) library

## Findings

### posts/1 path
- The posts will be returned via both the HTTP (port: 80) and HTTPS (port: 443) protocols. This is not secure.
- A JSON object is returned featuring a user id, a post id, post title and body.
