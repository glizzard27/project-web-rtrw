import express from 'express';
import {
    getWargaAll,
    getWarga,
    getWargaById,
    createWarga,
    updateWarga,
    deleteWarga,
} from '../controller/DataWargaController.js';

const router = express.Router();

router.get('/datakeluarga/warga', getWargaAll)

// GET /datakeluarga/:id/warga - Mendapatkan data anggota keluarga berdasarkan ID keluarga
router.get('/datakeluarga/:id/warga', getWarga);

// GET /datakeluarga/datawarga/:id - Mendapatkan data anggota keluarga berdasarkan ID
router.get('/datakeluarga/warga/:id', getWargaById);

// POST /datakeluarga/:id/warga - Membuat data anggota keluarga baru pada keluarga dengan ID tertentu
router.post('/datakeluarga/:id/warga', createWarga);

// PATCH /datakeluarga/warga/:id - Memperbarui data anggota keluarga berdasarkan ID
router.patch('/datakeluarga/warga/:id', updateWarga);

// DELETE /datakeluarga/warga/:id - Menghapus data anggota keluarga berdasarkan ID
router.delete('/datakeluarga/warga/:id', deleteWarga);

export default router;

