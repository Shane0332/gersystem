export default defineEventHandler(async (event) => {
  const user = await readBody(event);

  if (user) {
    console.log("hi_________________________________")
    return {
      statusCode: 200,
      body: 'This is a top secret message from the API'
    };
  } else {
    return {
      statusCode: 400,
      body: 'Must be signed in to read secret message'
    };
  }
});
