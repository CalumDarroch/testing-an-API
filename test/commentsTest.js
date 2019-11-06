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
        console.log(response);
        expect(response).to.be.an('Array');
      });
  });

  it('The API response has status 200', async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts/1/comments', {
      method: 'GET'
    })
      .then((response) => {
        expect(response).to.have.status('200');
      });
  });

  it('Posts are returned using an insecure HTTP GET request', async () => {
    await fetch('http://jsonplaceholder.typicode.com:80/posts/1/comments', {
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

  it('Posts are returned using a secure HTTPS GET request', async () => {
    await fetch('https://jsonplaceholder.typicode.com:443/posts/1/comments', {
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
