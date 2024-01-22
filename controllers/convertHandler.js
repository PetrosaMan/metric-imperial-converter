function isFraction(result) { 
  //console.log('**Result: ',result); 
  let numStr = result.split('/');  
  if (numStr.length > 2) {
      return false;
  }
  return numStr;
}

function ConvertHandler() {  

  this.getNum = function(input) {     
    let result = input.match(/[.\d\/]+/g)|| ["1"]; 
    //console.log(result);   
    let nums = isFraction(result[0]);
    if (nums === false) {
      return  "invalid number";['1'];
    }
    let num1 = nums[0];
    let num2 = nums[1] || ["1"]; 
    result = (parseFloat(num1) / parseFloat(num2)).toFixed(5);
    if (isNaN(num1) || isNaN(num2)) {
      return "invalid number";
    }
    return result;     
  };
  
  this.getUnit = function(input) {        
    let unit = input.match(/[a-zA-Z]+/g);    
    if (unit === null) {      
      return 'invalid unit';
    }    
    unit[0]= unit[0].toLowerCase(); 
    //console.log('unit[0] ', unit[0]) 
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
        result = 'gallon(s)';
        break;
      case 'l':
        result = 'litre(s)';
        break;
      case 'lbs':
        result = 'pound(s)';
        break;
      case 'kg':
        result = 'kilogram(s)';
        break;
      case 'mi':
        result = 'mile(s)';
        break;
      case 'km':
        result = 'kilometer(s)';
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
    const convertedValue = parseFloat(result).toFixed(5);  
    return convertedValue; 
      
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result = initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' + returnNum + this.spellOutUnit(returnUnit);
    return result;
  };
  
}

module.exports = ConvertHandler;
