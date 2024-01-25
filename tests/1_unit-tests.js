const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    
    suite('Function convertHandler.getNum(input)', function() {
      
        test('Whole number input', function(done) {
          let input = '32L';
          assert.equal(convertHandler.getNum(input),32);
          done();  
        });

        test('Decimal Input', function(done) {
          let input = '20.367L'; 
          assert.equal(convertHandler.getNum(input),20.367); 
          done();
        });

        test('Fractional Input', function(done) {
          let input = '15/30L';
          assert.equal(convertHandler.getNum(input),15/30);
          done();
        });

        test('Fractional Input with a decimal', function(done) {
          let input = '15.37/30L';
          assert.equal(convertHandler.getNum(input),0.51233);
          done();
        });

    });
});