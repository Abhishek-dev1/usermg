# User Management API

This project provides a RESTful API for managing user data. It includes endpoints for creating users, fetching random users, checking user existence, retrieving users above a certain age, and listing user names.

## Endpoints

### 1. Create User
- **Endpoint:** `POST /api/createUser`
- **Description:** Creates a new user with the provided details.
- **Request Body:**
  ```json
  {
      "name": "John Doe",
      "DOB": "1990-01-01",
      "age": 32,
      "location": "City",
      "email": "john@example.com"
  }
- **Response:** Returns the details of the created user.

### 2. Get Random User
- **Endpoint:** `GET /api/randomuser`
- **Description:** Fetches and returns data of a single random user.
- **Response:** Returns the details of a randomly selected user from the database.


### 3. Check User Existence
- **Endpoint:** `GET /api/email/:email`
- **Description:** Checks if a user with the provided email exists.
- **Request Parameters:**
  - `email`: Email address of the user to check.
- **Response:** Returns `true` if the user exists, otherwise `false`.

### 4. Users Above Age
- **Endpoint:** `GET /api/age/:age`
- **Description:** Returns all users whose age is greater than or equal to the specified age.
- **Request Parameters:**
  - `age`: Minimum age for filtering users.
- **Response:** Returns an array of user objects matching the criteria.

### 5. List User Names
- **Endpoint:** `GET /api/usernames`
- **Description:** Returns an array of the names of all users.
- **Response:** Returns an array of user names.
