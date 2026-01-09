// Don't need this anymore 
// Keep for reference delete later 


// Conifgurations
import dotenv from "dotenv";
dotenv.config({ path: ".env.development" });

const dbConfig = {
  user: process.env.POSTGRES_USER || "postgres",
  host: process.env.POSTGRES_HOST || "localhost",
  database: process.env.POSTGRES_DB || "postgres",
  password: process.env.POSTGRES_PASSWORD || "postgres",
  port: Number(process.env.POSTGRES_PORT) || 5432,
};

const Pool = require("pg").Pool; 

const pool = new Pool(dbConfig);

//Test connection
pool
  .connect()
  .then((client) => {
    console.log("Connected to Postgres database");
    client.release();
  })
  .catch((err) => {
    console.error("Failed to connect to Postgres", err);
  });

module.exports = pool;