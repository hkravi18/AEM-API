# API RESPONSE DOCS

# API Routes

### Auth

- **POST /api/auth/signup**
  - Content-Type: _application/json_
  - Description: To Signup the user.

- **POST /api/auth/login**
  - Content-Type: _application/json_
  - Description: To login the user.

  On successful signup/login, the server will respond with a 200 status code and a JSON object containing the user's information.
  ```javascript 
  {
    ok: true,
    message: "success_message",
    data: {
        user: {
            username: "username",
            email: "email",
            toke: "token"
        }
    }
  }
  ```
  
  If the login is unsuccessful, the server will respond with a 400 Bad Request status code and a JSON object containing an error message. 
  ```javascript 
  {
    ok: false,
    error: "error_message",
    data: {}
  }
  ```


### Transaction

- **GET /api/transactions**
  - Content-Type: _application/json_
  - Description: To retrieve all transactions created in a given range of time.

   On successful retrieval of transactions, the server will respond with a 200 status code and a JSON object containing the transactions.
  ```javascript 
  {
    "ok": true,
    "message": "Transactions fetched successfully",
    "data": {
        "transactions": [
            {
                "id": "fe300535-a153-4552-809b-d9559c1d93f9",
                "type": "EXPENSE",
                "amount": 400,
                "description": "Clothes",
                "userId": "04989b3f-0c58-4cfb-8bb0-4416ba83f223",
                "createdAt": "2024-03-10T17:43:10.506Z",
                "updatedAt": "2024-03-10T17:43:10.506Z"
            }
        ]
    }
  }
  ```
  
  If the request is unsuccessful, the server will respond with a 400 Bad Request status code and a JSON object containing an error message. 
  ```javascript 
  {
    ok: false,
    error: "error_message",
    data: {}
  }
  ```

- **GET /api/transactions/summary**
  - Content-Type: _application/json_
  - Description: To retrieve statistics about transactions created in a given range of time.

  On successful retrieval of transactions summary, the server will respond with a 200 status code and a JSON object containing the stats about transactions.
  ```javascript 
  {
    "ok": true,
    "message": "Transactions Summary fetched successfully",
    "data": {
        "stats": {
            "totalIncome": 2000,
            "totalExpense": 600,
            "saving": 1400
        }
    }
  }
  ```
  
  If the request is unsuccessful, the server will respond with a 400 Bad Request status code and a JSON object containing an error message. 
  ```javascript 
  {
    ok: false,
    error: "error_message",
    data: {}
  }
  ```

- **POST /api/transactions**
  - Content-Type: _application/json_
  - Description: To create a new transaction.

  On successful creation of the transaction, the server will respond with a 200 status code and a JSON object containing the transaction.
  ```javascript 
  {
    "ok": true,
    "message": "Transactions created successfully",
    "data": {
        "createdTransaction": {
            "id": "1dc8d6f9-fc14-4479-b751-423eba2d03b5",
            "type": "INCOME",
            "amount": 200,
            "description": "PS5",
            "userId": "04989b3f-0c58-4cfb-8bb0-4416ba83f223",
            "createdAt": "2024-03-10T18:21:52.236Z",
            "updatedAt": "2024-03-10T18:21:52.236Z"
        }
    }
  }
  ```
  
  If the request is unsuccessful, the server will respond with a 400 Bad Request status code and a JSON object containing an error message. 
  ```javascript 
  {
    ok: false,
    error: "error_message",
    data: {}
  }
  ```


- **DELETE /api/transactions/:id**
  - Content-Type: _application/json_
  - Description: To delete a particular transaction.
    
  On successful creation of the transaction, the server will respond with a 200 status code and a JSON object containing the transaction.
  ```javascript 
  {
    "ok": true,
    "message": "Transactions deleted successfully",
    "data": {
        "deletedTransaction": {
            "id": "1dc8d6f9-fc14-4479-b751-423eba2d03b5",
            "type": "INCOME",
            "amount": 200,
            "description": "PS5",
            "userId": "04989b3f-0c58-4cfb-8bb0-4416ba83f223",
            "createdAt": "2024-03-10T18:21:52.236Z",
            "updatedAt": "2024-03-10T18:21:52.236Z"
        }
    }
  }
  ```
  
  If the request is unsuccessful, the server will respond with a 400 Bad Request status code and a JSON object containing an error message. 
  ```javascript 
  {
    ok: false,
    error: "error_message",
    data: {}
  }
  ```