use user;

	CREATE TABLE Users (
		id INT PRIMARY KEY NOT NULL,
		email VARCHAR(255) UNIQUE NOT NULL,
		username VARCHAR(100) UNIQUE NOT NULL,
		password_hash VARCHAR(255) NOT NULL
	);

CREATE TABLE Recipes (
    Recipes_id INT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    prep_time INT CHECK (prep_time >= 0),
    cook_time INT CHECK (cook_time >= 0),
    difficulty_level VARCHAR(50),
    servings INT CHECK (servings > 0),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    author_id BIGINT REFERENCES Users(id) ON DELETE CASCADE
);

CREATE TABLE Ingredients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    unit VARCHAR(50) NOT NULL,
    category VARCHAR(100)
);

CREATE TABLE RecipeIngredients (
    recipe_id INT REFERENCES Recipes(id) ON DELETE CASCADE,
    ingredient_id INT REFERENCES Ingredients(id) ON DELETE CASCADE,
    quantity DECIMAL(10,2) CHECK (quantity > 0),
    PRIMARY KEY (recipe_id, ingredient_id)
);

CREATE TABLE RecipeRatings (
    RecipeRatings_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users(id) ON DELETE CASCADE,
    recipe_id INT REFERENCES Recipes(id) ON DELETE CASCADE,
    rating INT CHECK (rating BETWEEN 1 AND 5),
    UNIQUE (user_id, recipe_id)
);


INSERT INTO Users (email, username, password_hash) VALUES
('alice@example.com', 'alice', 'hashedpassword1'),
('bob@example.com', 'bob', 'hashedpassword2');

INSERT INTO Recipes (title, description, prep_time, cook_time, difficulty_level, servings, author_id) VALUES
('Spaghetti Carbonara', 'Classic Italian pasta dish', 15, 20, 'Medium', 4, 1),
('Chocolate Cake', 'Rich and moist chocolate cake', 20, 30, 'Hard', 6, 2);

INSERT INTO Ingredients (name, unit, category) VALUES
('Egg', 'pieces', 'Dairy'),
('Flour', 'grams', 'Baking'),
('Pasta', 'grams', 'Grains'),
('Sugar', 'grams', 'Sweeteners'),
('Cocoa Powder', 'grams', 'Baking');

INSERT INTO RecipeIngredients (recipe_id, ingredient_id, quantity) VALUES
(1, 1, 2), -- 2 eggs for Carbonara
(1, 3, 200), -- 200g pasta
(2, 2, 250), -- 250g flour for Cake
(2, 4, 100), -- 100g sugar
(2, 5, 50); -- 50g cocoa powder

INSERT INTO RecipeRatings (user_id, recipe_id, rating) VALUES
(1, 2, 5),
(2, 1, 4);

-- Add a new recipe with ingredients
INSERT INTO Recipes (title, description, prep_time, cook_time, difficulty_level, servings, author_id) 
VALUES ('Pancakes', 'Fluffy homemade pancakes', 10, 15, 'Easy', 4, 1) ;


INSERT INTO Users (email, username, password_hash) VALUES ('charlie@example.com', 'charlie', 'hashedpassword3');


INSERT INTO RecipeRatings (user_id, recipe_id, rating) VALUES (2, 3, 5);

INSERT INTO users (email, username, password_hash) VALUES
('alice@example.com', 'alice', 'hashedpassword1'),
('bob@example.com', 'bob', 'hashedpassword2'),
('charlie@example.com', 'charlie', 'hashedpassword3'),
('dave@example.com', 'dave', 'hashedpassword4'),
('eve@example.com', 'eve', 'hashedpassword5'),
('frank@example.com', 'frank', 'hashedpassword6'),
('grace@example.com', 'grace', 'hashedpassword7'),
('heidi@example.com', 'heidi', 'hashedpassword8'),
('ivan@example.com', 'ivan', 'hashedpassword9'),
('judy@example.com', 'judy', 'hashedpassword10');

SELECT * FROM Users;
