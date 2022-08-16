
const handler = async function (event, context) {
  // CORS
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type"
      }
    };
  }

  const { identity, user } = context.clientContext;
  try {
    if (user === null) {
      return {
        statusCode: 401
      };
    }
    const data = { value: process.env.GOOGLE_CLIENT_SECRET };
    return {
      statusCode: 200,
      body: JSON.stringify({ identity, user, msg: data.value }),
    }
  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: JSON.stringify({ msg: error.message }),
    }
  }
};

export { handler };