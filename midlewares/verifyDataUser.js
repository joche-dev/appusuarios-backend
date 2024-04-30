import { handleError } from "../utilities/handleError.js";


export const verifyDataUser = (req, res, next) => {
    try {
      const { name, email, phone, age, region, commune } = req.body;
      if (!name || !email || !phone || !age || !region || !commune) {
        throw { code: 400, message: 'Faltan campos requeridos.' };
      }
  
      const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
      if (!isEmailValid) {
        throw { code: 400, message: 'El email proporcionado no es válido.' };
      }

      const isPhoneValid = /^(?:2|9)[0-9]{8}$/.test(phone);
      if (!isPhoneValid) {
        throw { code: 400, message: 'El número de telefono proporcionado no es válido.' };
      }

      const isAgeValid = /^[0-9]+$/.test(age);
      if (!isAgeValid) {
        throw { code: 400, message: 'La edad debe ser numérico.' };
      }
  
      next();
    } catch (error) {
      const { status, message } = handleError(error.code, error.message);
      return res.status(status).json({ ok: false, message });
    }
  };