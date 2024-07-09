const mongoose = require ('mongoose');
const infoSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true,

    },
    alamat: {
        type: String,
        required: true,
    },

    noktp: {
        type: Number,
        required: true,
    },

    pilihanpaket: {
        type: String,
        required: true,
    
    },

});

module.exports = mongoose.model('Info', infoSchema);