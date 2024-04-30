CREATE DATABASE app_usuarios;

-- Tabla de Usuarios
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  phone VARCHAR(20) NOT NULL,
  age INT NOT NULL,
  region VARCHAR(100) NOT NULL,
  commune VARCHAR(100) NOT NULL
);

INSERT INTO users (name, email, phone, age, region, commune)
VALUES
  ('Juan Perez', 'juan.perez@example.com', '912345678', 30, 'Metropolitana de Santiago', 'La Florida'),
  ('Maria Garcia', 'maria.garcia@example.com', '987654321', 25, 'Metropolitana de Santiago', 'Pirque'),
  ('Pedro Lopez', 'pedro.lopez@example.com', '998765432', 40, 'Metropolitana de Santiago', 'San Bernardo');
