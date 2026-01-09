// import dotenv from "dotenv";

// dotenv.config(); // works locally; in Docker, env vars are already set

const { Pool } = require("pg");

// Use DATABASE_URL cuz running in Docker
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// test connection on startup
pool
  .connect()
  .then((client) => {
    console.log("Emission-service connected to Postgres");
    client.release();
  })
  .catch((err) => {
    console.error("Emission-service failed to connect to Postgres", err);
  });

module.exports = pool;