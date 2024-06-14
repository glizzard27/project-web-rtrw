import express from "express"
import {
    getKritikSaranAll,
    getKritikSaranById,
    createKritikSaran,
    editKritikSaran,
    hapusKritikSaran,
    getCreatedAtKritikSaranById,
    getUpdatedAtKritikSaranById
} from "../controller/KritikSaranController.js"

const router = express.Router();

router.get('/kritiksaran', getKritikSaranAll);
router.get('/kritiksaran/:id', getKritikSaranById);
router.post('/kritiksaran', createKritikSaran);
router.patch('/kritiksaran/:id', editKritikSaran);
router.delete('/kritiksaran/:id', hapusKritikSaran);
router.get('/kritiksaran/:id', getCreatedAtKritikSaranById);
router.get('/kritiksaran/:id', getUpdatedAtKritikSaranById);


export default router