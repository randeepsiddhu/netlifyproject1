const bannerResponse1 = require("../data/banner_response1.json");
const bannerResponse2 = require("../data/banner_response2.json");

exports.handler = async (event, context) => {
  const { httpMethod, path, body, queryStringParameters } = event;

  console.log(`Request Method: ${httpMethod}, Path: ${path}`);

  // Handle GET Requests
  if (httpMethod === "GET") {
    if (path.endsWith("/api/banner1")) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: "GET request to /api/banner1",
          data: bannerResponse1,
        }),
      };
    } else if (path.endsWith("/api/banner2")) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: "GET request to /api/banner2",
          data: bannerResponse2,
        }),
      };
    } else {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: "GET Endpoint not found" }),
      };
    }
  }

  // Handle POST Requests
  if (httpMethod === "POST") {
    let payload;
    try {
      payload = JSON.parse(body);
    } catch (error) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid JSON payload" }),
      };
    }

    if (path.endsWith("/api/banner1")) {
      return {
        statusCode: 200,
        body: JSON.stringify(bannerResponse1)
      };
    } else if (path.endsWith("/api/banner2")) {
      return {
        statusCode: 200,
        body: JSON.stringify(bannerResponse2)
      };
    } else {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: "POST Endpoint not found" }),
      };
    }
  }

  // Default response for unsupported HTTP methods
  return {
    statusCode: 405,
    body: JSON.stringify({ error: "Method Not Allowed" }),
  };
};
