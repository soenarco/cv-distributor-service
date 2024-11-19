require('pg');
require('dotenv').config();
const express = require('express');
const multer = require('multer');
const app = express();
const upload = multer();
const authRoutes = require('./routes/auth');
const productRoute = require('./routes/productRoute');

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
