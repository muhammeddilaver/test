const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KategorilerSchema = new Schema({
    ad: {
        type: String,
        required: true
    },
    ust_kategori_id: {
        type: Schema.Types.ObjectId
    }
});

module.exports = mongoose.model('kategori', KategorilerSchema);