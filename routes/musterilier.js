const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const Musteriler = require("../models/Musteriler");

router.get("/", (req, res) => {
    const promise = Musteriler.find({});
    promise
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.get("/:musteri_id", (req, res) => {
    const promise = Musteriler.findById(req.params.musteri_id);
    promise
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            next({ message: "müşteri yok" });
        });
});

router.delete("/:musteri_id", (req, res) => {
    const promise = Musteriler.findByIdAndRemove(req.params.musteri_id);
    promise
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            next({ message: "müşteri yok" });
        });
});

router.put("/:musteri_id", (req, res, next) => {
    const { ad, firma_ad, telefon, email, adres, sifre } = req.body;

    const promise = Musteriler.findByIdAndUpdate(req.params.musteri_id, {
        ad: ad,
        firma_ad: firma_ad,
        telefon: telefon,
        email: email,
        adres: adres,
        sifre: sifre,
    });

    promise
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            next({ message: "urun yok", code: 11 });
        });
});

router.post("/ekle", (req, res, next) => {
    const { ad, firma_ad, telefon, email, adres, sifre } = req.body;

    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(sifre, salt, function(err, hash) {
            const musteri = new Musteriler({
                ad: ad,
                firma_ad: firma_ad,
                telefon: telefon,
                email: email,
                adres: adres,
                sifre: hash,
            });
        
            const promise = musteri.save();
    
            promise
                .then((data) => {
                    res.json(data);
                })
                .catch((err) => {
                    res.json(err);
                });
        });
    });
});

module.exports = router;
