function isURLWellFormed(urlString) {
  try {
    const url = new URL(urlString);
    return true;
  } catch (error) {
    return "Error validating URL";
  }
}

module.exports = { isURLWellFormed };
