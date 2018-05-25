const expect = require('chai').expect;
const helloModule = require('../index');

describe('helloworld', () => {
  it('return helloworld', () => {
    expect(helloModule.helloworld()).to.equal("helloworld");
  });
});
