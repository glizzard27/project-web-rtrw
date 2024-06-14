import express from 'express';
import {
    register,
    login,
    logout,
    getAdminLoggedIn,
    getAllAdminsData,
    getAdminById,
    updateAdmin,
    deleteAdmin,
} from '../controller/AdminAuthController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/admin', getAdminLoggedIn);
router.get('/admins', getAllAdminsData);
router.get('/admins/:id', getAdminById);
router.patch('/admins/:id', updateAdmin);
router.delete('/admins/:id', deleteAdmin);

export default router;
