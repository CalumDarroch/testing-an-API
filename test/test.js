const fetch = require('node-fetch');
var assert = require('assert');
var expect = require('chai').expect;

describe('/posts', function() {
  it('returns posts as JSON', async () => {
    await fetch('http://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        // console.log(res);
        expect(res).to.be.a('Array');
      });
  });
});
