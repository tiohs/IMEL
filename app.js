const path = require("path");
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "img")));

const usersRoutes = require("./routes/users.routes");

app.use(usersRoutes);

app.listen(3000, () => {
  console.log("on!");
});
