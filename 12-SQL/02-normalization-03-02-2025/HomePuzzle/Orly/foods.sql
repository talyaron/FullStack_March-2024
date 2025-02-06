create database foods;

use foods;

create table students (
	student_id INT PRIMARY KEY auto_increment not null,
    student_name varchar(50) not null
    );

CREATE TABLE food (
    food_id INT PRIMARY KEY,
    favorite_food VARCHAR(100) NOT NULL,
    food_color VARCHAR(50) NOT NULL
);

Alter Table food CHANGE COLUMN food_name favorite_food VARCHAR(100) NOT NULL;

desc food;

    CREATE TABLE vitamins (
    vitamin_id INT PRIMARY KEY,
    vitamin_present VARCHAR(50) NOT NULL,
    vitamin_source VARCHAR(100) NOT NULL,
    vitamin_benefits VARCHAR(255) NOT NULL
);


CREATE TABLE favorite_foods (
    favorite_food_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT NOT NULL,
    food_id INT NOT NULL,
    vitamin_id INT NOT NULL,
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (food_id) REFERENCES food(food_id),
    FOREIGN KEY (vitamin_id) REFERENCES vitamins(vitamin_id)
);

CREATE TABLE vitamins_in_food (
    food_id INT,
    vitamin_id INT,
    PRIMARY KEY (food_id, vitamin_id),
    FOREIGN KEY (food_id) REFERENCES food(food_id),
    FOREIGN KEY (vitamin_id) REFERENCES vitamins(vitamin_id)
);

INSERT INTO students (student_id, student_name) VALUES
(1, 'John Smith'),
(2, 'Mary Johnson'),
(3, 'Peter Chen'),
(4, 'Sarah Lee'),
(5, 'Emma Davis');

INSERT INTO vitamins (vitamin_id, vitamin_present, vitamin_source, vitamin_benefits) VALUES
(1, 'Vitamin A', 'Beta Carotene', 'Good for eyes'),
(2, 'Vitamin K', 'Phylloquinone', 'Blood clotting'),
(3, 'Vitamin C', 'Ascorbic Acid', 'Immune system');

INSERT INTO food (food_id, favorite_food, food_color) VALUES
(1, 'Carrot', 'Orange'),
(2, 'Spinach', 'Green'),
(3, 'Blueberry', 'Blue');

INSERT INTO favorite_foods (student_id, food_id, vitamin_id) VALUES
(1, 1, 1), -- John Smith - Carrot - Vitamin A
(1, 2, 2), -- John Smith - Spinach - Vitamin K
(2, 1, 1), -- Mary Johnson - Carrot - Vitamin A
(2, 3, 3), -- Mary Johnson - Blueberry - Vitamin C
(3, 2, 2), -- Peter Chen - Spinach - Vitamin K
(3, 3, 3), -- Peter Chen - Blueberry - Vitamin C
(4, 3, 3), -- Sarah Lee - Blueberry - Vitamin C
(5, 1, 1); -- Emma Davis - Carrot - Vitamin A

INSERT INTO vitamins_in_food (food_id, vitamin_id) VALUES
(1, 1), -- Carrot - Vitamin A
(2, 2), -- Spinach - Vitamin K
(3, 3); -- Blueberry - Vitamin C