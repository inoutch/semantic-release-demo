const expect = require('chai').expect;
const helloModule = require('../index');

describe('helloworld', () => {
  it('return helloworld123456789a', () => {
    expect(helloModule.helloworld()).to.equal("hello world");
  });
  it('return goodnight', () => {
    expect(helloModule.goodnight()).to.equal("good night");
  });
});
