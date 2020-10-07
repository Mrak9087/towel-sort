
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if (arguments.length === 0 || matrix.length === 0 || typeof matrix === "undefined") {
    return result;
  }
  for(let i = 0; i < matrix.length; i++){
    let subArray = matrix[i];
    if ((i+1) % 2 === 0) {
      subArray.reverse();
    }
    for (let item of subArray){
      result.push(item);
    }
  }
  return result;
}


