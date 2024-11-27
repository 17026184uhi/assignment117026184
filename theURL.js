function isWellFormedURL(urlString) {
  try {
    console.log("This is the url as supplied:", urlString);
    const url = new URL(urlString);
    console.log("This is the url's protocol", url.protocol);
    console.log("This is the url's host", url.host);
    console.log("This is the url's hostname", url.hostname);
    console.log("This is the url's pathname", url.pathname);
    if (!url.protocol || url.protocol !== "https") {
      return false;
    }
    return true;
  } catch (error) {
    return false;
  }
}
