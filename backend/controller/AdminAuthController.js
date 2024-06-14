import Admin from '../models/AdminAuthModel.js';

export const register = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Buat pengguna baru
        await Admin.create({ username, password });

        res.json({ message: 'Akun Admin Berhasil Dibuat' });
    } catch (error) {
        res.status(500).json({ error: 'Gagal Membuat Akun Admin ' });
    }
};

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Cari pengguna berdasarkan nama pengguna
        const admin = await Admin.findOne({ where: { username } });

        // Jika pengguna ditemukan dan password sesuai
        if (admin && admin.password === password) {
            // Set session untuk pengguna yang masuk
            req.session.userId = admin.id;

            res.json({ message: 'Login Berhasil' });
        } else {
            res.status(401).json({ error: 'Username Atau Password Invalid !' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Login Gagal' });
    }
};

export const logout = (req, res) => {
    // Hapus session pengguna yang keluar
    req.session.destroy();

    res.json({ message: 'Logout Berhasil' });
};

export const getAdminLoggedIn = async (req, res) => {
    try {
        if (req.session.userId) {
            const adminId = req.session.userId;
            const admin = await Admin.findByPk(adminId);
            if (admin) {
                res.json({ admin });
            } else {
                res.status(404).json({ error: 'Tidak Ada Admin yang sedang Login!' });
            }
        } else {
            res.status(404).json({ error: 'Session pengguna belum diatur!' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Gagal Mendapatkan Data Admin' });
    }
};

export const getAllAdminsData = async (req, res) => {
    try {
        const admins = await Admin.findAll();

        res.json({ admins });
    } catch (error) {
        res.status(500).json({ error: 'Failed to get admins' });
    }
};

export const getAdminById = async (req, res) => {
    try {
        const { id } = req.params;

        const admin = await Admin.findByPk(id);

        if (admin) {
            res.json({ admin });
        } else {
            res.status(404).json({ error: 'Admin Tidak Ditemukan' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Gagal Mendapatkan Data Admin' });
    }
};

export const updateAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        const { username, password } = req.body;

        const admin = await Admin.findByPk(id);

        if (admin) {
            admin.username = username || admin.username;
            admin.password = password || admin.password;

            await admin.save();

            res.json({ message: 'Data Admin berhasil Di Update !' });
        } else {
            res.status(404).json({ error: 'Data Admin Tidak ditemukan' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Gagal Mengupdate Data Admin' });
    }
};


export const deleteAdmin = async (req, res) => {
    try {
        const { id } = req.params;

        const admin = await Admin.findByPk(id);

        if (admin) {
            await admin.destroy();

            res.json({ message: 'Data Admin Berhasil Dihapus' });
        } else {
            res.status(404).json({ error: 'Admin Tidak Ditemukan !' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Gagal Menghapus data Admin !' });
    }
};
