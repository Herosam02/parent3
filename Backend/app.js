const express = require('express');
const studentProfileRoutes = require('./routes/studentProfileRoutes');
const parentProfileRoutes = require('./routes/parentProfileRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const tussionFeeRoutes = require('./routes/tussionFeeRoutes');
const classRoutes = require('./routes/classRoutes')
const connectDB = require('./config/database');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();

connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())

app.use('/students', studentProfileRoutes);
app.use('/api', parentProfileRoutes);
app.use('/teachers', teacherRoutes);
app.use('/classes', classRoutes);
app.use('/Tussions', tussionFeeRoutes)


// Middleware


// Mounting the student routes

app.use((err, req, res, next) => {
    console.log(err.stick);
    res.status(500).send('Server Error')
})

// Start the server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});