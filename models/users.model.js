import pool from '../database/conexion.js'


const getUsers = async () => {
  const query = 'SELECT * FROM users;';
  const { rows } = await pool.query(query);
  return rows;
};

const getUser = async (id) => {
  const query = 'SELECT * FROM users WHERE id = $1;';
  const { rows} = await pool.query(query, [id]);
  return rows[0];
};

const checkEmailUser = async (email) => {
  const query = 'SELECT email FROM users WHERE email = $1';
  const { rowCount } = await pool.query(query, [email]);
  return rowCount;
};

const newUser = async (name, email, phone, region, commune) => {
  const query = 'INSERT INTO users (name, email, phone, region, commune) VALUES ($1, $2, $3, $4, $5);';
  const { rowCount } = await pool.query(query, [name, email, phone, region, commune]);
  return rowCount;
};

const updateUser = async (id, name, email, phone, region, commune) => {
  const query = `UPDATE users SET name = $1, email = $2, phone = $3, region = $4, commune = $5
    WHERE id = $6 AND NOT EXISTS (SELECT 1 FROM users WHERE email = $2 AND id != $6);`;
  const { rowCount } = await pool.query(query, [name, email, phone, region, commune, id]);
  return rowCount;
};

const removeUser = async (id) => {
  const query = 'DELETE FROM users WHERE id = $1';
  const { rowCount } = await pool.query(query, [id]);
  return rowCount;
};

export const usersModel = {
  getUsers,
  getUser,
  checkEmailUser,
  newUser,
  updateUser,
  removeUser,
};
