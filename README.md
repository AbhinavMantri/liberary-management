# liberary-management

## there are two separate application

### Backend Application(Node JS)

which will run at localhost:8080

folder: api
main module: Book, User

User model will have 2 types of roles USER, ADMIN

All the rest stuff are divided into these two folders (book / user).
- routes
- controllers
- services
- model

note: for this project I am using Sequelize ORM.

### Frontend Application(Angular JS)

three different views we have 
- Login
- Book List
- Book Detail

Both user and admin will have action distribution. 

Admin - CRUD operations on Book, View all reviews for a book
User - View List of Book, Book Detail

Pending on UI side:
- user can mark the book as read.
- user can add review. 




