import { Sequelize } from "sequelize"; 
require('dotenv').config()

const dbName = process.env.DB_NAME; 
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;
const port = process.env.DB_PORT;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: "mysql", 
  host: dbHost, 
  port: port,
  logging: false
});

export default sequelize; 