const response = require("../data/banner_response1.json");

exports.handler = async (event, context) => {
  if (event.httpMethod === "POST") {
    // Return a static response to the POST request
    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } else {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }
};
