CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR,
    password VARCHAR,
    admin BOOLEAN,
    auth_id VARCHAR
);

CREATE TABLE problems (
    id SERIAL PRIMARY KEY,
    difficulty VARCHAR,
    company VARCHAR,
    problem_file TEXT,
    unit_test_file VARCHAR
);

CREATE TABLE users_problems_solved (
    id SERIAL PRIMARY KEY,
    problem_id INTEGER REFERENCES problems(id),
    user_id INTEGER REFERENCES users(id),
    time TIME,
    points INTEGER 
);

CREATE TABLE submissions (
    id SERIAL PRIMARY KEY,
    difficulty VARCHAR,
    company VARCHAR,
    problem_file TEXT,
    unit_test_file VARCHAR
);