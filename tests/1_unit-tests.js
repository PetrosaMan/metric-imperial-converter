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

        test('Double Fractional input', function(done){
          let input = '5/6/7kg';
          assert.equal(convertHandler.getNum(input), 'invalid number');
          done();
        });

        test('Default to 1 for no numerical input', function(done){
          let input = 'kg';
          assert.equal(convertHandler.getNum(input), 1);
          done();
        });

        test('Valid unit input', function(done){
          let input = '28mi';
          assert.equal(convertHandler.getUnit(input), 'mi');
          done();
        });

        test('Invalid input unit', function(done){
          let input = '28miles';
          assert.notEqual(convertHandler.getUnit(input), 'mi');
          done();
        });

        test('Returns correct unit for each valid input unit', function(done){
          let input = '28mi';
          assert.equal(convertHandler.getUnit(input), 'mi');
          done();
        });

        test('Returns correct spelled out unit for a valid input unit', function(done){
          let unit = 'mi';          
          assert.equal(convertHandler.spellOutUnit(unit),'miles');
          done();
        }); 
        
        test('convertHandler should correctly convert units', function(done) {

          done();
        });

    });
});