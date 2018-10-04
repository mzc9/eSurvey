const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./services/passport");
require("./models/User");

mongoose.connect(keys.mongoURI);

const app = express();

require("./routes/authRoutes")(app);
//console.developers.google.com

//dynamic port for dynamic port binding linked to Heroku
const PORT = process.env.PORT || 5000; //for dev env.
app.listen(PORT);
