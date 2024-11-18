require('pg');
const express = require('express');
const app = express();
require('dotenv').config();
const authRoutes = require('./routes/auth');
const multer = require('multer');
const upload = multer();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello, CV Distributor Service!');
});
app.use('/auth', upload.none(), authRoutes);


const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
