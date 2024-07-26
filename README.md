# Baby CRUD Application

![babyCrud Banner](https://github.com/user-attachments/assets/0b6ff814-1bb6-4e9e-b6de-65f508992ff5)

## Overview

This project is a simple CRUD (Create, Read, Update, Delete) application for managing baby records. It is built using Spring Boot for the back end and can be easily extended with a front-end framework like React, Angular, or Vue. The project demonstrates basic operations like adding, retrieving, updating, and deleting records from a MySQL database.

## Features

- **Create Baby**: Add a new baby record to the database.
- **Read Baby**: Retrieve all baby records or a specific record by ID.
- **Update Baby**: Update the details of an existing baby record.
- **Delete Baby**: Delete a baby record by ID.

## Technologies Used

- **Spring Boot**: For building the back-end REST API.
- **MySQL**: As the relational database management system.
- **Java**: The programming language used.
- **Lombok**: For reducing boilerplate code.
- **React**: For front-end development
- **Bootstrap**: Use for styling front-end
## Getting Started

### Prerequisites

- Java 11 or higher
- Maven
- MySQL
- IntelliJ IDEA or any other preferred IDE

### Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/babyCrud.git
    cd babyCrud
    ```

2. **Configure MySQL Database**:
    - Create a database named `baby_crud`.
    - Update the `application.properties` file with your MySQL credentials:
        ```properties
        spring.datasource.url=jdbc:mysql://localhost:3306/baby_crud
        spring.datasource.username=yourUsername
        spring.datasource.password=yourPassword
        spring.jpa.hibernate.ddl-auto=update
        ```

3. **Run the Application**:
    - You can run the application using your IDE or by executing:
      ```bash
      mvn spring-boot:run
      ```

### Endpoints

- **POST /babies**: Add a new baby record.
- **GET /babies**: Retrieve all baby records.
- **GET /babies/{id}**: Retrieve a baby record by ID.
- **PUT /babies/{id}**: Update an existing baby record.
- **DELETE /babies/{id}**: Delete a baby record by ID.

### Usage

#### Add a Baby

To add a new baby record, send a POST request to `/babies` with a JSON body containing the baby's details.

Example request:
```json
{
    "name": "Kawmla",
    "age": 5
    "owner": "Nilani"
}
```

![image](https://github.com/user-attachments/assets/7a6d03b2-c2d0-4a42-a444-0bdbc9452828)


### Update a Baby

```json
{
    "name": "Kawmla",
    "age": 6
    "owner": "Naduni"
}
````

![image](https://github.com/user-attachments/assets/28c359df-dde1-4487-ad07-da9e78e556ec)
