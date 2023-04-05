# noteApp

This is a simple note app that performs CRUD operations, create note, read note, update note and delete note. It also has a sign-up and sign-in function to it.

## Language/Database used
1. Nodejs- express
2. Mongo Db
3. Mongoose ODM


## Installation

1. Make a pull request
2. Run

   ```
   npm install
5. Create a .env file. Add the following to it

   ```
   DB_URL='your mongodb databse url'
   PORT='password of your database'   

7. Run the server.js file on your terminal to be able to test endpoints on your postman
   
   ```
   node server.js
8. The endpoints to run are
```
/register to register user
/login to login user
/note to create note
/note/:id to read note, delete note and update note

14. The backend service is also hosted on render so you can test the endpoints using the link below without need to install
```
https://my-note.onrender.com
