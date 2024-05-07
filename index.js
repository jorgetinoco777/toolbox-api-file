const express = require("express");
const routes = require("./src/routes");
const middleware = require('./src/middleware');
const app = express();

// Add functions definition
routes(app);

 // Middleware's
 middleware(app);


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
