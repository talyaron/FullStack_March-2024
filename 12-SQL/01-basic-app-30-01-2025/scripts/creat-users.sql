create database store_mrc24;

use store_mrc24;

-- create users table --
CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE users;

ALTER TABLE users 
CHANGE COLUMN id user_id INT AUTO_INCREMENT;
