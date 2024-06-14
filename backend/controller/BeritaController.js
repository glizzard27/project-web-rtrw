import { error, log } from "console";
import Berita from "../models/BeritaModel.js";
import path from "path";
import fs from "fs"
import moment from 'moment';


export const getBerita = async (req, res) => {
    try {
        const response = await Berita.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getBeritaById = async (req, res) => {
    try {
        const response = await Berita.findOne({
            where: {
                id: req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const saveBerita = (req, res) => {
    if (req.files === null) return res.status(400).json({ msg: "No File Uploaded" });
    const title = req.body.title;
    const content = req.body.content;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png', '.jpg', '.jpeg'];

    // Validasi Ukuran Gambar
    if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: "Ekstensi Gambar Invalid " });
    if (fileSize > 10000000) return res.status(422).json({ msg: "Ukuran Gambar Harus Kurang Dari 10 MB" });

    file.mv(`./public/images/${fileName}`, async (err) => {
        if (err) return res.status(500).json({ msg: err.message });
        try {
            await Berita.create({ title: title, content: content, image: fileName, url: url });
            res.status(201).json({ msg: "Berita Berhasil Dibuat !" })
        } catch (error) {
            console.log(error.message);
        }
    })
}

export const updateBerita = async (req, res) => {
    const berita = await Berita.findOne({
        where: {
            id: req.params.id
        }
    });
    if (!berita) return req.status(404).json({ msg: "Data Tidak Ditemukan !" });
    let fileName = "";
    if (req.files === null) {
        fileName = Berita.image;
    } else {
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png', '.jpg', '.jpeg'];

        // Validasi Ukuran Gambar
        if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: "Ekstensi Gambar Invalid " });
        if (fileSize > 10000000) return res.status(422).json({ msg: "Ukuran Gambar Harus Kurang Dari 10 MB" });

        // Berfungsi Untuk Menghapus gambar yang lama
        const filepath = `./public/images/${berita.image}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/images/${fileName}`, (err) => {
            if (err) return res.status(500).json({ msg: err.message });
        })
    }

    const title = req.body.title;
    const content = req.body.content;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    try {
        await Berita.update({ title: title, content: content, image: fileName, url: url, }, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Berita Berhasil Terupdate !" })
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteBerita = async (req, res) => {
    const berita = await Berita.findOne({
        where: {
            id: req.params.id
        }
    });
    if (!berita) return res.status(404).json({ msg: "Data Tidak Ditemukan !" });
    try {
        const filepath = `./public/images/${berita.image}`;
        fs.unlinkSync(filepath);
        await Berita.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Berita Berhasil Dihapus !" });
    } catch (error) {
        console.log(error.message);
    }
}

export const getCreatedAtBeritaById = async (req, res) => {
    try {
        const berita = await Berita.findOne({
            where: {
                id: req.params.id
            }
        });

        if (!berita) {
            return res.status(404).json({ msg: "Data Tidak Ditemukan!" });
        }

        const createdAt = moment(berita.createdAt).format("DD-MM-YYYY | HH:mm:ss");
        res.json({ createdAt });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Terjadi kesalahan saat mengambil data." });
    }
};


export const getUpdatedAtBeritaById = async (req, res) => {
    try {
        const berita = await Berita.findOne({
            where: {
                id: req.params.id
            }
        });

        if (!berita) {
            return res.status(404).json({ msg: "Data Tidak Ditemukan!" });
        }

        const updatedAt = moment(berita.updatedAt).format("DD-MM-YYYY | HH:mm:ss");
        res.json({ updatedAt });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Terjadi kesalahan saat mengambil data." });
    }
};


