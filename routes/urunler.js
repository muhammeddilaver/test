const express = require("express");
const router = express.Router();

const Urunler = require("../models/Urunler");

router.post("/ekle", (req, res, next) => {
    const { ad, stok, fiyat, kategori_id, aciklama, durum } = req.body;

    const urun = new Urunler({
        ad: ad,
        stok: stok,
        fiyat: fiyat,
        kategori_id: kategori_id,
        aciklama: aciklama,
        durum: durum
    });

	promise = urun.save();

	promise.then((data) => {
		res.json(data);
	}).catch((err) => {
		res.json(err);
	});
});

module.exports = router;
