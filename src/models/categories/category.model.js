import { DataTypes } from "sequelize";
import dbConnection from "../../db/database";

const Category = dbConnection.define("categories", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Category.sync({force: true})

export default Category;
