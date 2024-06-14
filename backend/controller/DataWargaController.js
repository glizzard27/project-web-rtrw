import { Warga, defineRelationship } from "../models/defineRelationship.js";
import Keluarga from "../models/DataKeluargaModel.js";

// Setelah impor, panggil fungsi defineRelationship untuk mengatur relasi
defineRelationship();

export const getWargaAll = async (req, res) => {
    try {
        const warga = await Warga.findAll();
        if (warga.length === 0) {
            return res.status(404).json({ message: "Data warga tidak ditemukan." });
        }
        res.status(200).json(warga);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Terjadi kesalahan pada server." });
    }
};


export const getWarga = async (req, res) => {
    const keluargaId = req.params.id;

    try {
        const wrg = await Warga.findAll({
            where: { id_keluarga: keluargaId },
        });

        if (wrg.length === 0) {
            return res.status(404).json({ message: "Anggota keluarga tidak ditemukan." });
        }

        res.status(200).json(wrg);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Terjadi kesalahan pada server." });
    }
};

export const getWargaById = async (req, res) => {
    const wargaId = req.params.id;

    try {
        const warga = await Warga.findByPk(wargaId);

        if (!warga) {
            return res.status(404).json({ message: "Anggota keluarga tidak ditemukan." });
        }

        res.status(200).json(warga);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Terjadi kesalahan pada server." });
    }
};


export const createWarga = async (req, res) => {
    const keluargaId = req.params.id;

    try {

        // Cek keberadaan id_keluarga di database
        const keluarga = await Keluarga.findByPk(keluargaId);
        if (!keluarga) {
            return res.status(404).json({ message: "Id Keluarga tidak ada di dalam database." });
        }

        const warga = await Warga.create({
            id_keluarga: keluargaId,
            nama: req.body.nama,
            usia: req.body.usia,
            jk: req.body.jk,
            posisi: req.body.posisi,
            status: req.body.status,
            agama: req.body.agama,
            pendidikan: req.body.pendidikan
        });

        res.status(201).json({ message: "Data Warga berhasil Dibuat !", data: warga });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Terjadi kesalahan pada server." });
    }
};

export const updateWarga = async (req, res) => {
    const wargaId = req.params.id;
    const { nama, usia, jk, posisi, status, agama, pendidikan } = req.body;

    try {
        const wrg = await Warga.findByPk(wargaId);

        if (!wrg) {
            return res.status(404).json({ message: "Anggota keluarga tidak ditemukan." });
        }

        wrg.nama = nama;
        wrg.usia = usia;
        wrg.jk = jk;
        wrg.posisi = posisi;
        wrg.status = status;
        wrg.agama = agama;
        wrg.pendidikan = pendidikan;

        await wrg.save();

        res.status(200).json({ message: "Anggota keluarga berhasil diperbarui.", data: wrg });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Terjadi kesalahan pada server." });
    }
};

export const deleteWarga = async (req, res) => {
    const wargaId = req.params.id;

    try {
        const wrg = await Warga.findByPk(wargaId);

        if (!wrg) {
            return res.status(404).json({ message: "Anggota keluarga tidak ditemukan." });
        }

        await wrg.destroy();

        res.status(200).json({ message: "Anggota keluarga berhasil dihapus." });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Terjadi kesalahan pada server." });
    }
};
