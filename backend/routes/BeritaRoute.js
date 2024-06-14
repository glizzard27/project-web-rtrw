import express from "express";
import {
    getBerita,
    getBeritaById,
    saveBerita,
    updateBerita,
    deleteBerita,
    getCreatedAtBeritaById,
    getUpdatedAtBeritaById
} from "../controller/BeritaController.js"

const router = express.Router();

router.get('/berita', getBerita);
router.get('/berita/:id', getBeritaById);
router.post('/berita', saveBerita);
router.patch('/berita/:id', updateBerita);
router.delete('/berita/:id', deleteBerita);
router.get('/berita/:id/created-at', getCreatedAtBeritaById);
router.get('/berita/:id/updated-at', getUpdatedAtBeritaById);

export default router;