// `request-promise` is a CommonJS module, but we can import it
// via the default export thanks to Node's interop support.
import request from "request-promise";

const options = {
  method: "GET",
  uri: "https://icanhazdadjoke.com/",
  headers: {
    Accept: "application/json",
    "User-Agent": "Writing JavaScript action GitHub Skills exercise.",
  },
  json: true,
};

async function getJoke() {
  const res = await request(options);
  return res.joke;
}

// export as default for ES module consumers
export default getJoke;