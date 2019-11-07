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

### General
- Both posts and comments will be returned via both the HTTP (port: 80) and HTTPS (port: 443) protocols. This is not secure.
- The API appears to make no use of login tokens. Both posts and comments are publicly available.
- Neither the posts nor comments return a `404 Not Found` response when passed a non-existent query. Instead they return `200` and the JSON objects listed under the path.

### posts/1 path
- A JSON object is returned featuring a user id, a post id, post title and body.

### posts/1/comments path
- An array of JSON objects is returned for the comments. Each comment features a post id, a comment id, a name, an email address and a body.
- Email addresses being listed publicly on comments is a potential security issue.
- Comments can be returned individually using id queries. They are returned in an array regardless of number.
