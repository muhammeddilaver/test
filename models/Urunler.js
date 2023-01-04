const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UrunlerSchema = new Schema({
    ad: {
        type: String,
        required: true
    },
    stok: {
        type: Number
    },
    fiyat:{
        type: Number
    },
    aciklama: {
        type: String
    },
    durum: {
        type: Boolean
    },
    kategori_id: {
        type: Schema.Types.ObjectId
    }
});

module.exports = mongoose.model('urun', UrunlerSchema);