const theURL = require("./theURL");
const url = "https://i-want-to-study-engingeering.org/q/balances";
const badURLs = [
  "htx:/some-other-url",
  "htx:/some-other url-with-a-space",
  "/some-other-url"
];
const wellFormedURLs = [
  "https://google.com",
  "https://www.google.com/search?q=what+is+the+40th+day+of+the+year%3F&oq=what+is+the+40th+day+of+the+year%3F&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgWGB4yCAgCEAAYFhgeMggIAxAAGBYYHjINCAQQABiGAxiABBiKBTINCAUQABiGAxiABBiKBTINCAYQABiGAxiABBiKBTIKCAcQABiiBBiJBTIKCAgQABiABBiiBNIBCDY3NzdqMWo3qAIAsAIA&sourceid=chrome&ie=UTF-8",
  "https://en.wikipedia.org/wiki/February_9#:~:text=February%209%20is%20the%2040th,(326%20in%20leap%20years)."
];

test("Checks the actual URL is well-formed", () => {
  expect(theURL.isWellFormedURL(url)).toBe(true);
});

test("Checks other well-formed URLs", () => {
  for (const wellFormedURL in wellFormedURLs) {
    expect(theURL.isWellFormedURL(wellFormedURL)).toBe(true);
  }
});
