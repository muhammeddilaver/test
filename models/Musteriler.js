const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MusterilerSchema = new Schema({
    ad: {
        type: String,
        required: true
    },
    firma_ad: {
        type: String
    }, 
    telefon: {
        type: String
    },
    email: {
        type: String
    },
    adres: {
        type: String
    },
    sifre: {
        type: String
    }
});

module.exports = mongoose.model('musteri', MusterilerSchema);