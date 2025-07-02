const fetch = require("node-fetch");
const AbortController = require("abort-controller");

exports.handler = async function (event) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);
    let url = null;
    if (
      event.path.endsWith("documentation/") ||
      event.path.endsWith("current_doxygen/")
    ) {
      url = "https://abibuilder.cs.uni-tuebingen.de/archive/openms/Documentation/release/latest/";  
    } else if (event.path.endsWith("develop_doxygen/")) {
      url = "https://abibuilder.cs.uni-tuebingen.de/archive/openms/Documentation/nightly/";
    }
    if (url) {
      const response = await fetch(url, { signal: controller.signal });
      clearTimeout(timeout);
      const body = await response.text();
      return {
        statusCode: 200,
        body,
      };
    }
    else {
      return {
        statusCode: 301,
        headers: {
          location: event.path + "/",
        },
      };
    }
  } catch (err) {
    console.error("AddSlash function error:", err.name, err.message);

    // Check if it's a timeout or network error
    const isTimeoutError = err.name === 'AbortError';

    return {
      statusCode: isTimeoutError ? 504 : 500,
      body: isTimeoutError
        ? "ABIBuilder access timed out or failed"
        : "Internal server error"
    };
  }
};
