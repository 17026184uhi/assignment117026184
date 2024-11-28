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

module.exports = { isURLWellFormed, checkURLValue };
