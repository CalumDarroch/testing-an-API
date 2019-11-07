# Testing JSON Placeholder API

The goal of this exercise is to test the functionality of the `posts` path of the [JSON Placeholder API](https://github.com/typicode/jsonplaceholder), particularly:

- GET /posts/1
- GET /posts/1/comments

The criteria for the tests were that they must be automated. Further criteria - such as particular techniques or frameworks to use, parameters under test or acceptance criteria etc. - were not supplied. The tests were undertaken under black box conditions.

While platforms/tools such as Postman and SoapUI seem to be the popular method for testing APIs, I opted to build my tests using the following stack:

- [Node.js](https://nodejs.org/en/)
- [node-fetch](https://www.npmjs.com/package/node-fetch) npm package
- [Mocha](https://mochajs.org/) testing framework
- [Chai](https://www.chaijs.com/) assertion library
- [SuperTest](https://github.com/visionmedia/supertest) library
- [chai-http](https://github.com/chaijs/chai-http) library

## Running the tests

Clone this repository. Run `npm init` then `npm test` in your terminal to see the test results. Most tests have a commented-out `console.log` call for the API response. Un-comment to print the API's response to the terminal.
The tests for 404 responses are failing and give long breakdowns of the API's response. Comment the expectations out if you do not want to see the full AssertionError.

## Findings

The findings recorded here are a mix of automated test results and of observing the API's response logged to the console.

### General
- Both posts and comments will be returned via both the HTTP (port: 80) and HTTPS (port: 443) protocols. This is not secure.
- The API appears to make no use of login tokens. Both posts and comments are publicly available.
- Neither the posts nor comments return a `404 Not Found` response when passed a non-existent query. Instead they return `200` and the JSON objects listed under the path.
- RESTful nature of the API means that partial information cannot be queried (e.g. you can't ask the API just to return the a list of emails). It will only return complete JSON objects.

### posts/1 path
- A JSON object is returned featuring a user id, a post id, post title and body.

### posts/1/comments path
- An array of JSON objects is returned for the comments. Each comment features a post id, a comment id, a name, an email address and a body.
- Email addresses being listed publicly on comments is a potential security issue.
- Comments can be returned individually using id queries. They are returned in an array regardless of number.
- Queries for email addresses will return comments.

### Recommendations

In light of the above findings I would not recommend this API for a commercial application or one where sensitive data is concerned. Posts and comments are fully public as are associated email addresses of comments. Furthermore, the API will return the post data even if bad queries are sent - it does not default to 404.
Given further time I would also implement tests for the response speed of the API.
