// src/services/emissions-service.js
const pool = require("./db");

/**
 * Add a new emission record for a user
 * @param {number} userId
 * @param {Object} emission { emission_date, emission_type, amount }
 * @returns {Object} inserted row
 */
async function addEmission(userId, emission) {
  const query = `
    INSERT INTO emissions (
        user_id,   
        activity_name,
        activity_type, 
        carbon_footprint,
        activity_date
    )
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
  `;
  const values = [
    userId,
    emission.activity_name, 
    emission.activity_type, // VARCHAR
    emission.carbon_footprint,     // NUMERIC(10,3)
    emission.activity_date, // DATE
  ];
  const result = await pool.query(query, values);
  return result.rows[0];
}

/**
 * Get today emissions for a user
 * @param {number} userId
 * @returns {Array} array of emission rows
 */
async function getTodayUserEmissions(userId, date) {
  const query = `
    SELECT activity_name, activity_type, carbon_footprint, activity_date
    FROM emissions
    WHERE user_id = $1 AND activity_date = $2
  `;
  const result = await pool.query(query, [userId, date]);
  return result.rows;
}


/**
 * Get all emissions for a user
 * @param {number} userId
 * @returns {Array} array of emission rows
 */
async function getAnnualEmissions(userId, year) {

  const startOfYear = `${year}-01-01`; // "2025-01-01"
  const endOfYear = `${year}-12-31`;   // "2025-12-31"

  const query = `
    SELECT activity_name, activity_type, carbon_footprint, activity_date
    FROM emissions
    WHERE user_id = $1 
    AND activity_date BETWEEN $2 AND $3
  `;
  const result = await pool.query(query, [userId, startOfYear, endOfYear]);
  return result.rows;
}

/**
 * Delete a single emission by ID
 * @param {number} emissionId
 */
async function deleteEmission(emissionId) {
  const query = `
    DELETE FROM emissions
    WHERE id = $1
  `;
  await pool.query(query, [emissionId]);
}

module.exports = {
  addEmission,
  getTodayUserEmissions,
  getAnnualEmissions,
  deleteEmission
};