# [Project Name]

Form
## Features

* User Registration & Login
* JWT-based Authentication
* Protected API Endpoints (e.g., `/api/posts`)
* Password Hashing (BCrypt)
* PostgreSQL Database Integration

## Technologies

* **Backend:** Java (Spring Boot, Spring Security, Spring Data JPA)
* **Authentication:** JWT (jjwt)
* **Database:** PostgreSQL
## Setup & Run

1.  **Clone:** `git clone https://github.com/nosheenfatima816/intellij-form.git`
2.  **DB Setup:**
3.  **Configure `src/main/resources/application.properties`:**
    ```
4.  **Build:** 
5.  **Run:** 

## API Endpoints

* **POST /api/auth/register:** Register a new user (`{"username": "", "password": ""}`)
* **POST /api/auth/login:** Log in and get JWT (`{"username": "", "password": ""}`)
* **GET /api/posts:** Access protected resource (requires `Authorization: Bearer <JWT>`)
* **POST /api/posts:** Create protected resource (requires `Authorization: Bearer <JWT>`)

## Testing

Use Postman

1.  Register a user.
2.  Log in to get the JWT.
3.  Use the JWT in the `Authorization: Bearer <JWT>`
