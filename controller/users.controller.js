import { usersModel } from "../models/users.model.js";
import { handleError } from "../utilities/handleError.js";


const getUsers = async (req, res) => {
  try {
    const data = await usersModel.getUsers()

    return data.length > 0 ?
      res.status(200).json({ ok: true, data }) :
      res.status(200).json({ ok: true, message: 'No hay usuarios registrados.' });
     
  } catch (error) {
    const { status, message } = handleError(error.code, error.message);
    return res.status(status).json({ ok: false, message });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw { code: 400, message: 'Id del usuario no proporcionado.' };
    }

    const data = await usersModel.getUser(id)

    return data ?
      res.status(200).json({ ok: true, data }) :
      res.status(200).json({ ok: true, message: 'El usuario no existe.' });
     
  } catch (error) {
    const { status, message } = handleError(error.code, error.message);
    return res.status(status).json({ ok: false, message });
  }
};

const newUser = async (req, res) => {
  try {
    const { name, email, phone, region, commune } = req.body;

    const checkEmail = await usersModel.checkEmailUser(email)
    if (checkEmail) {
      throw { code: 400, message: `El email ${email} ya está registrado.` };
    }

    const result = await usersModel.newUser( name, email, phone, region, commune );
    if (!result) {
      throw { code: 400, message: 'Registro de usuario fallido.' };
    }

    return res.status(201).json({ ok: true, message: 'Registro del usuario exitoso.' });
  } catch (error) {
    const { status, message } = handleError(error.code, error.message);
    return res.status(status).json({ ok: false, message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone, age, region, commune } = req.body;

    if (!id) {
      throw { code: 400, message: 'Id del usuario no proporcionado.' };
    }

    const result = await usersModel.updateUser(id, name, email, phone, age, region, commune);
    if (!result) {
      throw { code: 400, message: 'Actualización de usuario fallido.' };
    }

    return res.status(200).json({ ok: true, message: 'Actualización de usuario exitoso.' });
  } catch (error) {
    return res.status(500).json({ ok: false, message: error.message });
  }
};

const removeUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw { code: 400, message: 'Id del usuario no proporcionado.' };
    }

    const result = await usersModel.removeUser(id);
    if (!result) {
      throw { code: 400, message: 'Usuario no eliminado con éxito.' };
    }

    return res.status(200).json({ ok: true, message: 'Usuario eliminado con éxito.' });
  } catch (error) {
    const { status, message } = handleError(error.code, error.message);
    return res.status(status).json({ ok: false, message });
  }
};

export const usersController = {
  getUsers,
  getUser,
  newUser,
  updateUser,
  removeUser,
};
