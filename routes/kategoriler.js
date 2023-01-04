const express = require("express");
const router = express.Router();

const Kategoriler = require("../models/Kategoriler");

router.get("/", (req, res) => {
    const promise = Kategoriler.find({ });
    promise.then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    });
});

router.get("/:kategori_id", (req, res) => {
    const promise = Kategoriler.findById(req.params.kategori_id);
    promise.then((data) => {
        res.json(data);
    }).catch((err) => {
        next({ message: 'kategori yok'});
    });
});

router.delete("/:kategori_id", (req, res) => {
    const promise = Kategoriler.findByIdAndRemove(req.params.kategori_id);
    promise.then((data) => {
        res.json(data);
    }).catch((err) => {
        next({ message: 'kategori yok'});
    });
});

router.put("/:kategori_id", (req, res, next) => {
    const { ad, ust_kategori_id} = req.body;

    const promise = Kategoriler.findByIdAndUpdate(req.params.kategori_id, {
        ad: ad,
        ust_kategori_id: ust_kategori_id
    });
    
    promise.then((data) => {
        res.json(data);
    }).catch((err) => {
        next({ message: 'kategori yok', code: 11});
    });
});

router.post("/ekle", (req, res, next) => {
    const { ad, ust_kategori_id} = req.body;

    const kategori = new Kategoriler({
        ad: ad,
        ust_kategori_id: ust_kategori_id
    });

	const promise = kategori.save();

	promise.then((data) => {
		res.json(data);
	}).catch((err) => {
		res.json(err);
	});
});

module.exports = router;
