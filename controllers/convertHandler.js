function isFraction(result) {
  let numStr = result.split('/');
  if (numStr.length > 2) {
    return false;
  }
  return numStr;
}

function ConvertHandler() {
  this.getNum = function (input) {
    // Extract numerical part from input (including fractions)
    let result = input.match(/[.\d\/]+/g) || ["1"];

    // Check if the result is a valid fraction
    let nums = isFraction(result[0]);
    if (nums === false) {
      return "invalid number";
    }

    // Parse numerator and denominator
    let num1 = parseFloat(nums[0]);
    let num2 = parseFloat(nums[1] || "1");

    // Check if parsing is successful
    if (isNaN(num1) || isNaN(num2)) {
      return "invalid number";
    }
    
    // Calculate the result
    result = num1 / num2;
    return result;
  };
//}
  
  this.getUnit = function(input) {        
    let unit = input.match(/[a-zA-Z]+/g);    
    if (unit === null) {      
      return 'invalid unit';
    }    
    unit[0]= unit[0].toLowerCase();      
    switch(unit[0]) {
        case 'gal':
          return 'gal';          
        case 'l':
          return 'L'          
        case 'lbs':
          return 'lbs';          
        case 'kg':
          return 'kg';	          
        case 'mi':
          return 'mi';         
        case 'km':
          return 'km'
        default:
           return 'invalid unit';     
    }
  }  
  
  this.getReturnUnit = function(initUnit) {    
    let unit = initUnit.toLowerCase();       
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
         return 'invalid unit';         
    }          
    return result;
  };  

  this.spellOutUnit = function(unit) {
    let result;
    unit = unit.toLowerCase();

    switch (unit) {
      case 'gal': 
        result = 'gallons';
        break;
      case 'l':
        result = 'litres';
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'kg':
        result = 'kilograms';
        break;
      case 'mi':
        result = 'miles';
        break;
      case 'km':
        result = 'kilometers';
        break;
      default:
        result = 'invalid unit'
    }    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;    

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
         return 'invalid number';            
    }       
    return result;       
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) { 
      let result = {
      initNum: parseFloat(initNum),
      initUnit: initUnit,
      returnNum: parseFloat(returnNum).toFixed(5),
      returnUnit: returnUnit,
      string: `${initNum} ${this.spellOutUnit(initUnit)} converts to ${parseFloat(returnNum).toFixed(5)} ${this.spellOutUnit(returnUnit)}`
    };
    return result
  };
  
}

module.exports = ConvertHandler;
