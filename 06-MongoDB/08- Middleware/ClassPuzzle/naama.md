so first i will make a page that only admin can access (like editing pets)
and then i will to a route that the page calls,
like '/is-admin' and the ts file of the editPets.html will have a function that calls it and waiting for ok,
if not it will redirect to a page that says "oops you do not have access".
and in that rout i will have a middleware called isadminmid or something
and in isadminmid i will check for admin flag true inside the user, if true then return ok:true, if not return ok:false.
and that's it i think.
