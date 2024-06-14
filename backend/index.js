// Packages Library Import
import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import cookieParser from "cookie-parser";
import session from "express-session";

// Define import Backend Routes 
import BeritaRoute from "./routes/BeritaRoute.js";
import DataKeluargaRoute from "./routes/DataKeluargaRoute.js"
import DataWargaRoute from "./routes/DataWargaRoute.js"
import AdminAuthRoute from "./routes/AdminAuthRoute.js"
import KritikSaranRoute from "./routes/KritikSaranRoute.js"

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(cookieParser());
app.use(
    session({
        secret: 'secret_key',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false },
    })
);

app.use(BeritaRoute);
app.use(DataKeluargaRoute);
app.use(DataWargaRoute);
app.use(AdminAuthRoute);
app.use(KritikSaranRoute);

app.listen(PORT, () => {
    console.log(`Server Up and Running on port ${PORT}`);
})