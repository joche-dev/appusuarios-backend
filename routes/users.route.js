import { Router } from 'express';
import { verifyDataUser } from '../midlewares/verifyDataUser.js';
import { usersController } from '../controller/users.controller.js';

const router = Router();

router.get('/users', usersController.getUsers);
router.post('/users', verifyDataUser, usersController.newUser);
router.put('/users', verifyDataUser, usersController.updateUser);
router.delete('/users', usersController.removeUser);

router.all('*', (req, res) => {
  res.status(404).json({ ok: false, message: '404 Pagina no encontrada.' });
});

export default router;
