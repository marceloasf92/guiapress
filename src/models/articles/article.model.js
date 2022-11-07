import { DataTypes } from "sequelize";
import dbConnection from "../../db/database";
import categoryModel from "../categories/category.model"

const Article = dbConnection.define("articles", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
  }
});

categoryModel.hasMany(Article) //1-N
Article.belongsTo(categoryModel) //1-1

// Article.sync({force: true})

export default Article;
