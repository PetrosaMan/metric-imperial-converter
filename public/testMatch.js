
function isFraction(result) {      
    let numStr = result.split('/');  
    if (numStr.length > 2) {
        return false;
    }
    return numStr;
  }

let input = "1.2/3mi";
let result = input.match(/[.\d\/]+/g)|| ["1"];
let fraction = isFraction(result[0]);
console.log((fraction[0] / fraction[1]).toFixed(5));


//const match = inputString.match(regex);





//if (match) {
//  const entireMatch = match[0];
//  console.log(entireMatch);
//} else {
//  console.log("No valid number fraction found");
//}




