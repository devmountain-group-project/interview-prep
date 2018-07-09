Insert into users_problems_solved (problem_id, user_id, points, completed_solution)
values (${problem_id}, ${id}, ${difficulty}, ${solution})
returning *
