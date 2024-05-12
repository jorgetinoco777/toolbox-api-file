const express = require("express");
const routes = require("./src/routes");
const middleware = require("./src/middleware");
const { PORT } = require("./src/environment/environment");

const app = express();

// Add functions definition
routes(app);

// Middleware's
middleware(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
