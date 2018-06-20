INSERT INTO problems (name, instructions)
VALUES($1, $2)

RETURNING id;