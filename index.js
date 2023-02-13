result = require("dotenv").config({ path: `./.env.${process.env.NODE_ENV}` });

if (result.error) {
  throw result.error;
}

console.log(result.parsed);
