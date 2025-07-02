const fetch = require("node-fetch");

exports.handler = async function (event) {
  try {
    if (
      event.path.endsWith("documentation/") ||
      event.path.endsWith("current_doxygen/")
    ) {
      // Return the page root
      const response = await fetch(
        "https://abibuilder.cs.uni-tuebingen.de/archive/openms/Documentation/release/latest/",
        { timeout: 5000 } 
      );
      const body = await response.text();
      return {
        statusCode: 200,
        body,
      };
    } else if (event.path.endsWith("develop_doxygen/")) {
      // Return the page root
      const response = await fetch(
        "https://abibuilder.cs.uni-tuebingen.de/archive/openms/Documentation/nightly/",
        { timeout: 5000 }
      );
      const body = await response.text();
      return {
        statusCode: 200,
        body,
      };
    } else {
      return {
        statusCode: 301,
        headers: {
          location: event.path + "/",
        },
      };
    }
  } catch (err) {
    console.error("AddSlash function error:", err.message);

    // Check if it's a timeout or network error
    const isTimeoutError = err.name === 'AbortError' || err.code === 'ETIMEDOUT';

    return {
      statusCode: isTimeoutError ? 504 : 500,
      body: isTimeoutError
        ? "ABIBuilder access timed out or failed"
        : "Internal server error"
    };
  }
};
