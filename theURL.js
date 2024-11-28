function isURLWellFormed(urlString) {
  try {
    const url = new URL(urlString);
    return true;
  } catch (error) {
    return "Error validating URL: ${error.message}";
  }
}

module.exports = { isURLWellFormed };
