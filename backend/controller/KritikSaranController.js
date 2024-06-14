import KritikSaran from "../models/KritikSaranModel.js";

export const getKritikSaranAll = async (req, res) => {
    try {
        const response = await KritikSaran.findAll();
        res.json(response)
    } catch (error) {
        console.log(error.message);
    }
}

export const getKritikSaranById = async (req, res) => {
    try {
        const response = await KritikSaran.findOne(
            {
                where: {
                    id: req.params.id
                }
            }
        );
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Terjadi kesalahan pada server." });
    }
}

export const createKritikSaran = async (req, res) => {
    try {
        const krisar = await KritikSaran.create(req.body)
        res.status(201).json({ msg: "Kritik / Saran berhasil Dibuat !", data: krisar })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Terjadi kesalahan pada server." });
    }
}

export const editKritikSaran = async (req, res) => {
    const krisarId = req.params.id;
    const { nama, pesan } = req.body

    try {
        const krisar = await KritikSaran.findByPk(krisarId);

        if (!krisar) {
            return res.status(404).json({ message: "Kritik / Saran tidak ditemukan !" });
        }

        krisar.nama = nama;
        krisar.pesan = pesan;

        await krisar.save();

        res.status(200).json({ message: "Kritik / Saran berhasil diupdate !.", data: krisar });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Terjadi kesalahan pada server." });
    }
}

export const hapusKritikSaran = async (req, res) => {
    const krisarId = req.params.id;

    try {
        const krisar = await KritikSaran.findByPk(krisarId);

        if (!krisar) {
            return res.status(404).json({ message: "Kritik / Saran tidak ditemukan !" });
        }

        await krisar.destroy();

        res.status(200).json({ message: "Kritik / Saran berhasil dihapus." });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Terjadi kesalahan pada server." });
    }
}


export const getCreatedAtKritikSaranById = async (req, res) => {
    try {
        const krisar = await KritikSaran.findOne({
            where: {
                id: req.params.id
            }
        });

        if (!krisar) {
            return res.status(404).json({ msg: "Data Tidak Ditemukan!" });
        }

        const createdAt = moment(krisar.createdAt).format("DD-MM-YYYY | HH:mm:ss");
        res.json({ createdAt });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Terjadi kesalahan saat mengambil data." });
    }
};


export const getUpdatedAtKritikSaranById = async (req, res) => {
    try {
        const krisar = await KritikSaran.findOne({
            where: {
                id: req.params.id
            }
        });

        if (!krisar) {
            return res.status(404).json({ msg: "Data Tidak Ditemukan!" });
        }

        const updatedAt = moment(krisar.updatedAt).format("DD-MM-YYYY | HH:mm:ss");
        res.json({ updatedAt });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Terjadi kesalahan saat mengambil data." });
    }
};