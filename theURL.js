function isURLWellFormed(urlString) {
  try {
    const urlRegex =
      /^(https?|ftp):\/\/(([a-z\d]([a-z\d-]*[a-z\d])?\.)+[a-z]{2,}|localhost)(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i;
    if (!urlRegex.test(urlString)) {
      return "URL format is invalid.";
    }
    const url = new URL(urlString);
    return true;
  } catch (error) {
    return "Error validating URL: ${error.message}";
  }
}

module.exports = { isURLWellFormed };
