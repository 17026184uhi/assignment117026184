const theData = require("./theData");

function findUniqiueElementsIn2Arrays(array1, array2) {
  for (val of array1) {
    if (!array2.includes(val)) {
      console.log(
        "The array",
        array2,
        "does not include the value:",
        "<",
        val,
        ">"
      );
    }
  }
}

// This is for a case where a parent object has an array of child objects
// and each child object should have the same keys.
function checkChildObjectArrayKeys(parentObj, keysArray) {
  if (!parentObj) {
    return "JSON object was null";
  }
  if (!keysArray) {
    return "Element names was null";
  }
  retVal = true;
  for (childObj of parentObj) {
    const childObjectKeys = listObjectNames(childObj);
    if (JSON.stringify(childObjectKeys) != JSON.stringify(keysArray)) {
      findUniqiueElementsIn2Arrays(childObjectKeys, keysArray);
      findUniqiueElementsIn2Arrays(keysArray, childObjectKeys);
      retVal = false;
    }
  }
  return retVal;
}

// This is similar to where the parent has child keys but not an array of objects, each with keys
function checkChildObjectKeys(parentObj, keysArray) {
  if (!parentObj) {
    return "JSON object was null";
  }
  if (!keysArray) {
    return "Element names was null";
  }
  const childObjectKeys = listObjectNames(parentObj);
  if (JSON.stringify(childObjectKeys) == JSON.stringify(keysArray)) {
    return true;
  } else {
    return false;
  }
}

function listObjectNames(jsonData) {
  const objectNames = Object.keys(jsonData);
  return objectNames;
}

// Compares a given array of values to that in a specified part of data
function checkValuesInArray(parentData, keyName, expectedValues) {
  const childObjectValues = parentData.map((childObj) => {
    return childObj[keyName];
  });
  //   console.log(childObjectValues);
  if (JSON.stringify(childObjectValues) == JSON.stringify(expectedValues)) {
    return true;
  } else {
    findUniqiueElementsIn2Arrays(childObjectValues, expectedValues);
    findUniqiueElementsIn2Arrays(expectedValues, childObjectValues);
    return false;
  }
}

module.exports = {
  checkChildObjectKeys,
  checkValuesInArray,
  checkChildObjectArrayKeys
};
