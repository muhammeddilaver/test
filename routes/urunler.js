const express = require("express");
const router = express.Router();

const Urunler = require("../models/Urunler");

router.get("/sayfa/:sayfa", (req, res) => {
    const urunSayisi = 3;
    const promise = Urunler.find({ })
        .skip((req.params.sayfa - 1 ) * urunSayisi)
        .limit(urunSayisi);
    promise.then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    });
});

router.get("/:urun_id", (req, res, next) => {
    const promise = Urunler.findById(req.params.urun_id);
    promise.then((data) => {
        res.json(data);
    }).catch((err) => {
        next({ message: 'urun yok', code: 11});
    });
});

router.get("/kategori/:kategori_id/sayfa/:sayfa", (req, res, next) => {
    const urunSayisi = 3;
    const promise = Urunler.find({kategori_id: req.params.kategori_id})
    .skip((req.params.sayfa - 1 ) * urunSayisi)
    .limit(urunSayisi);
    promise.then((data) => {
        res.json(data);
    }).catch((err) => {
        next({ message: 'urun yok', code: 11});
    });
});

router.delete("/:urun_id", (req, res, next) => {
    const promise = Urunler.findByIdAndRemove(req.params.urun_id);
    promise.then((data) => {
        res.json(data);
    }).catch((err) => {
        next({ message: 'urun yok', code: 11});
    });
});

router.put("/:urun_id", (req, res, next) => {
    const { ad, stok, fiyat, kategori_id, aciklama, durum } = req.body;

    const promise = Urunler.findByIdAndUpdate(req.params.urun_id, {
        ad: ad,
        stok: stok,
        fiyat: fiyat,
        kategori_id: kategori_id,
        aciklama: aciklama,
        durum: durum
    });

    promise.then((data) => {
        res.json(data);
    }).catch((err) => {
        next({ message: 'urun yok', code: 11});
    });
});

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

	const promise = urun.save();

	promise.then((data) => {
		res.json(data);
	}).catch((err) => {
		res.json(err);
	});
});

module.exports = router;
