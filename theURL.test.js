const theURL = require("./theURL.js");

test("Checks the actual URL is well-formed", () => {
  const url = "https://i-want-to-study-engingeering.org/q/balances";
  expect(theURL.isURLWellFormed(url)).toBe(true);
});

test("Checks if wellFormedURL1 is well-formed", () => {
  const wellFormedURL1 = "https://google.com";
  expect(theURL.isURLWellFormed(wellFormedURL1)).toBe(true);
});

test("Checks if wellFormedURL2 is well-formed", () => {
  const wellFormedURL2 =
    "https://www.google.com/search?q=what+is+the+40th+day+of+the+year%3F&oq=what+is+the+40th+day+of+the+year%3F&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgWGB4yCAgCEAAYFhgeMggIAxAAGBYYHjINCAQQABiGAxiABBiKBTINCAUQABiGAxiABBiKBTINCAYQABiGAxiABBiKBTIKCAcQABiiBBiJBTIKCAgQABiABBiiBNIBCDY3NzdqMWo3qAIAsAIA&sourceid=chrome&ie=UTF-8";
  expect(theURL.isURLWellFormed(wellFormedURL2)).toBe(true);
});

test("Checks if wellFormedURL3 is well-formed", () => {
  const wellFormedURL3 =
    "https://en.wikipedia.org/wiki/February_9#:~:text=February%209%20is%20the%2040th,(326%20in%20leap%20years)";
  expect(theURL.isURLWellFormed(wellFormedURL3)).toBe(true);
});

test("Checks if badURL1 is well-formed", () => {
  const badURL1 = "htx/some-other-url";
  expect(theURL.isURLWellFormed(badURL1)).toBe("Error validating URL");
});

test("Checks if badURL2 is well-formed", () => {
  const badURL2 = "some-other url-with-a-space";
  expect(theURL.isURLWellFormed(badURL2)).toBe("Error validating URL");
});

test("Checks the URL is the correct value", () => {
  const url = "https://i-want-to-study-engingeering.org/q/balances";
  expect(theURL.checkURLValue(url)).toBe(true);
});

test("Checks the wrong URL is NOT the correct value", () => {
  const expectedURL = "https://i-want-to-study-engingeering.org/q/balances";
  const testURL = "https://google.com";
  const msg =
    "The supplied url:" +
    testURL +
    "is different to the expected value:" +
    expectedURL;
  expect(theURL.checkURLValue(testURL)).toBe(msg);
});

test("Checks the URL ends with balances", () => {
  const url = "https://i-want-to-study-engingeering.org/q/balances";
  expect(theURL.checkURLEndsWithBalances(url)).toBe(true);
});

test("Checks the URL ends with balances", () => {
  const url =
    "https://i-want-to-study-engingeering.org/q/balances?value1=0,value2=1";
  expect(theURL.checkURLEndsWithBalances(url)).toBe(true);
});

test("Checks the URL does NOT end with balances", () => {
  const url = "https://i-want-to-study-engingeering.org/q/widgets";
  expect(theURL.checkURLEndsWithBalances(url)).toBe(false);
});

test("Checks the URL does NOT end with balances", () => {
  const url =
    "https://i-want-to-study-engingeering.org/q/widgets?value1=0,value2=1";
  expect(theURL.checkURLEndsWithBalances(url)).toBe(false);
});

test("Checks the URL does NOT end with balances", () => {
  const url =
    "https://i-want-to-study-engingeering.org/q/balances/widgets?value1=0,value2=1";
  expect(theURL.checkURLEndsWithBalances(url)).toBe(false);
});
