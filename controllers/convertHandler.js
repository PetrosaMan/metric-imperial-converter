function isFraction(result) {
  let numStr = result.split("/");
  if (numStr.length > 2) {
    return false;
  }
  return numStr;
}

function ConvertHandler() {
  this.getNum = function (input) {
    // Extract numerical part from input (including fractions)
    let result = input.match(/[.\d\/]+/g) || "1";

    // Check if the result is a valid fraction
    let nums = isFraction(result[0]);
    if (nums === false) {
      return "invalid number";
    }

    let num1, num2;

    if (nums.length === 1) {
      // Handle decimals or integers
      num1 = parseFloat(nums[0]);
      num2 = 1; // Default denominator to 1
    } else {
      // Handle fractions
      num1 = parseFloat(nums[0]);
      num2 = parseFloat(nums[1]);

      if (isNaN(num1) || isNaN(num2) || num2 === 0) {
        return "invalid number";
      }
    }
    // Calculate the result
    let resultValue = num1 / num2;
    return resultValue; // returns a number
  };

  this.getUnit = function (input) {
    let unit = input.match(/[a-zA-Z]+/g);
    let result;
    if (unit === null) {
      return "invalid unit: null";
    }
    unit[0] = unit[0].toLowerCase();
    switch (unit[0]) {
      case "gal":
        result = "gal";
        break;
      case "l":
        result = "L";
        break;
      case "lbs":
        result = "lbs";
        break;
      case "kg":
        result = "kg";
        break;
      case "mi":
        result = "mi";
        break;
      case "km":
        result = "km";
        break;
      default:
        result = "invalid unit";
    }
    return result;
  };

  this.getReturnUnit = function (initUnit) {
    let unit = initUnit.toLowerCase();
    let result;
    switch (unit) {
      case "gal":
        result = "L";
        break;
      case "l":
        result = "gal";
        break;
      case "lbs":
        result = "kg";
        break;
      case "kg":
        result = "lbs";
        break;
      case "mi":
        result = "km";
        break;
      case "km":
        result = "mi";
        break;
      default:
        result = "invalid unit";
    }
    return result;
  };

  this.spellOutUnit = function (unit) {
    let result;
    unit = unit.toLowerCase();

    switch (unit) {
      case "gal":
        result = "gallons";
        break;
      case "l":
        result = "litres";
        break;
      case "lbs":
        result = "pounds";
        break;
      case "kg":
        result = "kilograms";
        break;
      case "mi":
        result = "miles";
        break;
      case "km":
        result = "kilometers";
        break;
      default:
        result = "invalid unit";
    }
    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    let unit = initUnit.toLowerCase();
    let result;

    switch (unit) {
      case "gal":
        result = initNum * galToL;
        break;
      case "l":
        result = initNum / galToL;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "km":
        result = initNum / miToKm;
        break;
      default:
        return "invalid number";
    }
    result = parseFloat(result.toFixed(5));
    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result = {
      initNum: initNum,
      initUnit: initUnit,
      returnNum: returnNum,
      returnUnit: returnUnit,
      string: `${initNum} ${this.spellOutUnit(
        initUnit,
      )} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`,
    };
    return result;
  };
}

module.exports = ConvertHandler;
