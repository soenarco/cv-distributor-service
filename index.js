require('pg');
require('dotenv').config();
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const app = express();
const upload = multer();
const authRoutes = require('./routes/auth');
const productRoute = require('./routes/productRoute');

// Konfigurasi CORS
const corsOptions = {
    origin: ['https://cv-distributor-project.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'], 
    credentials: true,
};

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://cv-distributor-project.vercel.app');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello, CV Distributor Service!');
});

app.use('/auth', upload.none(), authRoutes);
app.use('/v1/product', upload.none(), productRoute);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
