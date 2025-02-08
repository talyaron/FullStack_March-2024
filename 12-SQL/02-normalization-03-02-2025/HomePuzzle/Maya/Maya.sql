use foods;
create table students (
	student_id INT PRIMARY KEY AUTO_INCREMENT,
    student_name VARCHAR(50),
    student_email VARCHAR(50)
    );
    
    CREATE TABLE Instructors (
    instructor_id INT PRIMARY KEY AUTO_INCREMENT,
    instructor_name VARCHAR(50),
    instructor_email VARCHAR(50)
);

CREATE TABLE Courses (
    course_id INT PRIMARY KEY AUTO_INCREMENT,
    course_code VARCHAR(10) UNIQUE,
    course_name VARCHAR(100),
    instructor_id INT,
    FOREIGN KEY (instructor_id) REFERENCES Instructors(instructor_id)
);

create table Registration(
    student_id INT,
    course_id  INT,
    grade DECIMAL(5,2),
    PRIMARY KEY(student_id, course_id),
    FOREIGN KEY(student_id) REFERENCES Students(student_id),
    FOREIGN KEY(course_id ) REFERENCES Courses(course_id )
);

    
    INSERT INTO students (student_id, student_name) VALUES
(1, 'John Smith'),
(2, 'Mary Johnson'),
(3, 'Peter Chen'),
(4, 'Sarah Williams');

INSERT INTO Instructors (instructor_name, instructor_email) VALUES
('Dr. Alan Turing', 'alan.turing@example.com'),
('Dr. Barbara Liskov', 'barbara.liskov@example.com'),
('Dr. Charles Babbage', 'charles.babbage@example.com'),
('Dr. Donald Knuth', 'donald.knuth@example.com'),

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