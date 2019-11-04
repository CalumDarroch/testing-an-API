const fetch = require('node-fetch');
var assert = require('assert');
var expect = require('chai').expect;

describe('/posts/1', function() {
  it('The API return the post as JSON', async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'GET'
    })
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        // console.log(response);
        expect(response).to.be.an('Object');
      });
  });

  it('Posts are returned using an insecure HTTP GET request', async () => {
    await fetch('http://jsonplaceholder.typicode.com:80/posts/1', {
      method: 'GET'
    })
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        // console.log(response);
        expect(response).to.be.an('Object');
      });
  });

  it('Posts are returned using a secure HTTPS GET request', async () => {
    await fetch('https://jsonplaceholder.typicode.com:443/posts/1', {
      method: 'GET'
    })
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        // console.log(response);
        expect(response).to.be.an('Object');
      });
  });

});
