use foods;
create table students (
	student_id INT PRIMARY KEY auto_increment not null,
    student_name varchar(50) not null
    );
    
    create table foods (
    food_id INT PRIMARY KEY auto_increment not null,
    food_name varchar(40) not null,
    food_color varchar(50)
    );
    
    INSERT INTO students (student_id, student_name) VALUES
(1, 'John Smith'),
(2, 'Mary Johnson'),
(3, 'Peter Chen'),
(4, 'Sarah Williams');