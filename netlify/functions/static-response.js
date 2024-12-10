exports.handler = async (event, context) => {
  if (event.httpMethod === "POST") {
    // Return a static response to the POST request
    return {
      statusCode: 200,
      body: JSON.stringify({
        status: "success",
        message: "This is a static response from Netlify Functions.222",
      }),
    };
  } else {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }
};
