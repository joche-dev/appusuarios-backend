
# API RESTful de Usuarios
La API RESTful de usuarios con operaciones CRUD (Crear, Leer, Actualizar, Eliminar) con conexión a una base de datos en PostgreSQL.

[🔗 appusuarios-backend.onrender.com/users](https://appusuarios-backend.onrender.com/users)

**Stack:** NodeJs, ExpressJs, Cors, Pg, dontEnv. 
## Run Locall

#### Clone the project
```bash
  git clone https://github.com/joche-dev/appusuarios-backend.git
```

#### Go to the project directory
```bash
  cd appusuarios-backend
```

#### Install dependencies
```bash
  npm install
```
#### Environment Variables
To run this project, you will need to add the following environment variables to your .env file
```bash
  PGUSER="postgres"
  PGHOST="localhost"
  PGPASSWORD="postgres"
  PGDATABASE="app_usuarios"
  PGPORT=5432
  PORT = 4000
```
#### Data Base PostgreSQL
To run this project, you will need to create data base in pgAdmin or psql.

```sql
CREATE DATABASE app_usuarios;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  phone VARCHAR(20) NOT NULL
  region VARCHAR(100) NOT NULL,
  commune VARCHAR(100) NOT NULL
);
```

#### Start the server
```bash
  npm run start
```


## API Reference

### GET /users
**Description:** Retrieves a list of all users.

**Response:**
```json
{
  "ok": true,
  "data": [
    {
      "id": 1,
      "name": "Juan Perez",
      "email": "juan.perez@example.com",
      "phone": "912345678",
      "region": "Metropolitana de Santiago",
      "commune": "La Florida"
    },
    ...
  ]
}
```
### GET /users/:id

**Description:** Retrieves a specific user by their ID.

**Path Parameters:** :id: The unique identifier of the user (integer)

**Response:**
```json
{
  "ok": true,
  "data": {
    "id": 1,
    "name": "Juan Perez",
    "email": "juan.perez@example.com",
    "phone": "912345678",
    "region": "Metropolitana de Santiago",
    "commune": "La Florida"
  }
}
```

### POST /users

**Description**: Creates a new user.

**Request Body**:
```json
{
  "name": "Juan Perez",
  "email": "juan.perez@example.com",
  "phone": "912345678",
  "region": "Metropolitana de Santiago",
  "commune": "La Florida"
}
```

**Response:**
```json
{
  "ok": true,
  "message": "Registro del usuario exitoso."
}
```

### PUT /users/:id

**Description:** Updates an existing user.

**Path Parameters**: :id: The unique identifier of the user (integer)

**Request Body**:
```json
{
  "name": "Juan Perez",
  "email": "juan.perez@example.com",
  "phone": "912345678",
  "region": "Metropolitana de Santiago",
  "commune": "La Florida"
}
```

**Response:**
```json
{
  "ok": true,
  "message": "Actualización de usuario exitoso."
}
```

### DELETE /users/:id

**Description:** Deletes a specific user by their ID.

**Path Parameters:** :id: The unique identifier of the user (integer)

**Response:**
```json
{
  "ok": true,
  "message": "Usuario eliminado con éxito."
}
```