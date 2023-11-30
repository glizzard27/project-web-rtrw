// Impoer Toolkit dari react-router-dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Impor Routing Halaman User / Visitor
import Beranda from "./Pages/Beranda";
import NotFound from "./Pages/NotFound";
import TataTertib from "./Pages/TataTertib";
import Organisasi from "./Pages/Organisasi";
import ProgramKerja from "./Pages/ProgramKerja";
import StatistikUsia from "./Pages/StatistikUsia"
import StatistikJK from "./Pages/StatistikJK"
import StatistikPosisi from "./Pages/StatistikPosisi";
import StatistikStatus from "./Pages/StatistikStatus";
import StatistikAgama from "./Pages/StatistikAgama";
import StatistikPendidikan from "./Pages/StatistikPendidikan";
import Berita from "./Pages/Berita";
import DetailBerita from "./Pages/DetailBerita";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

// Impor Routing Halaman Admin
import AdminDashBoardPage from "./Pages/AdminDashBoardPage";
import AdminDataKeluarga from "./Pages/AdminDataKeluarga";
import AdminTambahDataKeluarga from "./Pages/AdminTambahDataKeluarga";
import AdminEditDataKeluarga from "./Pages/AdminEditDataKeluarga";
import AdminDetailDataWarga from "./Pages/AdminDetailDataWarga";
import AdminTambahDataWarga from "./Pages/AdminTambahDataWarga";
import AdminEditDataWarga from "./Pages/AdminEditDataWarga";
import AdminDetailDataKeluarga from "./Pages/AdminDetailDataKeluarga";
import AdminDataAdmin from "./Pages/AdminDataAdmin";
import AdminEditDataAdmin from "./Pages/AdminEditDataAdmin";
import AdminBerita from "./Pages/AdminBerita";
import AdminTambahBerita from "./Pages/AdminTambahBerita";
import AdminUpdateBerita from "./Pages/AdminUpdateBerita";
import AdminDetailBerita from "./Pages/AdminDetailBerita";
import AdminKritikSaran from "./Pages/AdminKritikSaran";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Halaman Visitor / User */}
        <Route path="/" element={<Beranda />} />
        <Route path="/tartib" element={<TataTertib />} />
        <Route path="/organisasi" element={<Organisasi />} />
        <Route path="/programkerja" element={<ProgramKerja />} />
        <Route path="/statistik-usiawarga" element={<StatistikUsia />} />
        <Route path="/statistik-jk" element={<StatistikJK />} />
        <Route path="/statistik-posisi" element={<StatistikPosisi />} />
        <Route path="/statistik-status" element={<StatistikStatus />} />
        <Route path="/statistik-agama" element={<StatistikAgama />} />
        <Route path="/statistik-pendidikan" element={<StatistikPendidikan />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/detailberita/:id" element={<DetailBerita />} />

        {/* Halaman Admin */}
        <Route path="/dashboard" element={<AdminDashBoardPage />} />
        <Route path="/admindatakeluarga" element={<AdminDataKeluarga />} />
        <Route path="/admindatakeluarga/tambahdatakeluarga" element={<AdminTambahDataKeluarga />} />
        <Route path="/admindatakeluarga/updatedatakeluarga/:id_keluarga" element={<AdminEditDataKeluarga />} />
        <Route path="/admindatawarga/detaildatawarga" element={<AdminDetailDataWarga />} />
        <Route path="/admindatawarga/tambahdatawarga/:id_keluarga/warga" element={<AdminTambahDataWarga />} />
        <Route path="/admindatawarga/updatedatawarga/warga/:id_warga" element={<AdminEditDataWarga />} />
        <Route path="/admindatawarga/detaildatakeluarga/:id_keluarga" element={<AdminDetailDataKeluarga />} />
        <Route path="/admindataadmin" element={<AdminDataAdmin />} />
        <Route path="/adminedit/:id" element={<AdminEditDataAdmin />} />
        <Route path="/adminberita" element={<AdminBerita />} />
        <Route path="/adminberita/tambahberita" element={<AdminTambahBerita />} />
        <Route path="/adminberita/updateberita/:id" element={<AdminUpdateBerita />} />
        <Route path="/adminberita/detailberita/:id" element={<AdminDetailBerita />} />
        <Route path="/adminkritiksaran" element={<AdminKritikSaran />} />


        {/* Halaman Authentikasi User */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Halaman Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
