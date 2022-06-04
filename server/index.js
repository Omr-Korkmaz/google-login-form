require("dotenv").config();
const express = require("express");
const cors = require("cors");
require("./passport");
const passport = require("passport");
const authRoute = require("./routes/auth");
const session = require("express-session");
const app = express();

const port = 4000;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(session({ secret: "Just Test", cookie: { maxAge: 60000 } })); //maxAge => milisecond

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoute);

app.listen(port, () => {
  console.log(`${port} port is listening`);
});
