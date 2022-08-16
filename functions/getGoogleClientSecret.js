
const handler = async function (event, context) {
  const { identity, user } = context.clientContext;

  try {
  console.log(user)
  const data = { value: process.env.GOOGLE_CLIENT_SECRET }
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