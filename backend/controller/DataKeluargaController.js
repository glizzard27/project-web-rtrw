import { Warga, defineRelationship } from "../models/defineRelationship.js";
import Keluarga from "../models/DataKeluargaModel.js";
import { getWargaAll } from "./DataWargaController.js";

// Setelah impor, panggil fungsi defineRelationship untuk mengatur relasi
defineRelationship();

export const getKeluarga = async (req, res) => {
    try {
        const response = await Keluarga.findAll();
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message);
    }
}

export const getDataKeluargaById = async (req, res) => {
    const keluargaId = req.params.id; // Mendapatkan ID keluarga dari parameter URL
    if (keluargaId !== "warga") { // Tambahkan kondisi untuk memisahkan antara ID keluarga dan permintaan untuk semua warga
        try {
            const keluarga = await Keluarga.findByPk(keluargaId);
            if (!keluarga) {
                return res.status(404).json({ message: "Data keluarga tidak ditemukan." });
            }
            res.status(200).json(keluarga);
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ message: "Terjadi kesalahan pada server." });
        }
    } else {
        // Panggil fungsi getWargaAll jika permintaan adalah untuk semua warga
        getWargaAll(req, res);
    }
};

export const createDataKeluarga = async (req, res) => {
    try {
        await Keluarga.create(req.body)
        res.status(201).json({ msg: "Data Keluarga berhasil Dibuat !" })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Terjadi kesalahan pada server." });
    }
};

export const updateDataKeluarga = async (req, res) => {
    const keluargaId = req.params.id; // Mendapatkan ID keluarga dari parameter URL
    const { nama_keluarga, alamat } = req.body; // Mendapatkan nilai nama_keluarga dan alamat dari body request
    try {
        const keluarga = await Keluarga.findByPk(keluargaId);
        if (!keluarga) {
            return res.status(404).json({ message: "Data keluarga tidak ditemukan." });
        }
        if (nama_keluarga) {
            keluarga.nama_keluarga = nama_keluarga; // Mengupdate nilai nama_keluarga jika ada
        }
        if (alamat) {
            keluarga.alamat = alamat; // Mengupdate nilai alamat jika ada
        }
        await keluarga.save(); // Menyimpan perubahan ke database
        res.status(200).json({ message: "Data Keluarga Berhasil di Update !", data: keluarga });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Terjadi kesalahan pada server." });
    }
};

export const deleteDataKeluarga = async (req, res) => {
    const keluargaId = req.params.id; // Mendapatkan ID keluarga dari parameter URL
    try {
        const keluarga = await Keluarga.findByPk(keluargaId, {
            include: {
                model: Warga,
            },
        }); // Mengambil keluarga beserta warganya

        if (!keluarga) {
            return res.status(404).json({ message: "Data keluarga tidak ditemukan." });
        }

        // Menghapus semua data warga terkait
        await Warga.destroy({ where: { id_keluarga: keluargaId } });

        // Menghapus data keluarga
        await keluarga.destroy();

        res.status(200).json({ message: "Data keluarga berhasil dihapus." });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Terjadi kesalahan pada server." });
    }
};


