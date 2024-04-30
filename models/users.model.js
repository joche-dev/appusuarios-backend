import pool from '../database/conexion.js'


const getUsers = async () => {
  const query = 'SELECT * FROM users;';
  const { rows } = await pool.query(query);
  return rows;
};

const checkEmailUser = async (email) => {
  const query = 'SELECT email FROM users WHERE email = $1';
  const { rowCount } = await pool.query(query, [email]);
  return rowCount;
};

const newUser = async (name, email, phone, age, region, commune) => {
  const query = 'INSERT INTO users (name, email, phone, age, region, commune) VALUES ($1, $2, $3, $4, $5, $6);';
  const { rowCount } = await pool.query(query, [name, email, phone, age, region, commune]);
  return rowCount;
};

const updateUser = async (id, name, email, phone, age, region, commune) => {
  const query = `UPDATE users SET name = $1, email = $2, phone = $3, age = $4, region = $5, commune = $6
    WHERE id = $7 AND NOT EXISTS (SELECT 1 FROM users WHERE email = $2 AND id != $7);`;
  const { rowCount } = await pool.query(query, [name, email, phone, age, region, commune, id]);
  return rowCount;
};

const removeUser = async (id) => {
  const query = 'DELETE FROM users WHERE id = $1';
  const { rowCount } = await pool.query(query, [id]);
  return rowCount;
};

export const usersModel = {
  getUsers,
  checkEmailUser,
  newUser,
  updateUser,
  removeUser,
};
