INSERT INTO problems (name, instructions, unit_test_file, difficulty)
VALUES($1, $2, $3, $4)

RETURNING id;