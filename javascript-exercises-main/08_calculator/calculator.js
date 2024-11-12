const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  return arr.reduce((sum,current)=>sum+current,0);
};

const multiply = function(arr) {
  return arr.reduce((mult,current)=>mult*current,1);
};

const power = function(a,b) {
  let array=[];

 for(let i=0;i<b;i++){
  array.push(a);
 }

 return array.reduce((pow,current)=>pow*current,1);
};

const factorial = function(a) {
  let arr = [];
	for(let i=1;i<=a;i++){
    arr.push(i);
  }

  return arr.reduce((fact,current)=>fact*current,1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
