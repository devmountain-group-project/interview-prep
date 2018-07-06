update users
set profile_icon = ${url}
where id = ${id}

returning *