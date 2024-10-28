1. update the user schema to have a "isAdmin" boolean.
2. open an "middleware" folder under controllers folder.
3. create a file named "isAdmin.ts"  inside the middleware folder.
4. make a code in the file which takes an userId from a cookie searches using "findOne" the user with this and checks if he has a boolean value "true" which represents an Admin. if true the function should call for the intended function  (next function) , if not true , will send status code 403 and an error "this page is restricted"
5. update the routes files to add the middleware  to the routes which require admin access.

