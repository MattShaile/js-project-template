import HelloWorld from './HelloWorld';
import assert from 'assert';

describe('HelloWorld', function () {
  describe('#hello()', function () {
    it('should return the string "Hello World"', function () {
      const hw = new HelloWorld();
      const output = hw.hello();

      assert.equal(output, "Hello World!");
    });
  });
});
