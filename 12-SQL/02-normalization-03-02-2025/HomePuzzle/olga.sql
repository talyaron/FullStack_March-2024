CREATE DATABASE university;
USE university;

CREATE TABLE students (
    student_id INT PRIMARY KEY NOT NULL,
    student_name VARCHAR(50) NOT NULL
);

CREATE TABLE instructors (
    instructor_id INT PRIMARY KEY NOT NULL,
    instructor_name VARCHAR(50) NOT NULL
);

CREATE TABLE courses (
    course_id VARCHAR(10) PRIMARY KEY NOT NULL,
    course_name VARCHAR(50) NOT NULL
);

CREATE TABLE registration (
    registration_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    student_id INT NOT NULL,
    course_id VARCHAR(10) NOT NULL,
    instructor_id INT NOT NULL,
    grade INT NOT NULL,
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (course_id) REFERENCES courses(course_id),
    FOREIGN KEY (instructor_id) REFERENCES instructors(instructor_id)
);

INSERT INTO students (student_id, student_name) VALUES
(1, 'John Smith'),
(2, 'Mary Johnson'),
(3, 'Peter Chen'),
(4, 'Sarah Williams');

INSERT INTO instructors (instructor_id, instructor_name) VALUES
(101, 'Dr. Brown'),
(102, 'Dr. Wilson'),
(103, 'Prof. Davis');

INSERT INTO courses (course_id, course_name) VALUES
('MATH101', 'Introduction to Calculus'),
('ENG101', 'English Composition'),
('HIST101', 'World History');

INSERT INTO registration (student_id, course_id, instructor_id, grade) VALUES
(1, 'MATH101', 101, 85),
(1, 'ENG101', 102, 78),
(2, 'MATH101', 101, 92),
(2, 'HIST101', 103, 88),
(3, 'ENG101', 102, 95),
(3, 'MATH101', 101, 89),
(4, 'HIST101', 103, 91),
(4, 'ENG101', 102, 84);

CREATE VIEW registration_view AS
SELECT
    s.student_name,
    c.course_name,
    i.instructor_name,
    r.grade
FROM registration r
JOIN students s ON r.student_id = s.student_id
JOIN courses c ON r.course_id = c.course_id
JOIN instructors i ON r.instructor_id = i.instructor_id;

SELECT * FROM registration_view;