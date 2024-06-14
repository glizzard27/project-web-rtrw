import Keluarga from "./DataKeluargaModel.js";
import Warga from "./DataWargaModel.js"

const defineRelationship = () => {
    // Membuat relasi antara tabel_keluarga dan tabel_warga
    Keluarga.hasMany(Warga, { foreignKey: 'id_keluarga', onDelete: 'CASCADE' });
    Warga.belongsTo(Keluarga, { foreignKey: 'id_keluarga', onDelete: 'CASCADE', });
};

export { Warga, defineRelationship };