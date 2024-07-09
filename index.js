const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors
const infoRoutes = require('./routes/info_routes'); // Ensure this path is correct
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/info", infoRoutes);
app.use("/api/create", infoRoutes);

mongoose.connect('mongodb://localhost:27017/dbinfo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to database!");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((error) => {
    console.error("Connection failed!", error);
});