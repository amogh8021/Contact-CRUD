# Contact Management System

A full-stack contact management application built with Spring Boot backend and React frontend. This application allows users to perform CRUD (Create, Read, Update, Delete) operations on contact information stored in a database.

## Features

- Add new contacts with details like name, email, phone number
- View list of all contacts
- RESTful API backend

## Tech Stack

### Backend
- Java 17
- Spring Boot 3.x
- Spring Data JPA
- MySQL Database
- Maven for dependency management
- Lombok for reducing boilerplate code -- not working in my IDE

### Frontend
- React 18
- React Router v6 for navigation
- Axios for API calls
- Vite as build tool



## Setup Instructions

### Backend Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/contact-management.git
cd contact-management/backend
```

2. Configure MySQL database in `application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/contacts_db
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
```

3. Run the Spring Boot application:
```bash
./mvnw spring-boot:run
```

The backend server will start on `http://localhost:8080`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd ../frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend application will start on `http://localhost:5173`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/contacts` | Get all contacts |
| GET | `/api/contacts/{id}` | Get contact by ID |
| POST | `/api/contacts` | Create new contact |
| PUT | `/api/contacts/{id}` | Update existing contact |
| DELETE | `/api/contacts/{id}` | Delete contact |

## Database Schema

```sql
CREATE TABLE contacts (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    phone VARCHAR(15),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email your-amoghdev8021@example.com or open an issue in the GitHub repository.
