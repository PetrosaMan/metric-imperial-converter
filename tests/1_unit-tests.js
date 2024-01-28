const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    
    suite('Function convertHandler.getNum(input)', function() {
        // #1
        test('Whole number input', function(done) {
          let input = '32L';
          assert.equal(convertHandler.getNum(input),32);
          done();  
        });

        // #2
        test('Decimal Input', function(done) {
          let input = '20.367L'; 
          assert.equal(convertHandler.getNum(input),20.367); 
          done();
        });

        // #3
        test('Fractional Input', function(done) {
          let input = '15/30L';
          assert.equal(convertHandler.getNum(input),15/30);
          done();
        });

        // #4
        test('Fractional Input with a decimal', function(done) {
          let input = '15.37/30L';
          assert.equal(convertHandler.getNum(input),0.51233);
          done();
        });

        // #5
        test('Double Fractional input', function(done){
          let input = '5/6/7kg';
          assert.equal(convertHandler.getNum(input), 'invalid number');
          done();
        });

        // #6  
        test('Default to 1 for no numerical input', function(done){
          let input = 'kg';
          assert.equal(convertHandler.getNum(input), 1);
          done();
        });

        // #7
        test('For Each Valid Input Unit', function(done){          
          let initUnits = ['gal', 'L', 'mi', 'km', 'lbs', 'kg' ];
          let expectedUnits = ['L', 'gal', 'km', 'mi', 'kg', 'lbs'];
          initUnits.forEach( function(initUnit, index){
            assert.equal(convertHandler.getReturnUnit(initUnit), expectedUnits[index]);   
          });          
          done();
        });

        // #8
        test('Invalid input unit', function(done){
          let input = '28miles';
          assert.equal(convertHandler.getUnit(input), 'invalid unit');
          done();
        });

        // #9 convertHandler should return the correct return
        // unit for each valid input unit
        test('Returns correct unit for each valid input unit', function(done){
          let testValue = '28';
          let initUnits = ['gal', 'L', 'mi', 'km', 'lbs', 'kg' ];
          initUnits.forEach( function(initUnit) {
            assert.equal(convertHandler.getUnit(testValue + initUnit), initUnit);
          });
          done();
        });

        // #10
        test('Returns correct spelled out unit for a valid input unit', function(done){
          // arrays required for inout units and for expected
          // spelled out units
          //let unit = 'mi';
          let units = ['gal', 'L', 'mi', 'km', 'lbs', 'kg' ];
          let expectedUnits = ['gallons','litres','miles','kilometers','pounds','kilograms']; 
          units.forEach( function(unit, index) {         
              assert.equal(convertHandler.spellOutUnit(unit), expectedUnits[index]);
          });
          done();
        });

        // #11
        test('convertHandler should correctly convert valid input value', function(done) {
          // arrays required for input and ouput units
          let initNum = 32; 
          let initUnit = 'mi';         
          assert.equal(convertHandler.convert(initNum, initUnit),51.49888);
          done();
        });  

    });
});