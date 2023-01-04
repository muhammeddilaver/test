const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SiparislerSchema = new Schema({
    musteri_id: {
        type: Schema.Types.ObjectId
    },
    urunler: [
        {
            urun_id: {
                type: Schema.Types.ObjectId
            },
            fiyat: {
                type: Number
            },
            adet:{
                type: Number
            }
        }
    ],
    tarih: {
        type: Date,
        default: Date.now
    },
    durum: {
        type: Boolean
    },
    tutar: {
        type: Number
    },
    aciklama: {
        type: String
    }
});

module.exports = mongoose.model('siparis', SiparislerSchema);