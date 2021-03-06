const express = require("express");
const handlebars = require("express-handlebars");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./controllers/burgersController")(app);

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
