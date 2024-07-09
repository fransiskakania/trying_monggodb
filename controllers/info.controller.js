const Info = require('../models/info');

// Get all info
exports.getAllInfo = async (req, res) => {
    try {
        const info = await Info.find();
        res.json(info);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create new info
exports.createInfo = async (req, res) => {
    const info = new Info({
        nama: req.body.nama,
        alamat: req.body.alamat,
        noktp: req.body.noktp,
        pilihanpaket: req.body.pilihanpaket,
    });

    try {
        const newInfo = await info.save();
        res.status(201).json(newInfo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};