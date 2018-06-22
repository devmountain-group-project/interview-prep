INSERT INTO problems (name, instructions, unit_test_file)
VALUES($1, $2, $3)

RETURNING id;