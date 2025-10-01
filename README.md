# SoftUni-MovieMagic
JS Back End course - Sep 2025

###TODOs
- [x] something


## Workshop 2 - MongoDB

- [x] add new resources
- [x] install mongoose
- [x] connect to db

### refactor Movies to work with mongoose
- [x] Add Movie model
    - [x] Create Movie schema
    - [x] Create Movie model
- [x] Fix own property handlebars problem with lean method;
- [x] General fix for handlebars own property problem
- [x] Refactor details/create/search 

### Add Cast
- [x] Add cast model
- [x] Create Cast Service
- [x] Create Cast Controller
- [x] Create Cast Page
- [x] Create Cast Functionallity

### Attach Cast to Movie
- [x] Add attach cast button
- [x] Add attach cast page
- [x] Add dynamic data to cast page
- [x] Show cast list in Attach select
- [x] Add reletions between cast and movie
- [x] Add attach cast functionallity

### Show Cast on Details
- [x] Get Movie Casts filtered
- [x] Show casts on details
- [x] Get movie casts using population

- [x] Filter already attached casts

## Workshop 3 - Session and authentication

### Initial setup
- [x] Add resources
- [x] Add packages

### Registration
- [x] Create authController
- [x] Add and render registration page
- [x] Create userService
- [x] Create User model
- [x] Handle registration == Create user in database
- [x] Add password hashing

### Login
- [x] Add login page
- [x] Handle login
    - [x] Validate user
    - [x] Validate password
    - [x] Create token
    - [x] Return token to client

### Logout
- [x] Add logout action
- [x] Clear cookie

### Authorization
- [x] Add auth middleware
- [x] Validate user authentication
- [x] add route guard - isAuth
- [x] add route guard - isGuest

### Dynamic navigation

### Edit movies

### Delete movies

###Bonus
- [ ] automatic login on register
- [ ] invalidate token on logout
- [ ] refresh token