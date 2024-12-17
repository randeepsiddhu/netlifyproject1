const bannerResponse1 = require("../data/banner_response1.json");
const bannerResponse2 = require("../data/banner_response2.json");

exports.handler = async (event, context) => {
  const { httpMethod, path } = event;

  // Check for the request's path and method
  if (httpMethod === "POST") {
    if (path === "/api/banner1") {
      return {
        statusCode: 200,
        body: JSON.stringify(bannerResponse1),
      };
    } else if (path === "/api/banner2") {
      return {
        statusCode: 200,
        body: JSON.stringify(bannerResponse2),
      };
    } else {
      return {
        statusCode: 404,
        body: "Endpoint not found",
      };
    }
  } 
  else if (httpMethod === "GET") {
    if (path === "/api/banner1") {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "GET: Banner endpoint" }),
      };
    } else {
      return {
        statusCode: 404,
        body: "GET endpoint not found",
      };
    }
  }
  // Handle other HTTP methods (PUT, DELETE, etc.)
  else {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }
};
