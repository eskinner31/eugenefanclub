# Bcrypt + Knex

We are going to practice our Postgres skills by creating a database and table in Postgres then connecting to it to a node app using Knex.


# Setting Up The Exercise

1. Using the PSQL command create a database called `eugenefanclub`
1. Connect to the database in PSQL and create a table called `users`
   - Should have email, username, first name, last name, phone and password fields
1. Create a directory called `eugenefanclub`
1. `cd` into the fresh directory and create a `package.json` using the `npm` command
1. Install and save the following modules to your `package.json`: `bcrypt` `knex` and `pg`
1. Use the `touch` command to create a file called `app.js` in your `eugenefanclub` directory.

# Part One: Bcrypt

*Implement all of the following functions and test them in your `app.js` file.*

- *Question:* Bcrypt has synchronous and asynchronous functions, since we are programming with `node`, which do you think we should use?

The code is expected to operate on a `user` object, here is an example of one:

```
var testUser = {
  username: 'xoEugenexoxo',
  firstname: 'Logan',
  lastname: 'King',
  phone: '1234567890',
  email: 'number1eugenefanboy@hotmail.com',
  password: 'notverysecure'
};
```

1. *Create a function called `hashPassword` with parameters `user` and `callback`*
  - The function should use `bcrypt` to hash the `user.password`, upon success it should replace `user.password` with the returned `hash`, then it should invoke the `callback` function passing in the `user` as the argument.


2. *Create a function called `comparePassword` with parameters `password`, `user` and `callback`*
  - The function should use `bcrypt` to compare the `password` to `user.password`, if they are the same it should invoke `callback` passing in `true` and `user` as arguments, otherwise should invoke the callback with `false` and `user` as arguments.

# Bonus: Knex

*Implement all of the following and test them in your `app.js` file.*

- *Question:* Knex uses a `then` and `catch` instead of callbacks, what is this pattern called?

1. Connect to your `Postgres` database using `Knex`:
```
var knexOptions = {
  client: 'pg', //tell knex to use postgres driver module pg
  connection: {
    host: '127.0.0.1', //connect to local db
    port: 5432, //on the default postgres port
    user: 'yourUsernameHere' //put your username here
    debug: false, //when facing issues can be nice to set to true
    database: 'eugenefanclub' //name of database
  }
};
var connection = Knex(knexOptions);
```

2. Create a function called `User` that returns the table we created earlier.
```
return connection('users');
```

3. Create a function called `registerUser` that takes in `user` `callback` as arguments.
  - It should invoke your `hashPassword` function to hash the user password.
  - After successfully hashing a pass it should insert a user into the database using the following format:
```
User().insert({

  })
  .then(function(response){

  })
  .catch(function(err){

  });
```

4. Create a function called `loginUser` that takes in a `user` and `callback` as arguments.
  - It should look up the user in the database by username using the following format:
```
User().where('username', username)
  .then(function(response){

  })
  .catch(function(err){

  });
```
  - Upon successfully getting a user it should use your `comparePassword` function to check if the passwords match.
