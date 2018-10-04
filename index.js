const express = require("express");
require("./services/passport");

const app = express();

require("./routes/authRoutes")(app);
//console.developers.google.com

//dynamic port for dynamic port binding linked to Heroku
const PORT = process.env.PORT || 5000; //for dev env.
app.listen(PORT);
