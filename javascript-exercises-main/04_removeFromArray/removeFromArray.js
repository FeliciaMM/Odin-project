const removeFromArray = function(arr,...args) {
 newArr=[];

 arr.forEach(item => {
    
    if (!args.includes(item)) {
        newArr.push(item);
      }
    });
    // and return that array
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
