const express = require("express");
const router = express.Router();

const Siparisler = require("../models/Siparisler");

router.get("/sayfa/:sayfa", (req, res) => {
    const siparisSayisi = 3;
    const promise = Siparisler.aggregate([
        {
            $lookup: {
                from: 'musteris',
                localField: 'musteri_id',
                foreignField: '_id',
                as: 'musteri'
            }
        },
        {
            $unwind: {
                path: '$musteri',
                preserveNullAndEmptyArrays: true
            }
        }
    ])
    .skip((req.params.sayfa - 1 ) * siparisSayisi)
    .limit(siparisSayisi);
    promise.then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    });
});

router.get("/:siparis_id", (req, res) => {
    const promise = Siparisler.findById(req.params.siparis_id);
    promise.then((data) => {
        res.json(data);
    }).catch((err) => {
        next({ message: 'siparis yok'});
    });
});

router.get("/musteri/:musteri_id/sayfa/:sayfa", (req, res, next) => {
    const siparisSayisi = 3;
    const promise = Siparisler.find({musteri_id: req.params.musteri_id})
    .skip((req.params.sayfa - 1 ) * siparisSayisi)
    .limit(siparisSayisi);
    promise.then((data) => {
        res.json(data);
    }).catch((err) => {
        next({ message: 'urun yok', code: 11});
    });
});

router.delete("/:siparis_id", (req, res) => {
    const promise = Siparisler.findByIdAndRemove(req.params.siparis_id);
    promise.then((data) => {
        res.json(data);
    }).catch((err) => {
        next({ message: 'siparis yok'});
    });
});

router.put("/:siparis_id", (req, res, next) => {
    const { musteri_id, urunler, durum, aciklama} = req.body;
    const urunlerArray = JSON.parse(urunler);

    let tutar = 0;
    urunlerArray.forEach(urun => {
        tutar += urun.fiyat * urun.adet;
    });

    const promise = Siparisler.findByIdAndUpdate(req.params.siparis_id, {
        musteri_id: musteri_id,
        urunler: urunlerArray,
        durum: durum,
        aciklama: aciklama,
        tutar: tutar
    });
    
    promise.then((data) => {
        res.json(data);
    }).catch((err) => {
        next({ message: 'siparis yok', code: 11});
    });
});

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

	const promise = siparis.save();

	promise.then((data) => {
		res.json(data);
	}).catch((err) => {
		res.json(err);
	});
});

module.exports = router;
