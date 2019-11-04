const fetch = require('node-fetch');
var assert = require('assert');
var expect = require('chai').expect;

describe('/posts/1/comments', function() {
  it('The API returns comments as JSON array', async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts/1/comments', {
      method: 'GET'
    })
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        // console.log(response);
        expect(response).to.be.an('Array');
      });
  });
});
