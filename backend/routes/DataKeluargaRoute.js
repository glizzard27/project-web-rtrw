import express from "express";
import {
    getKeluarga,
    getDataKeluargaById,
    createDataKeluarga,
    updateDataKeluarga,
    deleteDataKeluarga
} from '../controller/DataKeluargaController.js'


const router = express.Router();
router.get('/datakeluarga', getKeluarga);
router.get('/datakeluarga/:id', getDataKeluargaById);
router.post('/datakeluarga', createDataKeluarga);
router.patch('/datakeluarga/:id', updateDataKeluarga);
router.delete('/datakeluarga/:id', deleteDataKeluarga);

export default router