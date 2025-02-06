create database recipies;
use recipies;

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL unique,
    email VARCHAR(100) UNIQUE,
    password VARCHAR(8)
);

CREATE TABLE Recipes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) not null
);


CREATE TABLE Ingredients (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) not null,
    quantity INT UNSIGNED NOT NULL CHECK (quantity > 0)
    
);

CREATE TABLE ratings (
    id INT PRIMARY KEY AUTO_INCREMENT,
    rating INT UNSIGNED NOT NULL CHECK (rating >= 1 and rating <= 5)
);

ALTER TABLE recipes ADD description VARCHAR(100);
ALTER TABLE recipes ADD prep_time int;
ALTER TABLE recipes ADD cook_time int;
ALTER TABLE recipes ADD Difficulty VARCHAR(100);
ALTER TABLE recipes ADD no_servings int;
ALTER TABLE recipes ADD created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE recipes ADD author VARCHAR(100);

ALTER TABLE Ingredients ADD unit_of_measurment VARCHAR(50);

CREATE TABLE Recipe_Ingredients (
    id INT PRIMARY KEY AUTO_INCREMENT,
    recipe_id INT,
    ingredient_id INT,
    quantity INT UNSIGNED NOT NULL CHECK (quantity > 0),
    unit_of_measurement VARCHAR(50),
    FOREIGN KEY (recipe_id) REFERENCES Recipes(id) ON DELETE CASCADE,
    FOREIGN KEY (ingredient_id) REFERENCES Ingredients(id) ON DELETE CASCADE
);
CREATE TABLE Recipe_Ingredients (
    id INT PRIMARY KEY AUTO_INCREMENT,
    recipe_id INT,
    ingredient_id INT,
    quantity INT UNSIGNED NOT NULL CHECK (quantity > 0),
    unit_of_measurement VARCHAR(50),
    FOREIGN KEY (recipe_id) REFERENCES Recipes(id) ON DELETE CASCADE,
    FOREIGN KEY (ingredient_id) REFERENCES Ingredients(id) ON DELETE CASCADE
);


INSERT INTO users (username, email, password) VALUES
('chef_mario', 'mario@example.com', 'pass1234'),
('baker_sue', 'sue@example.com', 'sweet987'),
('homecook_joe', 'joe@example.com', 'easycook'),
('grill_master', 'grill@example.com', 'bbq2024');

INSERT INTO Recipes (title, description, prep_time, cook_time, Difficulty, no_servings, author) VALUES
('Spaghetti Carbonara', 'Classic Italian pasta with eggs and pancetta', 10, 15, 'Medium', 2, 'chef_mario'),
('Chocolate Cake', 'Rich and moist chocolate cake', 20, 30, 'Easy', 8, 'baker_sue'),
('Grilled Chicken', 'Juicy grilled chicken with herbs', 15, 25, 'Medium', 4, 'grill_master');

INSERT INTO Ingredients (title, quantity, unit_of_measurment) VALUES
('Spaghetti', 200, 'grams'),
('Eggs', 2, 'pieces'),
('Pancetta', 100, 'grams'),
('Parmesan Cheese', 50, 'grams'),
('Flour', 250, 'grams'),
('Sugar', 200, 'grams'),
('Cocoa Powder', 50, 'grams'),
('Chicken Breast', 2, 'pieces'),
('Olive Oil', 2, 'tablespoons'),
('Garlic', 1, 'clove');

INSERT INTO ratings (rating) VALUES
(5),
(4),
(3),
(5),
(2);


INSERT INTO Recipes (id, title, description, prep_time, cook_time, Difficulty, no_servings, author) VALUES
(1, 'Spaghetti Carbonara', 'Classic Italian pasta dish', 10, 15, 'Medium', 2, 'Chef Mario'),
(2, 'Chocolate Cake', 'Rich and moist chocolate cake', 20, 35, 'Hard', 6, 'Chef Luigi'),
(3, 'Grilled Chicken', 'Simple and healthy grilled chicken', 5, 20, 'Easy', 1, 'Chef Peach');

INSERT INTO Recipe_Ingredients (recipe_id, ingredient_id, quantity, unit_of_measurement) VALUES
(1, 1, 200, 'grams'),  -- Spaghetti Carbonara
(1, 2, 2, 'pieces'),
(1, 3, 100, 'grams'),
(1, 4, 50, 'grams'),

(2, 5, 250, 'grams'),  -- Chocolate Cake
(2, 6, 200, 'grams'),
(2, 7, 50, 'grams'),

(3, 8, 2, 'pieces'),   -- Grilled Chicken
(3, 9, 2, 'tablespoons'),
(3, 10, 1, 'clove');

SELECT r.title AS Recipe, i.title AS Ingredient, ri.quantity, ri.unit_of_measurement
FROM Recipe_Ingredients ri
JOIN Recipes r ON ri.recipe_id = r.id
JOIN Ingredients i ON ri.ingredient_id = i.id
WHERE r.title = 'Spaghetti Carbonara';


CREATE TABLE Tags (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE Recipe_Tags (
    recipe_id INT,
    tag_id INT,
    PRIMARY KEY (recipe_id, tag_id),
    FOREIGN KEY (recipe_id) REFERENCES Recipes(id) ON DELETE CASCADE,
    FOREIGN KEY (tag_id) REFERENCES Tags(id) ON DELETE CASCADE
);

INSERT INTO Tags (name) VALUES
('Vegetarian'),
('Dessert'),
('Quick Meals'),
('Healthy'),
('Gluten-Free');


-- Example: Associating 'Spaghetti Carbonara' with 'Quick Meals' and 'Healthy'
INSERT INTO Recipe_Tags (recipe_id, tag_id)
VALUES
(1, (SELECT id FROM Tags WHERE name = 'Quick Meals')),
(1, (SELECT id FROM Tags WHERE name = 'Healthy'));

-- Example: Associating 'Chocolate Cake' with 'Dessert'
INSERT INTO Recipe_Tags (recipe_id, tag_id)
VALUES
(2, (SELECT id FROM Tags WHERE name = 'Dessert'));


SELECT id, title FROM Recipes WHERE title = 'Spaghetti Carbonara';

SELECT id, name FROM Tags WHERE name IN ('Quick Meals', 'Healthy');

SELECT r.title AS Recipe, t.name AS Tag
FROM Recipes r
JOIN Recipe_Tags rt ON r.id = rt.recipe_id
JOIN Tags t ON rt.tag_id = t.id
WHERE r.title = 'Spaghetti Carbonara';

select * from recipes;