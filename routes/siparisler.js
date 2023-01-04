const express = require("express");
const router = express.Router();

const Siparisler = require("../models/Siparisler");

router.post("/ekle", (req, res, next) => {
    const { musteri_id, urunler, durum, aciklama} = req.body;
    const urunlerArray = JSON.parse(urunler);

    let tutar = 0;
    urunlerArray.forEach(urun => {
        tutar += urun.fiyat * urun.adet;
    });
    
    const siparis = new Siparisler({
        musteri_id: musteri_id,
        urunler: urunlerArray,
        durum: durum,
        aciklama: aciklama,
        tutar: tutar
    });

	promise = siparis.save();

	promise.then((data) => {
		res.json(data);
	}).catch((err) => {
		res.json(err);
	});
});

module.exports = router;
