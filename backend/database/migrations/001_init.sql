
-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Create emission data table for individual activity
CREATE TABLE IF NOT EXISTS emissions (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,

    activity_name VARCHAR(50) NOT NULL,
    activity_type VARCHAR(50) NOT NULL,
    carbon_footprint NUMERIC(10, 3) NOT NULL,  -- amount is recorded in kg co2e
    activity_date DATE NOT NULL,

    created_at TIMESTAMP DEFAULT NOW()
);

-- Create total emission data table for total daily emission
-- CREATE TABLE IF NOT EXISTS total_emissions (
--     id SERIAL PRIMARY KEY,
--     user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
--     amount NUMERIC(10, 3) NOT NULL,
--     created_at TIMESTAMP DEFAULT NOW()
-- );

-- Goals table
-- CREATE TABLE IF NOT EXISTS goals (
--     id SERIAL PRIMARY KEY,
--     user_id INT REFERENCES users(id) ON DELETE CASCADE,
--     monthly_goal INT NOT NULL,
--     progress INT DEFAULT 0,
--     created_at TIMESTAMP DEFAULT NOW()
-- );

-- Mock user for development only (remove once auth is implemented)
INSERT INTO users (username, email, password_hash)
VALUES ('mock_user', 'mock@example.com', 'mock_password')
ON CONFLICT DO NOTHING;

