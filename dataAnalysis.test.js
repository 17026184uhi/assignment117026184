const dataAnalysis = require("./dataAnalysis.js");
const theData = require("./theData");
const badData = require("./theDataWithErrors");

test("Checks the top level JSON data contains correct child objects", () => {
  const elementNames = [
    "gravity_s",
    "spec_mom_s",
    "mom_s",
    "balances",
    "spec_gravity_s",
    "spec_strat_balan_s",
    "problem_s"
  ];
  expect(dataAnalysis.checkChildObjectKeys(theData, elementNames)).toBe(true);
});

test("Checks the checkChildObjectKeys function handles null JSON objects", () => {
  const elementNames = [
    "gravity_s",
    "spec_mom_s",
    "mom_s",
    "balances",
    "spec_gravity_s",
    "spec_strat_balan_s",
    "problem_s"
  ];
  expect(dataAnalysis.checkChildObjectKeys(null, elementNames)).toBe(
    "JSON object was null"
  );
});

test("Checks the checkChildObjectKeys function handles empty string in array of element names", () => {
  const elementNames = [
    "gravity_s",
    "spec_mom_s",
    "",
    "balances",
    "spec_gravity_s",
    "spec_strat_balan_s",
    "problem_s"
  ];
  expect(dataAnalysis.checkChildObjectKeys(theData, elementNames)).toBe(false);
});

test("Checks the checkChildObjectKeys function handles empty different string in array of element names", () => {
  const elementNames = [
    "gravity_s-this-string-is-different",
    "spec_mom_s",
    "balances",
    "spec_gravity_s",
    "spec_strat_balan_s",
    "problem_s"
  ];
  expect(dataAnalysis.checkChildObjectKeys(theData, elementNames)).toBe(false);
});

test("Checks the checkChildObjectKeys function handles empty extra string in array of element names", () => {
  const elementNames = [
    "gravity_s",
    "spec_mom_s",
    "balances",
    "spec_gravity_s",
    "spec_strat_balan_s",
    "problem_s",
    "this-string-is-extra"
  ];
  expect(dataAnalysis.checkChildObjectKeys(theData, elementNames)).toBe(false);
});

test("Checks the checkChildObjectKeys function handles a number in array of element names", () => {
  const elementNames = [
    5,
    "spec_mom_s",
    "balances",
    "spec_gravity_s",
    "spec_strat_balan_s",
    "problem_s",
    "this-string-is-extra"
  ];
  expect(dataAnalysis.checkChildObjectKeys(theData, elementNames)).toBe(false);
});

test("Checks the checkChildObjectKeys function handles null array of element names", () => {
  const elementNames = null;
  expect(dataAnalysis.checkChildObjectKeys(theData, elementNames)).toBe(
    "Element names was null"
  );
});

test("Checks the correct elements are in the balances top level data", () => {
  const balanceData = theData.balances;
  const elementNames = ["hint", "questions", "idcourse", "orderofquestions"];
  expect(dataAnalysis.checkChildObjectKeys(balanceData, elementNames)).toBe(
    true
  );
});

test("Checks the hint object has the correct children", () => {
  const hintData = theData.balances.hint;
  const elementNames = ["titleColumn", "video", "title"];
  expect(dataAnalysis.checkChildObjectKeys(hintData, elementNames)).toBe(true);
});

test("Checks the titleColumn objects in the balance data have correct linkTitle values", () => {
  const parentData = theData.balances.hint.titleColumn;
  const keyName = "linkTitle";
  const expectedValues = ["hints", "general", "specific"];
  expect(
    dataAnalysis.checkValuesInArray(parentData, keyName, expectedValues)
  ).toBe(true);
});

test("Checks the titleColumn objects in the balance data have correct columnTitle values", () => {
  const parentData = theData.balances.hint.titleColumn;
  const keyName = "columnTitle";
  const expectedValues = ["Hints", "General", "Specific to this problem"];
  expect(
    dataAnalysis.checkValuesInArray(parentData, keyName, expectedValues)
  ).toBe(true);
});

test("Checks the video objects in the balance hint titleColumn data have correct linkTitle values", () => {
  const parentData = theData.balances.hint.titleColumn;
  const keyName = "linkTitle";
  const expectedValues = ["hints", "general", "specific"];
  expect(
    dataAnalysis.checkValuesInArray(parentData, keyName, expectedValues)
  ).toBe(true);
});

test("Checks the video objects in the balance hint titleColumn data have correct columnTitle values", () => {
  const parentData = theData.balances.hint.titleColumn;
  const keyName = "columnTitle";
  const expectedValues = ["Hints", "General", "Specific to this problem"];
  expect(
    dataAnalysis.checkValuesInArray(parentData, keyName, expectedValues)
  ).toBe(true);
});

test("Checks the video objects in the balance hint video data have correct image values", () => {
  const parentData = theData.balances.hint.video;
  const keyName = "image";
  const expectedValues = [
    "problem_s.png",
    "spec_strat_balan_s.png",
    "mom_s.png",
    "spec_mom_s.png",
    "gravity_s.png",
    "spec_gravity_s.png"
  ];
  expect(
    dataAnalysis.checkValuesInArray(parentData, keyName, expectedValues)
  ).toBe(true);
});

