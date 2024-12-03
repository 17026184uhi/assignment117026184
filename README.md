# assignment117026184

Web Applications Development Assignment 1

This assignment uses a test-driven development-based approach for checking the JSON data for the site i-want-to-study-engineering.org. In particular the data for their balances question and whether the site can render the page given the data being tested.

Firstly, though, the URL is checked using the same approach.

To this aim, jest is used to run tests against javascript functions that check aspects of that JSON data.

# index.js

This is provided as a standard default load point for a website. Currently, this does nothing more than load the data and display the JSON data object. It can be run with the command:
node ./index

# Run the tests

To perform the tests, do the following:

1. Ensure you environment has node installed, and that it came with npm, and that git is installed. This has been tested with node version 23.0.0 and npm version 10.9.0 and git version 2.47.0.windows.2
2. Create an empty folder to put the program into and navigate to it.
3. Copy the link for the repository ( https://github.com/17026184uhi/assignment117026184.git ).
4. Type the command "git clone " then paste the link before hitting enter.
5. Run the test suite using the command:
   npm run test

That command will run all the tests. They should all pass. If any fail, useful output will be provided to help identify the problem. In such an event, check that all the files from this repository are present and if so, some debugging may be required.

# Checking the URL

# theUrl.js

The correct URL for the balances page is <https://i-want-to-study-engineering.org/q/balances> and the functions created to check this are stored in the <theUrl.js> file.
Three functions have been created to check this, which are:

# 1. isWellFormedURL

    This function uses the Javascript URL constructor to verify a valid URL. If an error is thrown, then it was not a valid URL; otherwise, it returns true.
    Several tests of this are done, including with the URL for the balances page in question and other URLs, both simple and complex, well-formed and otherwise, which help ensure that the function does what is expected of it.

# 2. checkURLValue

    This function has a hard-coded copy of the expected URL.  This is not normally good practice as such things may change unexpectedly and without necessarily warning those maintaining this code but in this specific case where the URL is specified directly and only for such an assignment, the hard-coded value is contained within the function.
    The function then compares, using an exact compare (which checks for the data type as well as the value) the supplied URL against this hard-coded URL.

# 3. checkURLEndsWithBalances

    A URL may contain other elements such as a query.  Hence it is possible that such additional information may be added to the end of the expected URL.  It is assumed that any such additional information will follow a question mark.  The function therefore checks for a question mark and splits the URL in two therat that point if present, and from there treats the preceeding string as the URL.
    The URL (or that before any question mark) is then checked to see if it ends with the word <balances>; if it does not then it is not for this question.  This has been written in this way as a separate function to that for checking the entire URL as, should the entire URL check no longer be valid following some future and unknown change, this function may still be valid.

# theUrl.test.js

This file reads in the theUrl.js file, then creates 2 constants - the hard-coded URL mentioned above and an array of badUrls. This includes URLs that are different to the expected URL, malformed URLs and ones with invalid characters, such as a space (which would normally need to be encoded as %20 in a URL).
Where a generic bad URL is needed for a test, a for-in loop uses each of the entries in this array in turn for that test.

Each test written begins with test(phrase) where phrase is a description of what is being done and what is expected, so that should the test fail, it can be seen what was anticipated and debugging can be done more easily.

Tests for each of the following have been written:
"Checks the URL is well-formed"
"Checks the URL is NOT well-formed"
"Checks the URL is the correct value"
"Checks the URL is NOT the correct value"
"Checks the URL ends with balances"
"Checks if that a bad URL that doesn't end with balances returns false"

All of the tests perform a test as per their description. This calls the function being tested and passes (in most cases) a value. It also specifies the expected result, such as true or false, or in the case of checking the well-formedness of the URL, it checks if an error has been thrown. If that function can't instantiate a javascript URL object from the supplied URL, for example, then it will throw an error, and this is expected for passing a bad URL and not when passing a valid URL.  
If a function returns true when false was expected, or false when true was expected then that test fails. If the actual result matches the expected result then the test passes.

# theData.js

This file contains a copy of the JSON data used for the web applicaton. It puts this into a constant called data and then exports it. It is used to access the data to run the tests on that data.

# theDataWithErrors.js

This file contains another copy of the JSON data used for the web applicaton but this time with some deliberate errors to check what happens when the data is such that the web application would not have the data it neesd. It puts this into a constant called badData and then exports it. It is used to access the badData to run the tests on that (bad) data.

# dataAnalysis.js

This file contains the following functions:

# 1. findUniqiueElementsIn2Arrays(array1, array2)

This function is used to help analyse 2 arrays to see what the difference(s) are. It then outputs those to the console. It is called only when differences are found - for the purposes of this assignment that is anticipated to be when a test is run where there should be a difference. It is to help debug any such issues if they happen unexpectedly.

# 2. checkChildObjectArrayKeys(parentObj, keysArray)

This is called when a parent object has an array of child objects and each child object should have the same keys. If the keys are as expected, it returns true, false otherwise. It also checks for null values for the JSON object and the values array, returning a message to that effect.

# 3. checkChildObjectKeys(parentObj, keysArray)

Very similar on the face of it to checkChildObjectArrayKeys. The difference is that checkChildObjectArrayKeys checks the child array of JSON objects for their keys, this is not for an array of child objects, just some key names and a single object.

# 4. listObjectNames(jsonData)

This is not called directly by the tests but by other functions and list the names of objects in the supplied JSON object

# 5. checkValuesInArray(parentData, keyName, expectedValues)

Looks at the array of child JSON objects and compares their values for a given key name to the given array of expected values.

# exports

The module then exports those functions called directly by the test file, namely:

checkChildObjectKeys, checkValuesInArray & checkChildObjectArrayKeys
