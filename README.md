# API for Personal Finance management  

## Project Description

This is an API project with backend build with ExpressJS/NodeJS and database on Postgresql to manage personal finance transactions for users.


## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Routes](#api-routes)
- [API Response](#api-response)
- [Backend](#backend)
- [Database](#database)


## Features

- User can registration and authentication securely 
- User can create and get useful statistics about their personal transactions
- Uses JWT for authentication 

>*DATA SANITATION*: Since Prisma is used for this project, data sanitation is already managed by Prisma psql queries

>*DATA RETRIEVAL*: UserId and CreatedAt fields are used in index which make date wise range querying transactions more more efficient


## Technologies Used

- Express.js
- Postgresql
- Node.js
- Prisma

## Prerequisites

- Node.js [Installation Guide](https://nodejs.org/)

## Installation

1. Clone the repository:

git clone <REPO_URL> .

2. Navigate to the api directory:

cd api

3. Install dependencies for the server:

npm install 

4. Set up environment variables (a .env file is needed for this expressJS server, instructions provided in `Configuration`).

5. Start the server:

In root directory:
- To start the server using Nodemon **npm run dev**
- To start the server without Nodemon **npm start** 

## Configuration

- Create a `.env` file in the root directory of the project with the content mentioned in the **.env.example** file:
- Fill the environment variables values 

FOR EXAMPLE:

```.env
PORT=4000
DATABASE_URL=<POSTGRESQL_DATABASE_URL>  
SECRET_KEY=any_secret_key
```

>To setup the database locally, DATABASE_URL connection string will be like this   
**postgresql://username:password@localhost/dbname**

## Usage 
Signup is done with username (unique), email id and password  
Login is done with email (unique) and password


## API Routes

### Auth

- **POST /api/auth/signup**
  - Content-Type: _application/json_
  - Description: To Signup the user.

- **POST /api/auth/login**
  - Content-Type: _application/json_
  - Description: To login the user.

  

### transaction

- **GET /api/transactions**
  - Content-Type: _application/json_
  - Description: To retrieve all transactions created in a given range of time.

- **GET /api/transactions/summary**
  - Content-Type: _application/json_
  - Description: To retrieve statistics about transactions created in a given range of time.

- **POST /api/transactions**
  - Content-Type: _application/json_
  - Description: To create a new transaction.

- **DELETE /api/transactions**
  - Content-Type: _application/json_
  - Description: To delete a particular transaction.
    

## Backend 
- Router are created for authentication.  
- Controllers are created for handling routes of these routers. 
- Tests are made for helper functions using jest 
- Bcrypt is used to encrypt the passwords before saving to the database.  
- JWT is used to authenticate the user  



## Database
Posgtress is used as a primary database for this project along with Prisma as an ORM.  