import mysql from "mysql2";
import "dotenv/config";

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USRENAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_TABLE_NAME,
});

export default connection;
