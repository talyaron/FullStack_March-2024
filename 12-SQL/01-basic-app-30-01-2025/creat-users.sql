CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,  -- For storing bcrypt/argon2 hashes
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    last_login TIMESTAMP NULL,
    is_active BOOLEAN DEFAULT true,
    CONSTRAINT valid_email CHECK (email REGEXP '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- Create index on email for faster lookups
CREATE INDEX idx_users_email ON users(email);

-- Example of inserting a user (DO NOT insert raw passwords like this in practice)
-- In real applications, use bcrypt or another secure hashing algorithm in your application code
INSERT INTO users (email, password_hash) 
VALUES ('test@example.com', 'hashed_password_here');

-- Example of updating password
UPDATE users 
SET password_hash = 'new_hashed_password_here'
WHERE email = 'test@example.com';