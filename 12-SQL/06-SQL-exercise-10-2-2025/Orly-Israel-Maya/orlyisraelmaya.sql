create database flights;

create table passengers(
passenger_id BIGINT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(60) NOT NULL,
passport_number VARCHAR(50)
);

create table flight_seats (
seat_id INT PRIMARY KEY AUTO_INCREMENT,
seat_row TINYINT,
seat VARCHAR(1),
flight_id INT NOT NULL,
passenger_id BIGINT NOT NULL
);
ALTER TABLE flight_seats DROP INDEX seat_row;

ALTER TABLE flight_seats 
MODIFY COLUMN passenger_id BIGINT NULL;


create table flight (
flight_id INT PRIMARY KEY AUTO_INCREMENT,
Airplane_id INT NOT NULL,
departure_date DATETIME NOT NULL,
arrival_date DATETIME NOT NULL,
price INT NOT NULL,
origin VARCHAR(3),
destination VARCHAR(3)
);

create table airplane (
airplane_id INT PRIMARY KEY AUTO_INCREMENT,
model VARCHAR(10) NOT NULL,
capacity INT NOT NULL,
flight_number INT NOT NULL
);

ALTER TABLE airplane ADD flight_id INT NOT NULL;

create table seat (
seat_id INT NOT NULL,
seat_number INT NOT NULL,
flight_id INT NOT NULL,
passenger_id BIGINT UNIQUE
);


CREATE TEMPORARY TABLE seat_row (Seat_row INT);

-- Insert row numbers 1 to 42
DELIMITER //
CREATE PROCEDURE fill_rows()
BEGIN
    DECLARE i INT DEFAULT 1;
    WHILE i <= 42 DO
        INSERT INTO row_numbers (row_numbers) VALUES (i);
        SET i = i + 1;
    END WHILE;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS fill_rows;

DELIMITER //
CREATE PROCEDURE fill_rows()
BEGIN
    DECLARE i INT DEFAULT 1;
    WHILE i <= 42 DO
        INSERT INTO seat_row (seat_row) VALUES (i);  -- Change table and column name
        SET i = i + 1;
    END WHILE;
END //
DELIMITER ;

CALL fill_rows();

-- Create a temporary table for seat letters
CREATE TEMPORARY TABLE seat_letters (
    seat CHAR(1)
);



INSERT INTO seat_letters (seat) VALUES 
('a'), ('b'), ('c'), ('d'), ('e'), ('f'), ('g'), ('h');

-- Generate all seat combinations
INSERT INTO flight_seats (flight_id, seat_row, seat, passenger_id)
SELECT 
    456778 AS flight_id,
    r.seat_row,
    s.seat,
    NULL as passenger_id
FROM seat_row r
CROSS JOIN seat_letters s
ORDER BY r.seat_row, s.seat;

TRUNCATE TABLE flight_seats;

SELECT * FROM seat_row;

-- Clean up
DROP PROCEDURE fill_rows;
DROP TEMPORARY TABLE row_numbers;
DROP TEMPORARY TABLE seat_letters;