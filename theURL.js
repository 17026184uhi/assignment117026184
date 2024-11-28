function isURLWellFormed(urlString) {
  try {
    const url = new URL(urlString);
    return true;
  } catch (error) {
    return "Error validating URL";
  }
}

function checkURLValue(urlString) {
  const url = "https://i-want-to-study-engingeering.org/q/balances";
  if (urlString === url) {
    return true;
  } else {
    const msg =
      "The supplied url:" +
      urlString +
      "is different to the expected value:" +
      url;
    return msg;
  }
}

function checkURLEndsWithBalances(urlString) {
  const balances = "balances";
  if (urlString.indexOf("?") != -1) {
    var parts = urlString.split("?");
    urlString = parts[0];
  }
  parts = urlString.split("/");
  const noOfParts = parts.length;
  if (parts[noOfParts - 1] === balances) {
    return true;
  } else {
    return false;
  }
}

module.exports = { isURLWellFormed, checkURLValue, checkURLEndsWithBalances };
