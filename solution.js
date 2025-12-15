function parseValue(value, base){
  let result = 0n;
  let b = BigInt(base);
  for(let ch of value.toLowerCase()){
    let digit;
    if(ch >= '0' && ch <= '9'){
      digit = BigInt(ch.charCodeAt(0) - 48);
    }
    else{
      digit = BigInt(ch.charCodeAt(0) - 87);
    }
    result = result * b + digit;
  }
  return result;
}

function lagrangeConstant(points){
  let result = 0n;
  for(let i = 0; i < points.length; i++){
    let xi = points[i].x;
    let yi = points[i].y;
    let numerator = 1n;
    let denominator = 1n;
    for(let j = 0; j < points.length; j++){
      if(i !== j){
        let xj = points[j].x;
        numerator *= -xj;
        denominator *= (xi - xj);
      }
    }
    result += yi * (numerator / denominator);
  }
  return result;
}

function solve(input){
  const k = input.keys.k;
  let points = [];
  for(let key in input){
    if(key !== "keys"){
      let x = BigInt(key);
      let base = parseInt(input[key].base);
      let value = input[key].value;
      let y = parseValue(value, base);
      points.push({x, y});
    }
  }
  points = points.slice(0, k);
  return lagrangeConstant(points);
}

const input1 = require("./input1.json")
const input2 = require("./input2.json")

const result1 = solve(input1);
const result2 = solve(input2);

console.log("Output for Testcase - 1:", result1.toString());
console.log("Output for TestCase - 2:", result2.toString());