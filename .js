//https://www.codewars.com/kata/training-js-number-4-basic-data-types-array/train/javascript
function getLength(arr){
  
  return arr.length
}
function getFirst(arr){

  return arr[0]
}
function getLast(arr){
  
  return arr[arr.length-1]
}
function pushElement(arr){
  arr.push(1)
  
  return arr;
}
function popElement(arr){
  arr.pop()
  
  return arr
}

//https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript?fbclid=IwAR3o1GORcRVvcvwUoDTJbyIiKiR6EEWPGhNi4BkegWRNVV6jSFNfwt47NWk

class SmallestIntegerFinder {
  findSmallestInt(args) {   
    return Math.min(...args)
  }
}

