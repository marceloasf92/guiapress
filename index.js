import bodyParser from "body-parser";
import express from "express";
import dbConnection from "./src/db/database";
import categoriesController from "./src/controllers/categories/categories.controller";
import articlesController from "./src/controllers/articles/articles.controller"
import _ from "./src/models/categories/category.model"
import _ from "./src/models/articles/article.model"

dbConnection.authenticate().then(() => {
  console.log(`Banco de dados conectado: ${process.env.DB_NAME}`)
}).catch((err) => {
  console.log(err);
})

const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.use("/", categoriesController);
app.use("/", articlesController);

app.get("/", (req, res) => {
  res.render("index");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
