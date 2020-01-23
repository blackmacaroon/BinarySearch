function shifted_binary_search(arr,target){

  // find the point where the shift occurs 
  // iterate through the array, check each value and the next value
  // if we see that next value < than current value then we've found th rotation index
  // we have two sorted arrays we can run two seeparate binary searces on each sorted array
  // find the rotation point
  // run two binary searches

  // number after the shift
  let dropoff = 0
  // pre shift, first and second array
  let firstArray = []
  let secondArray = []

  // find the dropoff and split the array into two sorted arrays
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > arr[i + 1] ){
      dropoff = i + 1
      secondArray = arr.slice(dropoff,arr.length)
      firstArray = arr.slice(0,dropoff)
    }
  }
    // search the first array 
    if (firstArray[0] <= target <= firstArray[firstArray.length - 1]) {
      for (let i = 0; i < firstArray.length; i++) {
        //found it
        if(firstArray[i] === target) {
          return i
        }
      } 
    }
    // can't find it, search second array
    if (secondArray[0] <= target <= secondArray[secondArray.length - 1]) {
      for (let i = 0; i < secondArray.length; i++) {
        // found it, add to length to get the index
        if(secondArray[i] === target) {
          return i + firstArray.length
        }
      }
    }
      // otherwise it's not here
      return -1
}
