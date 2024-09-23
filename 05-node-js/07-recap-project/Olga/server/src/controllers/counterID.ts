export function counterID(start = 0, step = 1) {
  let callNumber = start;
  return function () {
    var returnValue = callNumber;
    callNumber += step;
    return returnValue.toString();
  };
}

 export let generatorID = counterID();