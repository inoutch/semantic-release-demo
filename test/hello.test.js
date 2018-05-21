const expect = require('chai').expect;
const helloModule = require('../index');

describe('hello', () => {
  it('return hello', () => {
    expect(helloModule.hello()).to.equal("hello");
  });
});
