const fetch = require('node-fetch');
var assert = require('assert');
var chai = require('chai')
  , chaiHttp = require('chai-http');

chai.use(chaiHttp);
var expect = require('chai').expect;

describe('/posts/1/comments', function() {
  it('The API returns comments as JSON array', async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts/1/comments', {
      method: 'GET'
    })
      .then((response) => {
        console.log(response.headers.get('Content-Type')); // This returns application/json; charset=utf-8
        return response.json()
      })
      .then((response) => {
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

  it('The API responds with 404 if invalid query sent', async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts/1/comments?postId=20', {
      method: 'GET'
    })
      .then((response) => {
        expect(response).to.have.status('404');
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

  it('Individual comments are returned when given a specific id query', async () => {
    await fetch('https://jsonplaceholder.typicode.com:443/posts/1/comments?id=4', {
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

  it('Comments are returned by post when given postId query', async () => {
    await fetch('https://jsonplaceholder.typicode.com:443/posts/1/comments?postId=1', {
      method: 'GET'
    })
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        // console.log(response);
        expect(response).to.be.lengthOf(5);
      });
  });

  it('Returns no comments when given non-existent query', async () => {
    await fetch('https://jsonplaceholder.typicode.com:443/posts/1/comments?name=jeremy', {
      method: 'GET'
    })
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        // console.log(response);
        expect(response).to.be.lengthOf(0);
      });
  });

  it('Returns posts by email', async () => {
    await fetch('https://jsonplaceholder.typicode.com:443/posts/1/comments?email=Carmen_Keeling@caroline.name', {
      method: 'GET'
    })
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        // console.log(response);
        expect(response[0]).to.deep.include({email: 'Carmen_Keeling@caroline.name'});
      });
  });
});
