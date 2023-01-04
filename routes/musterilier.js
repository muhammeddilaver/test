const express = require("express");
const router = express.Router();

const Musteriler = require("../models/Musteriler");

router.post("/ekle", (req, res, next) => {
    const { ad, firma_ad, telefon, email, adres, sifre } = req.body;

    const musteri = new Musteriler({
        ad: ad,
        firma_ad: firma_ad,
        telefon: telefon,
        email: email,
        adres: adres,
        sifre: sifre
    });

	promise = musteri.save();

	promise.then((data) => {
		res.json(data);
	}).catch((err) => {
		res.json(err);
	});
});

module.exports = router;
