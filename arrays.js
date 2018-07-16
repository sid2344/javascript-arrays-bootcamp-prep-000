var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(chocolateBars, element){
  ["foo",...chocolateBars]
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, element){
  chocolateBars.push("foo");
}