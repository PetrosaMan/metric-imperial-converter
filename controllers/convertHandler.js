
let inputRegex = /[a-z]+|[^a-z]+/gi;

function ConvertHandler() {  
  
  this.getNum = function(input) { 
    let result;
    result = input.match(inputRegex)[0];  
    return result; 
  };
  
  this.getUnit = function(input) {
    let result;
    result = input.match(inputRegex)[1];    
    return result;   
  };
  
  this.getReturnUnit = function(initUnit) {    
    const unit = initUnit.toLowerCase();    
    console.log(initUnit);
    let result;
    switch(unit) {
    case 'gal':
        result = 'L';
        break;
      case 'l':
        result = 'gal'
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'kg':
        result = 'lbs';	
        break;
      case 'mi':
        result = 'km';
        break;
      case 'km':
        result = 'mi';
        break;
      default:
         result =  'invalid unit';         
    }          
    return result;
  };  

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    console.log(initNum);
    //if (initNum === '') {
    //  initNum = '1';
    //}
    console.log("### ", initUnit, typeof initUnit);

    let unit = initUnit.toLowerCase();    
    let result;

    switch(unit) {
      case 'gal':
        result = initNum * galToL;
        break;
      case 'l':
        result = initNum / galToL;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;	
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
      default:
         result = 'invalid number';            
    }     
    const roundedNum = result.toFixed(5);  
    return roundedNum; 
      
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result = initNum + initUnit + ' converts to ' + returnNum + returnUnit;
    return result;
  };
  
}

module.exports = ConvertHandler;
