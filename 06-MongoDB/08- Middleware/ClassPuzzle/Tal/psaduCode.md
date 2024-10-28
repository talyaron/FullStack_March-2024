# IsAdmin middleware

1) get the userId from Cookies
2) check in the DB. If the user do not exist, return 403 status code with a message "You are not an admin"
3) If the user exists, set req.user to be the user. Then check if the user is an admin or not
4) If the user is an admin, call the next function
5) If the user is not an admin, return 403 status code with a message "You are not an admin"
