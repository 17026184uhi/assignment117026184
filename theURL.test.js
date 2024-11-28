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