test("Checks the video objects in the balance hint video data have correct link values", () => {
  const parentData = theData.balances.hint.video;
  const keyName = "link";
  const expectedValues = [
    "overall",
    "overall",
    "moments",
    "moments",
    "gravity",
    "gravity"
  ];
  expect(
    dataAnalysis.checkValuesInArray(parentData, keyName, expectedValues)
  ).toBe(true);
});

test("Checks the video objects in the balance hint video data have correct title values", () => {
  const parentData = theData.balances.hint.video;
  const keyName = "title";
  const expectedValues = [
    "problem_s",
    "spec_strat_balan_s",
    "mom_s",
    "spec_mom_s",
    "gravity_s",
    "spec_gravity_s"
  ];
  expect(
    dataAnalysis.checkValuesInArray(parentData, keyName, expectedValues)
  ).toBe(true);
});

test("Checks the video objects in the balance hint video data have correct type values", () => {
  const parentData = theData.balances.hint.video;
  const keyName = "type";
  expectedValues = [
    "general",
    "specific",
    "general",
    "specific",
    "general",
    "specific"
  ];
  expect(
    dataAnalysis.checkValuesInArray(parentData, keyName, expectedValues)
  ).toBe(true);
});

test("Checks the video objects in the balance hint title data have correct linkTitle values", () => {
  const parentData = theData.balances.hint.title;
  const keyName = "linkTitle";
  const expectedValues = ["overall", "moments", "gravity"];
  expect(
    dataAnalysis.checkValuesInArray(parentData, keyName, expectedValues)
  ).toBe(true);
});

test("Checks the video objects in the balance hint title data have correct rowTitle values", () => {
  const parentData = theData.balances.hint.title;
  const keyName = "rowTitle";
  const expectedValues = ["Overall solution strategy", "Moments", "Gravity"];
  expect(
    dataAnalysis.checkValuesInArray(parentData, keyName, expectedValues)
  ).toBe(true);
});

test("Checks the video objects in the balance hint title data have correct rowTitle values", () => {
  const parentData = badData.balances.hint.title;
  const keyName = "rowTitle";
  const expectedValues = ["Overall solution strategy", "Moments", "Gravity"];
  expect(
    dataAnalysis.checkValuesInArray(parentData, keyName, expectedValues)
  ).toBe(false);
});

test("Checks the theData.balances.hint.title object has the correct children", () => {
  const parentData = theData.balances.hint.title;
  const expectedValues = ["linkTitle", "rowTitle"];
  expect(
    dataAnalysis.checkChildObjectArrayKeys(parentData, expectedValues)
  ).toBe(true);
});

test("Checks the checkChildObjectArrayKeys function handles the wrong data being supplied", () => {
  const parentData = badData.balances.hint.title;
  const expectedValues = ["linkTitle", "rowTitle"];
  expect(
    dataAnalysis.checkChildObjectArrayKeys(parentData, expectedValues)
  ).toBe(false);
});

test("Checks the checkChildObjectArrayKeys function handles null JSON objects", () => {
  const parentData = null;
  const expectedValues = ["linkTitle", "rowTitle"];
  expect(
    dataAnalysis.checkChildObjectArrayKeys(parentData, expectedValues)
  ).toBe("JSON object was null");
});

test("Checks the checkChildObjectArrayKeys function handles null value arrays", () => {
  const parentData = theData.balances.hint.title;
  const expectedValues = null;
  expect(
    dataAnalysis.checkChildObjectArrayKeys(parentData, expectedValues)
  ).toBe("Element names was null");
});

test("Checks the checkChildObjectArrayKeys function handles empty string in array of element names", () => {
  const parentData = theData.balances.hint.title;
  const expectedValues = ["", "rowTitle"];
  expect(
    dataAnalysis.checkChildObjectArrayKeys(parentData, expectedValues)
  ).toBe(false);
});

test("Checks the title objects in the balance data have correct linkTitle values", () => {
  const parentData = theData.balances.hint.title;
  const keyName = "linkTitle";
  const expectedValues = ["overall", "moments", "gravity"];
  expect(
    dataAnalysis.checkValuesInArray(parentData, keyName, expectedValues)
  ).toBe(true);
});

test("Checks the title objects in the balance data have correct rowTitle values", () => {
  const parentData = theData.balances.hint.title;
  const keyName = "rowTitle";
  const expectedValues = ["Overall solution strategy", "Moments", "Gravity"];
  expect(
    dataAnalysis.checkValuesInArray(parentData, keyName, expectedValues)
  ).toBe(true);
});

test("Checks that the checkValuesInArray function rejects wrong data", () => {
  const parentData = theData.balances.hint.title;
  const keyName = "rowTitle";
  const expectedValues = ["Overall solution strategy", "Moments", ""];
  expect(
    dataAnalysis.checkValuesInArray(parentData, keyName, expectedValues)
  ).toBe(false);
});
